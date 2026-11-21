// spawner.js - menaruh rintangan, plastik, dan power-up di jalan memakai object pool
// (semua mesh dibuat sekali di awal lalu dipakai ulang, tidak ada objek baru saat bermain).
import * as THREE from 'three';
import { C } from './config.js';
import { LootDirector } from './loot.js';
import { createObstacle, createLoot, createPower, OBSTACLE_DEFS } from './models.js';

class Pool {
  constructor(factory, n, parent) {
    this.free = [];
    for (let i = 0; i < n; i++) { const m = factory(i); m.visible = false; parent.add(m); this.free.push(m); }
  }
  get() { const m = this.free.pop(); if (m) m.visible = true; return m || null; }
  put(m) { m.visible = false; this.free.push(m); }
}

const W = C.WORLD;
const LOW_Y = 0.9, HIGH_Y = 2.75;

export class Spawner {
  constructor(scene) {
    this.group = new THREE.Group(); scene.add(this.group);
    this.director = new LootDirector(1);
    this.obstacles = []; this.loot = []; this.powers = [];
    this.obsPools = {}; this.lootPools = {}; this.powerPools = {};
    for (const k in OBSTACLE_DEFS) this.obsPools[k] = new Pool(() => createObstacle(k), 5, this.group);
    for (const [tier, n] of [['normal', 8], ['rare', 4], ['gold', 3]]) {
      for (let v = 0; v < 3; v++) this.lootPools[tier + v] = new Pool(() => createLoot(tier, v), n, this.group);
    }
    for (const k of ['boost', 'magnet', 'shield', 'speed']) this.powerPools[k] = new Pool(() => createPower(k), 2, this.group);
    this.distToNext = 0; this.timeSince = 0;
  }

  reset(seed) {
    for (const o of this.obstacles) o.pool.put(o.mesh);
    for (const o of this.loot) o.pool.put(o.mesh);
    for (const o of this.powers) o.pool.put(o.mesh);
    this.obstacles.length = 0; this.loot.length = 0; this.powers.length = 0;
    this.director.reset(seed);
    this.distToNext = 0; this.timeSince = 0;
  }

  // Dipakai saat Eco Boss dimulai: buang rintangan yang belum terlihat agar ada ruang bernapas
  clearAhead(minX) {
    this.obstacles = this.obstacles.filter((o) => { if (o.x > minX) { o.pool.put(o.mesh); return false; } return true; });
  }

  addLoot(tier, variant, x, y) {
    const pool = this.lootPools[tier + variant];
    const mesh = pool && pool.get(); if (!mesh) return;
    mesh.position.set(x, y, 0);
    this.loot.push({ mesh, pool, tier, x, y, ph: Math.random() * 6.28, taken: false });
  }

  spawnSlot(slot, x) {
    let width = 1.5;
    if (slot.type === 'obstacle') {
      const def = OBSTACLE_DEFS[slot.kind], pool = this.obsPools[slot.kind], mesh = pool.get();
      if (!mesh) return 2;
      mesh.position.set(x, 0, 0);
      this.obstacles.push({ mesh, pool, kind: slot.kind, def, x, passed: false, hit: false });
      width = def.hitW;
      if (slot.kind === 'pipe') { // hadiah di bawah pipa untuk yang berani slide
        this.addLoot('normal', 0, x - 0.8, 0.62); this.addLoot('normal', 1, x + 0.8, 0.62);
      } else if (slot.arc) {
        const top = def.hitY + def.hitH / 2;
        this.addLoot(slot.arc, slot.arc === 'normal' ? 0 : 1, x, Math.max(2.7, top + 1.5));
      }
    } else if (slot.type === 'power') {
      const pool = this.powerPools[slot.kind], mesh = pool.get(); if (!mesh) return 2;
      mesh.position.set(x, 1.9, 0);
      this.powers.push({ mesh, pool, kind: slot.kind, x, y: 1.9, ph: Math.random() * 6.28, taken: false });
    } else {
      const y = slot.high ? HIGH_Y : LOW_Y;
      for (let i = 0; i < slot.count; i++) this.addLoot(slot.tier, slot.variant, x + i * 1.7, y);
      width = slot.count * 1.7;
    }
    return width;
  }

  // dx = jarak dunia bergeser; ctx = { t, boss, speed }
  update(dt, dx, ctx, tNow) {
    this.timeSince += dt;
    this.distToNext -= dx;
    let guard = 0;
    while (this.distToNext <= 0 && guard++ < 3) {
      const slot = this.director.next(ctx, this.timeSince);
      this.timeSince = 0;
      const x = W.SPAWN_X - this.distToNext;
      const width = this.spawnSlot(slot, x);
      this.distToNext += ctx.speed * slot.gapAfter + width;
    }

    for (const o of this.obstacles) { o.x -= dx; o.mesh.position.x = o.x; }
    for (const o of this.loot) {
      o.x -= dx;
      o.mesh.position.set(o.x, o.y + Math.sin(tNow * 4 + o.ph) * 0.12, 0);
      o.mesh.userData.shape.rotation.y = tNow * 2.2 + o.ph;
      if (o.tier === 'gold') o.mesh.userData.shape.rotation.z = Math.sin(tNow * 3 + o.ph) * 0.15;
    }
    for (const o of this.powers) {
      o.x -= dx;
      o.mesh.position.set(o.x, o.y + Math.sin(tNow * 3 + o.ph) * 0.18, 0);
      o.mesh.children[1].rotation.x = tNow * 2.5;
    }

    this.obstacles = this.obstacles.filter((o) => { if (o.x < W.DESPAWN_X) { o.pool.put(o.mesh); return false; } return true; });
    this.loot = this.loot.filter((o) => { if (o.taken || o.x < W.DESPAWN_X) { o.pool.put(o.mesh); return false; } return true; });
    this.powers = this.powers.filter((o) => { if (o.taken || o.x < W.DESPAWN_X) { o.pool.put(o.mesh); return false; } return true; });
  }
}
