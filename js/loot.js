// loot.js - pengacak susunan jalan. Setiap permainan memakai biji (seed) baru, jadi susunan loot, rintangan,
// power-up, dan waktu boss selalu berbeda. Aturan aman menjaga permainan tetap adil.
import { C } from './config.js';
import { RNG, clamp, lerp } from './util.js';

const OBSTACLES_EARLY = ['box', 'bin', 'hole'];
const OBSTACLES_MID = ['box', 'bin', 'hole', 'barrier', 'pipe'];
const OBSTACLES_LATE = ['box', 'bin', 'hole', 'barrier', 'pipe', 'car'];
const POWERS = ['boost', 'magnet', 'shield', 'speed'];

export class LootDirector {
  constructor(seed) { this.reset(seed); }

  reset(seed) {
    this.seed = seed >>> 0;
    this.rng = new RNG(this.seed);
    this.slot = 0;
    this.consecObs = 0;           // rintangan berturut-turut
    this.lastObsKind = '';
    this.sincePower = 8;          // detik sejak power-up terakhir (mulai dari 8 agar yang pertama tidak terlalu lama)
    this.prevWasObstacle = false;
    // waktu boss: skor pemicu diacak per permainan
    this.bossScore = Math.round(this.rng.range(C.BOSS.SCORE_MIN, C.BOSS.SCORE_MAX) / 10) * 10;
    this.bossTime = Math.round(this.rng.range(C.BOSS.TIME_MIN, C.BOSS.TIME_MAX));
  }

  // ctx: { t (detik main), boss (bool) }. Mengembalikan slot dan jarak waktu sebelum slot berikutnya.
  next(ctx, dtSinceLast) {
    const L = C.LOOT, rng = this.rng, d = clamp(ctx.t / 90, 0, 1);
    this.sincePower += dtSinceLast;

    const w = { ...L.weights };
    w.rare += 6 * d; w.gold += 3 * d; w.obstacle += 8 * d;          // item langka dan rintangan bertambah perlahan
    if (ctx.boss) { w.obstacle = 30; w.normal += 12; w.rare += 4; }

    // aturan aman
    let forcedSafe = false;
    if (this.slot < L.INTRO_SLOTS) { w.obstacle = 0; w.power = 0; forcedSafe = true; }
    if (this.consecObs >= L.MAX_CONSECUTIVE_OBSTACLES) { w.obstacle = 0; forcedSafe = true; }
    if (this.sincePower < L.POWER_COOLDOWN) w.power = 0;

    const pick = rng.weighted(w);
    this.slot++;
    let out;

    if (pick === 'obstacle') {
      const list = ctx.t < 12 ? OBSTACLES_EARLY : ctx.t < 28 ? OBSTACLES_MID : OBSTACLES_LATE;
      let kind = rng.pick(list);
      if (kind === this.lastObsKind) kind = rng.pick(list);
      this.lastObsKind = kind;
      // sebagian rintangan membawa hadiah di atasnya (busur lompat)
      const arc = rng.chance(0.3) ? rng.weighted({ normal: 70, rare: 25, gold: 5 }) : null;
      out = { type: 'obstacle', kind, arc };
      this.consecObs++;
    } else if (pick === 'power') {
      out = { type: 'power', kind: rng.pick(POWERS) };
      this.sincePower = 0; this.consecObs = 0;
    } else {
      // plastik: normal bisa berderet 1-3, langka dan emas tunggal. Ketinggian acak, lebih sering tinggi saat sulit.
      const high = rng.chance(0.28 + 0.2 * d);
      out = { type: 'plastic', tier: pick, count: pick === 'normal' ? rng.int(1, 3) : 1, high, variant: rng.int(0, 2) };
      this.consecObs = 0;
    }

    // jeda waktu menuju slot berikutnya
    let gap = lerp(L.GAP_START, L.GAP_END, d) * rng.range(0.9, 1.15);
    if (ctx.boss) gap *= 0.78;
    // dua rintangan berturut-turut diberi jarak ekstra agar sempat mendarat dan melompat lagi
    out.gapAfter = out.type === 'obstacle' ? Math.max(gap, L.OBSTACLE_MIN_GAP + (out.kind === 'car' ? 0.15 : 0)) : gap;
    out.forcedSafe = forcedSafe;
    return out;
  }
}
