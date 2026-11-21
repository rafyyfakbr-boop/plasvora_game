// player.js - fisika robot (lompat, slide, jatuh, hit) dan status power-up / combo protection
import * as THREE from 'three';
import { C } from './config.js';
import { createRobot } from './models.js';

const W = C.WORLD;

export class Player {
  constructor(scene) {
    this.robot = createRobot();
    scene.add(this.robot.root); scene.add(this.robot.shadow);
    this.reset();
  }

  reset() {
    this.x = 0; this.y = 0; this.vy = 0;
    this.onGround = true; this.sliding = false;
    this.hitT = 0; this.collectT = 0; this.inv = 0; this.knock = 0; this.lock = 0; this.buf = 0;
    this.shield = false; this.boost = 0; this.magnet = 0; this.speed = 0; this.comboGuard = 0;
    this.t = 0; this.idle = false;
    this.apply();
  }

  get state() {
    if (this.idle) return 'idle';
    if (this.hitT > 0) return 'hit';
    if (!this.onGround) return this.vy > 0 ? 'jump' : 'fall';
    if (this.sliding) return 'slide';
    return 'run';
  }

  hurt() { this.hitT = 0.5; this.inv = 1.6; this.knock = 1; this.lock = 0.14; this.sliding = false; }
  pickup() { this.collectT = 0.18; }

  // wantJump: tepi tekan lompat; slideHeld: tombol bawah ditahan. Mengembalikan kejadian untuk suara dan efek.
  update(dt, wantJump, slideHeld) {
    const ev = { jumped: false, landed: false, slideStart: false };
    this.t += dt;
    for (const k of ['hitT', 'collectT', 'inv', 'lock', 'boost', 'magnet', 'speed', 'comboGuard']) {
      if (this[k] > 0) this[k] = Math.max(0, this[k] - dt);
    }
    if (this.knock > 0) this.knock = Math.max(0, this.knock - dt / 0.5);

    if (wantJump) this.buf = W.JUMP_BUFFER; else if (this.buf > 0) this.buf -= dt;
    const locked = this.lock > 0;

    if (this.buf > 0 && this.onGround && !locked) {
      this.vy = W.JUMP_V; this.onGround = false; this.sliding = false; this.buf = 0; ev.jumped = true;
    }

    if (this.onGround) {
      const was = this.sliding;
      this.sliding = slideHeld && !locked;
      if (this.sliding && !was) ev.slideStart = true;
    } else {
      this.sliding = false;
      this.vy -= W.GRAVITY * (slideHeld ? W.FALL_MULT : 1) * dt;
      this.y += this.vy * dt;
      if (this.y <= 0) { this.y = 0; this.vy = 0; this.onGround = true; ev.landed = true; }
    }
    this.apply();
    return ev;
  }

  apply() {
    const kx = -Math.sin(this.knock * Math.PI * 0.5) * 0.9 * (this.knock > 0 ? 1 : 0);
    const r = this.robot;
    r.root.position.set(this.x + kx, this.y, 0);
    r.root.visible = !(this.inv > 0 && this.hitT <= 0 && Math.floor(this.t * 16) % 2 === 0);
    const s = Math.max(0.35, 1 - this.y / 7);
    r.shadow.position.set(this.x + kx, 0.04, 0.2);
    r.shadow.scale.set(s * (this.sliding ? 1.5 : 1), s, s);
    r.shadow.material.opacity = 0.42 * s;
    r.update(this.t, this.state, {
      shield: this.shield, boost: this.boost > 0 || this.comboGuard > 0, magnet: this.magnet > 0, speed: this.speed > 0,
      flash: this.hitT > 0 && Math.floor(this.t * 30) % 2 === 0, happy: this.collectT > 0
    });
  }

  // posisi tengah badan (untuk efek dan magnet)
  center(out) { out.set(this.x, this.sliding ? 0.5 : this.y + 0.95, 0); return out; }
}
