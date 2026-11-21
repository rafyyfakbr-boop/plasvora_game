// effects.js - partikel (satu buffer tetap), cincin, garis kecepatan, shake, slow motion, flash, confetti
import * as THREE from 'three';
import { RNG, clamp } from './util.js';

const MAX_P = 320;

export class Effects {
  constructor(scene, flashEl) {
    this.scene = scene; this.flashEl = flashEl;
    this.rng = new RNG(Math.floor(Math.random() * 1e9));

    // partikel: satu Points, buffer tetap, tidak membuat objek baru saat bermain
    this.pos = new Float32Array(MAX_P * 3);
    this.col = new Float32Array(MAX_P * 3);
    this.vel = new Float32Array(MAX_P * 3);
    this.life = new Float32Array(MAX_P);
    this.max = new Float32Array(MAX_P);
    this.base = new Float32Array(MAX_P * 3);
    this.next = 0;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    this.points = new THREE.Points(g, new THREE.PointsMaterial({
      size: 0.3, vertexColors: true, sizeAttenuation: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false
    }));
    this.points.frustumCulled = false;
    scene.add(this.points);
    for (let i = 0; i < MAX_P; i++) this.pos[i * 3 + 1] = -999;

    // cincin
    this.rings = [];
    const rg = new THREE.RingGeometry(0.9, 1, 28);
    for (let i = 0; i < 6; i++) {
      const m = new THREE.Mesh(rg, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, depthWrite: false, side: THREE.DoubleSide, fog: false }));
      m.visible = false; m.userData = { t: 0, max: 0.4, size: 2 }; scene.add(m); this.rings.push(m);
    }

    // garis kecepatan
    this.lines = [];
    const lg = new THREE.PlaneGeometry(1, 0.035);
    for (let i = 0; i < 16; i++) {
      const m = new THREE.Mesh(lg, new THREE.MeshBasicMaterial({ color: 0xbfffe8, transparent: true, opacity: 0.25, depthWrite: false, fog: false }));
      m.visible = false; m.userData = { len: 4, v: 2 }; scene.add(m); this.lines.push(m);
    }

    this.shakeT = 0; this.shakeDur = 0.01; this.shakeMag = 0;
    this.slowT = 0; this.slowS = 1; this.flashA = 0;
  }

  reset() {
    for (let i = 0; i < MAX_P; i++) { this.life[i] = 0; this.pos[i * 3 + 1] = -999; }
    this.points.geometry.attributes.position.needsUpdate = true;
    this.rings.forEach((r) => { r.visible = false; });
    this.lines.forEach((l) => { l.visible = false; });
    this.shakeT = 0; this.slowT = 0; this.flashA = 0; this.applyFlash();
  }

  burst(x, y, z, hex, n, speed = 5, opts = {}) {
    const c = new THREE.Color(hex), r = this.rng;
    for (let k = 0; k < n; k++) {
      const i = this.next; this.next = (this.next + 1) % MAX_P;
      const a = r.range(0, 6.283), s = speed * r.range(0.3, 1), up = opts.up || 0;
      this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z + r.range(-0.2, 0.2);
      this.vel[i * 3] = Math.cos(a) * s + (opts.vx || 0); this.vel[i * 3 + 1] = Math.sin(a) * s + up; this.vel[i * 3 + 2] = r.range(-1, 1);
      this.base[i * 3] = c.r; this.base[i * 3 + 1] = c.g; this.base[i * 3 + 2] = c.b;
      this.max[i] = this.life[i] = (opts.life || 0.55) * r.range(0.6, 1.3);
    }
  }

  ring(x, y, hex, size = 2.5) {
    const m = this.rings.find((r) => !r.visible) || this.rings[0];
    m.visible = true; m.position.set(x, y, 0.5); m.material.color.setHex(hex);
    m.userData.t = 0; m.userData.size = size;
  }

  shake(mag, dur) { this.shakeMag = Math.max(this.shakeT > 0 ? this.shakeMag : 0, mag); this.shakeT = dur; this.shakeDur = dur; }
  flash(color, a) { this.flashColor = color; this.flashA = a; this.applyFlash(); }
  slowmo(scale, dur) { this.slowS = scale; this.slowT = dur; }

  timeScale() {
    if (this.slowT <= 0) return 1;
    return this.slowS + (1 - this.slowS) * (1 - Math.min(1, this.slowT / 0.2));
  }
  shakeOffset(out) {
    if (this.shakeT <= 0) { out.set(0, 0); return out; }
    const m = this.shakeMag * (this.shakeT / this.shakeDur);
    out.set((Math.random() * 2 - 1) * m, (Math.random() * 2 - 1) * m); return out;
  }
  applyFlash() {
    if (!this.flashEl) return;
    this.flashEl.style.background = this.flashColor || '#ff2a4d';
    this.flashEl.style.opacity = String(clamp(this.flashA, 0, 0.55));
  }

  // dt = waktu game, rdt = waktu nyata, speed = kecepatan dunia, intensity 0..1 untuk garis kecepatan
  update(dt, rdt, speed, intensity) {
    if (this.shakeT > 0) this.shakeT -= rdt;
    if (this.slowT > 0) this.slowT -= rdt;
    if (this.flashA > 0) { this.flashA = Math.max(0, this.flashA - rdt * 2.4); this.applyFlash(); }

    for (let i = 0; i < MAX_P; i++) {
      if (this.life[i] <= 0) continue;
      this.life[i] -= dt;
      const k = Math.max(0, this.life[i] / this.max[i]);
      if (this.life[i] <= 0) { this.pos[i * 3 + 1] = -999; this.col[i * 3] = this.col[i * 3 + 1] = this.col[i * 3 + 2] = 0; continue; }
      this.vel[i * 3 + 1] -= 9 * dt;
      this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      this.col[i * 3] = this.base[i * 3] * k; this.col[i * 3 + 1] = this.base[i * 3 + 1] * k; this.col[i * 3 + 2] = this.base[i * 3 + 2] * k;
    }
    this.points.geometry.attributes.position.needsUpdate = true;
    this.points.geometry.attributes.color.needsUpdate = true;

    for (const m of this.rings) {
      if (!m.visible) continue;
      const d = m.userData; d.t += dt;
      const k = d.t / d.max;
      if (k >= 1) { m.visible = false; continue; }
      m.scale.setScalar(0.3 + d.size * k); m.material.opacity = 1 - k;
    }

    for (const l of this.lines) {
      const d = l.userData;
      if (!l.visible) {
        if (intensity > 0.05 && Math.random() < intensity * 30 * dt) {
          l.visible = true; d.len = this.rng.range(3, 8); d.v = this.rng.range(1.6, 2.6);
          l.scale.x = d.len; l.position.set(24, this.rng.range(0.5, 9), this.rng.range(-3, 5));
          l.material.opacity = 0.12 + 0.2 * intensity;
        }
        continue;
      }
      l.position.x -= speed * d.v * dt;
      if (l.position.x + d.len < -12) l.visible = false;
    }
  }
}

// Confetti 2D di atas layar (dipakai saat skor tertinggi baru)
export function runConfetti(cv) {
  const c = cv.getContext('2d');
  cv.width = cv.clientWidth; cv.height = cv.clientHeight;
  const cols = ['#39ffa0', '#ffd23f', '#19d4ff', '#ff4fd8', '#ff7a2f', '#ffffff'], parts = [];
  for (let i = 0; i < 170; i++) parts.push({ x: Math.random() * cv.width, y: -20 - Math.random() * cv.height * 0.6, vx: (Math.random() - 0.5) * 120, vy: 120 + Math.random() * 260, s: 6 + Math.random() * 8, r: Math.random() * 6, vr: (Math.random() - 0.5) * 14, c: cols[i % cols.length] });
  const t0 = performance.now(); let prev = t0;
  (function step(now) {
    const dt = Math.min(0.05, (now - prev) / 1000); prev = now;
    c.clearRect(0, 0, cv.width, cv.height);
    for (const p of parts) {
      p.x += p.vx * dt; p.y += p.vy * dt; p.r += p.vr * dt; p.vx += Math.sin(p.r) * 20 * dt;
      c.save(); c.translate(p.x, p.y); c.rotate(p.r); c.fillStyle = p.c; c.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); c.restore();
    }
    if (now - t0 < 4800) requestAnimationFrame(step); else c.clearRect(0, 0, cv.width, cv.height);
  })(t0);
}
