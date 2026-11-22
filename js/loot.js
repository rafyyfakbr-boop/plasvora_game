// loot.js - Procedural Run Director berbasis jarak (Phase 1..5), kombinasi rintangan fair,
// loot acak per game, power-up berbobot dengan safe pickup window, dan Eco Boss acak.
import { C, phaseAt, OBSTACLE_DEFS } from './config.js';
import { RNG, clamp, lerp } from './util.js';

// Daftar obstacle per tingkat kesulitan (semua pakai weighted random, tidak pernah urutan statis)
const OBS_BY_TIER = {
  easy:   { cone: 34, bin: 34, box: 32 },
  medium: { hole: 26, barrier: 22, pipe: 26, trashPile: 26 },
  hard:   { dumpster: 28, lowBeam: 28, car: 24, trashPile: 20 }
};

// Profil unik per permainan agar GAME 1, 2, 3, 4 terasa berbeda secara alami namun tetap fair
const RUN_PROFILES = [
  { id: 'plastic_rush',   label: 'PLASTIC RUSH',  lootBias: { normal: 1.25, recycled: 1.10, rare: 0.90, gold: 0.95 }, powerBias: { boost: 1.35, magnet: 1.15, shield: 0.90, speed: 0.95 }, obsBias: { jump: 1.00, slide: 0.95 }, bossPref: 'trash_giant' },
  { id: 'rare_hunt',      label: 'RARE HUNT',     lootBias: { normal: 0.85, recycled: 1.15, rare: 1.35, gold: 1.25 }, powerBias: { boost: 0.95, magnet: 1.00, shield: 1.35, speed: 0.95 }, obsBias: { jump: 1.05, slide: 1.05 }, bossPref: 'plastic_monster' },
  { id: 'jump_gauntlet',  label: 'SKY HURDLE',    lootBias: { normal: 0.95, recycled: 1.05, rare: 1.10, gold: 1.10 }, powerBias: { boost: 0.95, magnet: 1.35, shield: 1.15, speed: 0.90 }, obsBias: { jump: 1.35, slide: 0.78 }, bossPref: 'waste_machine' },
  { id: 'slide_sprint',   label: 'LOW DRIFT',     lootBias: { normal: 1.00, recycled: 1.20, rare: 1.05, gold: 1.05 }, powerBias: { boost: 1.10, magnet: 0.95, shield: 0.95, speed: 1.35 }, obsBias: { jump: 0.85, slide: 1.38 }, bossPref: 'plastic_monster' },
  { id: 'combo_master',   label: 'COMBO FLOW',    lootBias: { normal: 1.15, recycled: 1.15, rare: 1.10, gold: 0.90 }, powerBias: { boost: 1.15, magnet: 1.20, shield: 1.15, speed: 0.85 }, obsBias: { jump: 1.00, slide: 1.00 }, bossPref: 'trash_giant' }
];

// Kombinasi rintangan terverifikasi fair (EASY -> MEDIUM -> HARD)
const COMBOS = {
  easy: [
    ['box', 'hole'],
    ['bin', 'box'],
    ['cone', 'bin'],
    ['cone', 'box'],
    ['bin', 'hole'],
    ['cone', 'barrier']
  ],
  medium: [
    ['hole', 'pipe'],
    ['pipe', 'trashPile'],
    ['cone', 'trashPile'],
    ['barrier', 'pipe'],
    ['box', 'pipe'],
    ['bin', 'barrier'],
    ['pipe', 'hole'],
    ['cone', 'car']
  ],
  hard: [
    ['cone', 'dumpster'],
    ['pipe', 'dumpster'],
    ['hole', 'lowBeam'],
    ['trashPile', 'lowBeam'],
    ['lowBeam', 'trashPile'],
    ['lowBeam', 'bin'],
    ['box', 'hole', 'pipe'],
    ['cone', 'pipe', 'dumpster'],
    ['bin', 'lowBeam', 'car'],
    ['hole', 'pipe', 'trashPile'],
    ['cone', 'lowBeam', 'dumpster']
  ]
};

// Pola serangan khas masing-masing varian Eco Boss (diacak, tidak statis)
const BOSS_PATTERNS = {
  trash_giant: {
    singles: { trashPile: 32, dumpster: 28, box: 20, hole: 20 },
    combos: [
      ['box', 'trashPile'],
      ['trashPile', 'hole'],
      ['cone', 'dumpster'],
      ['hole', 'trashPile'],
      ['box', 'hole', 'dumpster'],
      ['cone', 'trashPile', 'hole']
    ]
  },
  plastic_monster: {
    singles: { pipe: 28, lowBeam: 26, bin: 24, cone: 22 },
    combos: [
      ['pipe', 'bin'],
      ['hole', 'pipe'],
      ['lowBeam', 'bin'],
      ['cone', 'lowBeam'],
      ['pipe', 'hole', 'lowBeam'],
      ['bin', 'pipe', 'trashPile']
    ]
  },
  waste_machine: {
    singles: { barrier: 26, lowBeam: 26, car: 24, pipe: 24 },
    combos: [
      ['barrier', 'pipe'],
      ['lowBeam', 'car'],
      ['hole', 'lowBeam'],
      ['pipe', 'dumpster'],
      ['barrier', 'lowBeam', 'car'],
      ['cone', 'pipe', 'car']
    ]
  }
};

// Menghitung jarak aman sisi-ke-sisi (edge-to-edge, unit 3D) antar dua obstacle
// berdasarkan fisika lompatan (JUMP_V=19, GRAVITY=50, airtime ~0.76s) & slide agar 100% bisa dihindari.
export function safeEdgeGap(prevKind, nextKind, speed, phaseId, bossDiff) {
  const a = OBSTACLE_DEFS[prevKind];
  const b = OBSTACLE_DEFS[nextKind];
  const wA = a ? a.hitW : 1.5;
  const needA = a ? a.need : 'jump';
  const needB = b ? b.need : 'jump';

  // Waktu reaksi/pulih di tanah menurun bertahap seiring fase, namun selalu >= batas manusiawi
  const reactByPhase = [0.46, 0.38, 0.31, 0.25, 0.20];
  let tReact = reactByPhase[clamp((phaseId || 1) - 1, 0, 4)];
  if (bossDiff === 'hard') tReact = Math.max(0.18, tReact - 0.03);
  else if (bossDiff === 'ultimate') tReact = Math.max(0.17, tReact - 0.04);

  if (needA === 'jump' && needB === 'jump') {
    // Jarak mendarat setelah tepi kanan A = max(0, 0.64*v - wA) + waktu reaksi + jarak lepas landas sebelum B
    const landPastA = Math.max(0.18 * speed, 0.64 * speed - wA);
    return landPastA + (tReact + 0.14) * speed + 0.9;
  }
  if (needA === 'jump' && needB === 'slide') {
    // Pemain bisa fast-fall langsung ke slide saat mendarat
    const landPastA = Math.max(0.16 * speed, 0.58 * speed - wA);
    return landPastA + (tReact * 0.8 + 0.12) * speed + 0.85;
  }
  if (needA === 'slide' && needB === 'jump') {
    // Pemain bisa langsung melompat keluar dari slide (0ms delay), butuh jarak visual & lepas landas
    return (tReact + 0.24) * speed + 1.1;
  }
  // slide -> slide
  return (tReact + 0.30) * speed + 1.1;
}

export class LootDirector {
  constructor(seed) { this.reset(seed); }

  reset(seed) {
    this.seed = seed >>> 0;
    this.rng = new RNG(this.seed);
    this.profile = this.rng.pick(RUN_PROFILES);
    this.slot = 0;
    this.consecObs = 0;
    this.lastObsKind = '';
    this.lastComboKey = '';
    this.lastLootTier = '';
    this.lootStreak = 0;
    this.sincePower = 8;
    this.nextPowerCd = this.rng.range(C.LOOT.POWER_CD_MIN, C.LOOT.POWER_CD_MAX);
    this.prevWasObstacle = false;
    this.prevWasPower = false;

    // Jadwal Eco Boss acak (bukan jarak atau skor tetap)
    this.bossCount = 0;
    this.lastBossVariant = '';
    this.nextBossDist = Math.round(this.rng.range(C.BOSS.FIRST_MIN_DIST, C.BOSS.FIRST_MAX_DIST));
    this.bossPendingRollDist = this.nextBossDist;
  }

  // Dipanggil dari game loop saat PLAYING untuk mengecek apakah Eco Boss muncul secara acak
  checkBossTrigger(distance, score, comboLevel) {
    if (distance < this.nextBossDist) return null;

    // Peluang acak dipengaruhi sedikit oleh combo & jarak agar tidak terasa mekanis
    const baseProb = 0.86;
    const comboBoost = comboLevel >= 4 ? 0.08 : 0;
    if (this.rng.next() > Math.min(0.96, baseProb + comboBoost)) {
      // Kadang jendela boss bergeser/dilewati agar tiap game tidak selalu sama
      this.nextBossDist = Math.round(distance + this.rng.range(900, 1600));
      return null;
    }

    // Pilih varian acak (tidak mengulang varian yang sama berturut-turut, beri sedikit bias profil run di boss pertama)
    const allVariants = Object.keys(C.BOSS.VARIANTS);
    const vWeights = {};
    for (const v of allVariants) {
      let w = v === this.lastBossVariant ? 0 : 50;
      if (this.bossCount === 0 && v === this.profile.bossPref) w += 20;
      vWeights[v] = w;
    }
    const variantId = this.rng.weighted(vWeights);
    this.lastBossVariant = variantId;

    // Pilih tingkat kesulitan boss secara acak berdasarkan jarak/fase + combo
    const phase = phaseAt(distance).id;
    const dWeights = phase <= 3
      ? { easy: 30, normal: 44, hard: 21, ultimate: 5 }
      : phase === 4
        ? { easy: 14, normal: 36, hard: 38, ultimate: 12 }
        : { easy: 6,  normal: 24, hard: 48, ultimate: 22 };
    if (comboLevel >= 5) dWeights.hard += 8;
    const diffId = this.rng.weighted(dWeights);

    const variant = C.BOSS.VARIANTS[variantId];
    const diff = C.BOSS.DIFFICULTIES[diffId];
    const duration = Math.round(this.rng.range(diff.timeMin, diff.timeMax));

    this.bossCount++;
    // Jadwalkan jendela boss berikutnya secara acak (5.000-7.000 untuk boss kedua, dst)
    if (this.bossCount === 1) {
      this.nextBossDist = Math.round(Math.max(distance + 1700, this.rng.range(C.BOSS.SECOND_MIN_DIST, C.BOSS.SECOND_MAX_DIST)));
    } else {
      this.nextBossDist = Math.round(distance + this.rng.range(C.BOSS.NEXT_GAP_MIN, C.BOSS.NEXT_GAP_MAX));
    }

    return { variant, diff, duration };
  }

  pickObstacleKind(phase, bossVariantId) {
    const rng = this.rng;
    let pool;
    if (bossVariantId && BOSS_PATTERNS[bossVariantId]) {
      pool = { ...BOSS_PATTERNS[bossVariantId].singles };
    } else {
      const tier = rng.weighted(phase.obsTierWeights);
      pool = { ...OBS_BY_TIER[tier] };
    }
    // Terapkan bias profil permainan (jump vs slide) + kurangi pengulangan obstacle terakhir
    for (const k in pool) {
      const def = OBSTACLE_DEFS[k];
      if (def) pool[k] *= this.profile.obsBias[def.need] || 1;
      if (k === this.lastObsKind) pool[k] *= 0.18;
    }
    const kind = rng.weighted(pool);
    this.lastObsKind = kind;
    return kind;
  }

  pickCombo(phase, bossVariantId, bossDiffId) {
    const rng = this.rng;
    let list;
    if (bossVariantId && BOSS_PATTERNS[bossVariantId]) {
      list = BOSS_PATTERNS[bossVariantId].combos;
      if (bossDiffId === 'easy') list = list.filter((c) => c.length === 2);
    } else {
      const tierWeights = phase.id <= 2
        ? { easy: 68, medium: 32, hard: 0 }
        : phase.id === 3
          ? { easy: 24, medium: 56, hard: 20 }
          : phase.id === 4
            ? { easy: 10, medium: 38, hard: 52 }
            : { easy: 5,  medium: 25, hard: 70 };
      const tier = rng.weighted(tierWeights);
      list = COMBOS[tier];
      if (phase.maxChain < 3) list = list.filter((c) => c.length <= phase.maxChain);
    }
    if (!list.length) list = COMBOS.easy;

    // Hindari kombinasi identik muncul dua kali berturut-turut
    let picked = rng.pick(list);
    let key = picked.join('>');
    if (key === this.lastComboKey && list.length > 1) {
      picked = rng.pick(list.filter((c) => c.join('>') !== this.lastComboKey));
      key = picked.join('>');
    }
    this.lastComboKey = key;
    this.lastObsKind = picked[picked.length - 1];
    return picked;
  }

  pickLootTier(phase, risky) {
    const rng = this.rng;
    const w = { ...phase.lootWeights };
    for (const k in w) w[k] *= this.profile.lootBias[k] || 1;
    // Loot di posisi berisiko (busur di atas obstacle / slide bonus) punya peluang rare/gold lebih tinggi
    if (risky) { w.normal *= 0.65; w.recycled *= 1.25; w.rare *= 1.6; w.gold *= 1.85; }
    // Redam pengulangan tier beruntun agar susunan loot terasa benar-benar bervariasi
    if (this.lootStreak >= 2 && w[this.lastLootTier]) w[this.lastLootTier] *= 0.45;
    const tier = rng.weighted(w);
    if (tier === this.lastLootTier) this.lootStreak++;
    else { this.lastLootTier = tier; this.lootStreak = 1; }
    return tier;
  }

  pickPowerKind() {
    const w = { ...C.LOOT.POWER_WEIGHTS };
    for (const k in w) w[k] *= this.profile.powerBias[k] || 1;
    return this.rng.weighted(w);
  }

  // ctx: { dist, speed, boss, bossVariant, bossDiff, t }
  next(ctx, dtSinceLast) {
    const L = C.LOOT, rng = this.rng;
    const dist = ctx.dist || 0;
    const speed = ctx.speed || C.WORLD.BASE_SPEED;
    const phase = phaseAt(dist);
    const inBoss = !!ctx.boss;
    const bossDiff = inBoss ? C.BOSS.DIFFICULTIES[ctx.bossDiff] : null;

    this.sincePower += dtSinceLast;

    // Bobot tipe slot berdasarkan fase & boss
    const w = { ...phase.slotWeights };
    if (inBoss) {
      w.obstacle = 68;
      w.loot = 27;
      w.power = 5;
    }

    // Aturan anti-frustrasi & fairness
    let forcedSafe = false;
    if (this.slot < L.INTRO_SLOTS) {
      w.obstacle = 0; w.power = 0; forcedSafe = true;
    }
    const maxConsec = inBoss ? 3 : (phase.id >= 2 ? 2 : 1);
    if (this.consecObs >= maxConsec) {
      w.obstacle = 0; forcedSafe = true;
    }
    // Power-up hanya muncul setelah jarak minimum, cooldown acak selesai, & tidak langsung setelah obstacle berat
    if (dist < L.POWER_MIN_DIST || this.sincePower < this.nextPowerCd || this.prevWasPower) {
      w.power = 0;
    }

    const pick = rng.weighted(w);
    this.slot++;

    const progressInPhase = clamp((dist - phase.minDist) / Math.max(1, phase.maxDist - phase.minDist), 0, 1);
    let baseGap = lerp(phase.gapMax, phase.gapMin, progressInPhase) * rng.range(0.88, 1.14);
    if (inBoss && bossDiff) baseGap *= bossDiff.gapMult;

    let out;

    if (pick === 'obstacle') {
      const comboChance = inBoss && bossDiff ? bossDiff.comboChance : phase.comboChance;
      const doCombo = comboChance > 0 && rng.chance(comboChance);

      if (doCombo) {
        const kinds = this.pickCombo(phase, inBoss ? ctx.bossVariant : null, ctx.bossDiff);
        const items = [];
        for (let i = 0; i < kinds.length; i++) {
          const kind = kinds[i];
          const edgeGap = i === 0 ? 0 : safeEdgeGap(kinds[i - 1], kind, speed, phase.id, ctx.bossDiff) * rng.range(1.0, 1.15);
          // Sebagian obstacle membawa loot berisiko di busur lompat (risk/reward)
          const arc = OBSTACLE_DEFS[kind].need === 'jump' && rng.chance(0.16) ? this.pickLootTier(phase, true) : null;
          items.push({ kind, edgeGap, arc });
        }
        out = { type: 'combo', items };
        this.consecObs += 2; // Setelah combo selalu ada ruang napas/loot
        out.gapAfter = Math.max(baseGap * 1.08, L.MIN_RECOVERY_AFTER_COMBO * (phase.id >= 4 ? 0.92 : 1.0));
      } else {
        const kind = this.pickObstacleKind(phase, inBoss ? ctx.bossVariant : null);
        const need = OBSTACLE_DEFS[kind].need;
        const arc = need === 'jump' && rng.chance(0.18) ? this.pickLootTier(phase, true) : null;
        const slideBonus = need === 'slide' && rng.chance(0.42) ? this.pickLootTier(phase, true) : null;
        out = { type: 'obstacle', kind, arc, slideBonus };
        this.consecObs++;
        // Pastikan jarak aman menuju slot berikutnya (terutama jika berikutnya juga obstacle)
        const minAfter = safeEdgeGap(kind, kind, speed, phase.id, ctx.bossDiff) / speed;
        out.gapAfter = Math.max(baseGap, minAfter);
      }
      this.prevWasObstacle = true;
      this.prevWasPower = false;
    } else if (pick === 'power') {
      out = { type: 'power', kind: this.pickPowerKind() };
      this.sincePower = 0;
      this.nextPowerCd = rng.range(L.POWER_CD_MIN, L.POWER_CD_MAX);
      this.consecObs = 0;
      // Safe pickup window sebelum & sesudah power-up
      out.leadPad = this.prevWasObstacle ? L.POWER_SAFE_BEFORE * speed : 0;
      out.gapAfter = Math.max(baseGap, L.POWER_SAFE_AFTER);
      this.prevWasObstacle = false;
      this.prevWasPower = true;
    } else {
      const tier = this.pickLootTier(phase, false);
      // Jumlah terkontrol: plastic 1-2 (jarang 3), recycled/rare/gold tunggal agar x8 & 11.000+ butuh skill nyata
      let count = 1;
      if (tier === 'normal') count = rng.weighted({ 1: 78, 2: 20, 3: 2 }) | 0;
      else if (tier === 'recycled') count = 1;

      const high = rng.chance(0.24 + 0.06 * phase.id);
      const pattern = count >= 2 && rng.chance(0.4) ? 'arc' : 'flat';
      out = {
        type: 'plastic',
        tier,
        count,
        high,
        pattern,
        variants: Array.from({ length: count }, () => rng.int(0, 2))
      };
      this.consecObs = 0;
      out.gapAfter = baseGap * (count >= 3 ? 0.92 : 0.86);
      this.prevWasObstacle = false;
      this.prevWasPower = false;
    }

    out.forcedSafe = forcedSafe;
    return out;
  }
}
