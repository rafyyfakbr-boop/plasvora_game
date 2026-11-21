// spawner.js - menaruh rintangan tunggal, kombinasi rintangan, loot 4 tier, dan power-up memakai object pool
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
const LOW_Y = 0.92, HIGH_Y = 2.72;

export class Spawner {
  constructor(scene) {
    this.group = new THREE.Group(); scene.add(this.group);
    this.director = new LootDirector(1);
    this.obstacles = []; this.loot = []; this.powers = [];
    this.obsPools = {}; this.lootPools = {}; this.powerPools = {};

    for (const k in OBSTACLE_DEFS) this.obsPools[k] = new Pool(() => createObstacle(k), 6, this.group);
    for (const [tier, n] of [['normal', 10], ['recycled', 6], ['rare', 5], ['gold', 4]]) {
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

  // Dipakai saat Eco Boss dimulai/selesai: bersihkan rintangan di kejauhan agar adil
  clearAhead(minX) {
    this.obstacles = this.obstacles.filter((o) => {
      if (o.x > minX) { o.pool.put(o.mesh); return false; }
      return true;
    });
  }

  addLoot(tier, variant, x, y) {
    const pool = this.lootPools[tier + (variant % 3)];
    const mesh = pool && pool.get(); if (!mesh) return;
    mesh.position.set(x, y, 0);
    this.loot.push({ mesh, pool, tier, x, y, ph: Math.random() * 6.28, taken: false });
  }

  placeObstacle(kind, x, arcTier, slideTier) {
    const def = OBSTACLE_DEFS[kind], pool = this.obsPools[kind], mesh = pool && pool.get();
    if (!mesh) return def ? def.hitW : 1.8;
    mesh.position.set(x, 0, 0);
    this.obstacles.push({ mesh, pool, kind, def, x, passed: false, hit: false });

    if (def.need === 'slide' && slideTier) {
      this.addLoot(slideTier, 0, x, 0.58);
    } else if (arcTier) {
      const top = def.hitY + def.hitH / 2;
      const y = Math.min(3.45, Math.max(2.65, top + 1.35));
      this.addLoot(arcTier, arcTier === 'normal' ? 0 : 1, x, y);
    }
    return def.hitW;
  }

  // Hadiah visual setelah berhasil bertahan dari Eco Boss (aman di jalur rendah)
  spawnBossReward(diffCfg, rng) {
    this.clearAhead(12);
    let x = 16.5;
    for (let i = 0; i < diffCfg.rareDrops; i++) {
      this.addLoot('rare', i % 3, x, 1.05);
      x += 2.2;
    }
    if (rng.chance(diffCfg.goldChance)) {
      this.addLoot('gold', 0, x + 0.3, 1.35);
      x += 2.6;
    }
    this.distToNext = Math.max(this.distToNext, 14);
  }

  spawnSlot(slot, startX) {
    const x0 = startX + (slot.leadPad || 0);
    let span = 1.5;

    if (slot.type === 'obstacle') {
      const w = this.placeObstacle(slot.kind, x0, slot.arc, slot.slideBonus);
      span = w + (slot.leadPad || 0);
    } else if (slot.type === 'combo') {
      let cx = x0;
      let prevHalf = 0;
      for (let i = 0; i < slot.items.length; i++) {
        const it = slot.items[i];
        const def = OBSTACLE_DEFS[it.kind];
        const curHalf = def.hitW / 2;
        if (i > 0) cx += prevHalf + it.edgeGap + curHalf;
        this.placeObstacle(it.kind, cx, it.arc, null);
        prevHalf = curHalf;
      }
      span = (cx + prevHalf) - startX;
    } else if (slot.type === 'power') {
      const pool = this.powerPools[slot.kind], mesh = pool && pool.get();
      if (!mesh) return 2;
      // Tinggi 1.55: bisa diambil sambil lari atau lompat ringan (safe pickup window)
      mesh.position.set(x0, 1.55, 0);
      this.powers.push({ mesh, pool, kind: slot.kind, x: x0, y: 1.55, ph: Math.random() * 6.28, taken: false });
      span = 1.6 + (slot.leadPad || 0);
    } else {
      const baseY = slot.high ? HIGH_Y : LOW_Y;
      for (let i = 0; i < slot.count; i++) {
        const yOff = slot.pattern === 'arc' && slot.count === 3 && i === 1 ? 0.65
          : slot.pattern === 'arc' && slot.count === 2 && i === 1 ? 0.45 : 0;
        const v = slot.variants ? slot.variants[i] : (i % 3);
        this.addLoot(slot.tier, v, x0 + i * 1.75, baseY + yOff);
      }
      span = slot.count * 1.75;
    }

    return span;
  }

  // Kembalikan info peringatan singkat untuk rintangan sulit yang mendekat di tepi kanan
  upcomingWarning(playerX) {
    let best = null;
    for (const o of this.obstacles) {
      if (o.hit || !o.def.warning) continue;
      const distX = o.x - playerX;
      if (distX > 8 && distX < 25) {
        if (!best || distX < best.distX) best = { distX, need: o.def.need, name: o.def.name };
      }
    }
    return best;
  }

  // dx = jarak dunia bergeser; ctx = { dist, t, boss, bossVariant, bossDiff, speed }
  update(dt, dx, ctx, tNow, onBossSpawn) {
    this.timeSince += dt;
    this.distToNext -= dx;
    let guard = 0;
    while (this.distToNext <= 0 && guard++ < 3) {
      const slot = this.director.next(ctx, this.timeSince);
      this.timeSince = 0;
      const x = W.SPAWN_X - this.distToNext;
      const span = this.spawnSlot(slot, x);
      if (ctx.boss && (slot.type === 'obstacle' || slot.type === 'combo') && onBossSpawn) onBossSpawn();
      this.distToNext += ctx.speed * slot.gapAfter + span;
    }

    const pulse = 0.85 + Math.sin(tNow * 14) * 0.35;
    for (const o of this.obstacles) {
      o.x -= dx;
      o.mesh.position.x = o.x;
      if (o.mesh.userData.beacon) o.mesh.userData.beacon.scale.setScalar(pulse);
    }
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
