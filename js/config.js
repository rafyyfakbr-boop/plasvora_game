// config.js - semua angka yang boleh diubah panitia booth ada di sini.
// Tidak perlu menyentuh logika game untuk mengatur hadiah, stok, atau tingkat kesulitan.
import { BOOTH_CONFIG } from './booth-config.js';

export const C = {
  // Isi dengan alamat website Plasvora agar tombol EXPLORE PLASVORA membukanya.
  // Kosong = tombol menampilkan panel info saja.
  PLASVORA_URL: '',

  // PIN panel admin booth (Settings > ADMIN). Ganti sebelum acara.
  ADMIN_PIN: '1234',

  BRAND: 'PLASVORA',
  TAGLINE: 'Recycle • Reuse • Reimagine',
  LIVES: 3,

  // Satuan dunia = unit 3D. Robot setinggi 1.9.
  // DISTANCE_PER_UNIT mengonversi gerak dunia menjadi jarak lari (meter) untuk fase 500..5000+.
  WORLD: {
    GRAVITY: 50,
    JUMP_V: 19,           // puncak lompatan sekitar 3.61 (cukup melewati obstacle tinggi 2.05)
    FALL_MULT: 1.85,      // jatuh lebih cepat saat tombol bawah ditekan di udara
    BASE_SPEED: 9,        // unit/detik pada kecepatan 1.0x
    DISTANCE_PER_UNIT: 2.8, // 1.0x = ~25.2 m/s (Phase 1 ~20s, Phase 5 ~2m30s)
    SPAWN_X: 28,          // objek muncul di luar tepi kanan layar
    DESPAWN_X: -12,
    JUMP_BUFFER: 0.12
  },

  // 5 Fase kesulitan berdasarkan jarak (meter). Transisi kecepatan bertahap tanpa lonjakan mendadak.
  PHASES: [
    {
      id: 1, name: 'ECO START', minDist: 0, maxDist: 500,
      speedMin: 1.00, speedMax: 1.10,
      gapMin: 1.52, gapMax: 1.76,
      comboChance: 0.00, maxChain: 1,
      obsTierWeights: { easy: 92, medium: 8, hard: 0 },
      slotWeights: { loot: 44, obstacle: 56, power: 0 },
      lootWeights: { normal: 82, recycled: 14, rare: 3.5, gold: 0.5 },
      bg: 0x041512, hemi: 0x9fe8ff, edge: 0x39ffa0
    },
    {
      id: 2, name: 'ECO RUN', minDist: 500, maxDist: 1500,
      speedMin: 1.10, speedMax: 1.25,
      gapMin: 1.32, gapMax: 1.54,
      comboChance: 0.28, maxChain: 2,
      obsTierWeights: { easy: 54, medium: 40, hard: 6 },
      slotWeights: { loot: 34, obstacle: 58, power: 8 },
      lootWeights: { normal: 74, recycled: 18, rare: 6.5, gold: 1.5 },
      bg: 0x041a18, hemi: 0x98f0f8, edge: 0x2cf0a8
    },
    {
      id: 3, name: 'ECO CHALLENGE', minDist: 1500, maxDist: 3000,
      speedMin: 1.25, speedMax: 1.45,
      gapMin: 1.12, gapMax: 1.32,
      comboChance: 0.48, maxChain: 2,
      obsTierWeights: { easy: 26, medium: 52, hard: 22 },
      slotWeights: { loot: 29, obstacle: 63, power: 8 },
      lootWeights: { normal: 68, recycled: 20, rare: 9.5, gold: 2.5 },
      bg: 0x061622, hemi: 0x8cd8ff, edge: 0x19d4ff
    },
    {
      id: 4, name: 'ECO DANGER', minDist: 3000, maxDist: 5000,
      speedMin: 1.45, speedMax: 1.65,
      gapMin: 0.98, gapMax: 1.16,
      comboChance: 0.62, maxChain: 3,
      obsTierWeights: { easy: 12, medium: 42, hard: 46 },
      slotWeights: { loot: 26, obstacle: 66, power: 8 },
      lootWeights: { normal: 62, recycled: 22, rare: 12.5, gold: 3.5 },
      bg: 0x121022, hemi: 0xbcb8ff, edge: 0xffb347
    },
    {
      id: 5, name: 'ECO EXTREME', minDist: 5000, maxDist: 7500,
      speedMin: 1.65, speedMax: 1.80,
      gapMin: 0.88, gapMax: 1.04,
      comboChance: 0.72, maxChain: 3,
      obsTierWeights: { easy: 6, medium: 32, hard: 62 },
      slotWeights: { loot: 24, obstacle: 68, power: 8 },
      lootWeights: { normal: 56, recycled: 24, rare: 15, gold: 5 },
      bg: 0x1a0b16, hemi: 0xffb4c8, edge: 0xff4fd8
    }
  ],

  SPEED: { MIN: 1.0, MAX: 1.8 },

  // Skor terkontrol agar ECO LEGEND (7.000+) & ECO CHAMPION (11.000+) benar-benar menuntut skill, combo tinggi, dan konsistensi.
  SCORE: {
    normal: 50,        // Plastic
    recycled: 100,     // Recycled Material
    rare: 150,         // Rare Material
    gold: 250,         // Golden Material
    perMeter: 0.06,    // Poin jarak rendah: combo & collectible tetap sumber skor utama
    power: 20,         // Bonus kecil saat mengambil power-up
    speedBoostBonus: 50,
    smash: 20,         // Menghancurkan rintangan saat Speed Boost
    boostMult: 1.25    // ECO BOOST memberi +25% skor (terkontrol, tidak memicu inflasi berlebih)
  },

  // Combo: 1=x1, 5=x2, 10=x3, 15=x4, 20=x5, 25=x6, 30=x7, 40+=x8
  // Multiplier aktual dibuat progresif & terkontrol agar x8 terasa sangat kuat namun tetap menantang.
  COMBO: {
    thresholds: [0, 5, 10, 15, 20, 25, 30, 40],
    mult:       [1.0, 1.08, 1.16, 1.26, 1.38, 1.52, 1.68, 1.90]
  },

  // Aturan procedural spawning & fairness
  LOOT: {
    INTRO_SLOTS: 3,             // Slot awal selalu aman untuk belajar kontrol
    POWER_MIN_DIST: 460,        // Item support mulai muncul menjelang/di Phase 2
    POWER_CD_MIN: 13.5,         // Cooldown power-up diacak tiap muncul
    POWER_CD_MAX: 21.5,
    POWER_WEIGHTS: { boost: 36, magnet: 34, shield: 19, speed: 11 }, // common > rare > powerful
    POWER_SAFE_BEFORE: 0.70,    // Detik runway aman sebelum power-up
    POWER_SAFE_AFTER: 0.78,     // Detik runway aman sesudah power-up
    MIN_RECOVERY_AFTER_COMBO: 1.18 // Detik jeda pulih setelah kombinasi rintangan
  },

  // ECO BOSS acak: jarak pemicu acak, varian acak, kesulitan acak, durasi & hadiah acak
  BOSS: {
    FIRST_MIN_DIST: 2500,
    FIRST_MAX_DIST: 4000,
    SECOND_MIN_DIST: 5000,
    SECOND_MAX_DIST: 7000,
    NEXT_GAP_MIN: 2300,
    NEXT_GAP_MAX: 3500,
    SKIP_CHANCE: 0.14,          // Peluang jendela boss dilewati/digeser agar tidak terasa pasti
    WARN: 2.3,
    MAX_TOTAL_SPEED_MULT: 2.02, // Batas kecepatan total saat boss agar selalu bisa dihindari
    VARIANTS: {
      trash_giant: {
        id: 'trash_giant', name: 'ECO TRASH GIANT', style: 'heavy',
        bg: 0x24090d, hemi: 0xff949a, edge: 0xff4d6d, color: 0xff5a5f
      },
      plastic_monster: {
        id: 'plastic_monster', name: 'PLASTIC MONSTER', style: 'swarm',
        bg: 0x1b0726, hemi: 0xe69eff, edge: 0xff4fd8, color: 0xff4fd8
      },
      waste_machine: {
        id: 'waste_machine', name: 'WASTE MACHINE', style: 'industrial',
        bg: 0x221206, hemi: 0xffc082, edge: 0xff9d2e, color: 0xff9d2e
      }
    },
    DIFFICULTIES: {
      easy: {
        id: 'easy', label: 'EASY',
        timeMin: 9, timeMax: 11, speedMult: 1.07, gapMult: 0.90, comboChance: 0.35,
        bonus: 200, comboGuard: 4.5, rareDrops: 1, goldChance: 0.15, grantShield: false
      },
      normal: {
        id: 'normal', label: 'NORMAL',
        timeMin: 11, timeMax: 14, speedMult: 1.13, gapMult: 0.83, comboChance: 0.55,
        bonus: 275, comboGuard: 5.5, rareDrops: 1, goldChance: 0.35, grantShield: false
      },
      hard: {
        id: 'hard', label: 'HARD',
        timeMin: 14, timeMax: 17, speedMult: 1.19, gapMult: 0.77, comboChance: 0.72,
        bonus: 375, comboGuard: 6.5, rareDrops: 2, goldChance: 0.65, grantShield: false
      },
      ultimate: {
        id: 'ultimate', label: 'ULTIMATE',
        timeMin: 16, timeMax: 19, speedMult: 1.23, gapMult: 0.73, comboChance: 0.84,
        bonus: 500, comboGuard: 8.0, rareDrops: 2, goldChance: 1.00, grantShield: true
      }
    }
  },

  POWER: { boost: 7.5, magnet: 8.0, speed: 4.2 }, // detik

  // Definisi 10 rintangan (ukuran, hitbox, tipe lompat/slide, tingkat kesulitan, peringatan visual)
  OBSTACLES: {
    cone:      { need: 'jump',  tier: 'easy',   size: 'small',  hitW: 1.05, hitH: 0.90, hitY: 0.45, hitDx: 0, warning: false, name: 'Kerucut kecil' },
    bin:       { need: 'jump',  tier: 'easy',   size: 'small',  hitW: 1.30, hitH: 1.20, hitY: 0.60, hitDx: 0, warning: false, name: 'Tong sampah' },
    box:       { need: 'jump',  tier: 'easy',   size: 'medium', hitW: 1.75, hitH: 1.55, hitY: 0.78, hitDx: 0, warning: false, name: 'Kardus' },
    hole:      { need: 'jump',  tier: 'medium', size: 'wide',   hitW: 2.50, hitH: 0.50, hitY: 0.00, hitDx: 0, warning: false, name: 'Lubang jalan' },
    barrier:   { need: 'jump',  tier: 'medium', size: 'medium', hitW: 2.05, hitH: 1.15, hitY: 0.58, hitDx: 0, warning: false, name: 'Road barrier' },
    pipe:      { need: 'slide', tier: 'medium', size: 'wide',   hitW: 3.00, hitH: 0.72, hitY: 1.54, hitDx: 0, warning: false, name: 'Pipa rendah' },
    trashPile: { need: 'jump',  tier: 'medium', size: 'large',  hitW: 2.35, hitH: 1.52, hitY: 0.76, hitDx: 0, warning: false, name: 'Tumpukan sampah' },
    lowBeam:   { need: 'slide', tier: 'hard',   size: 'wide',   hitW: 2.80, hitH: 1.55, hitY: 1.98, hitDx: 0, warning: true,  name: 'Palang rendah' },
    dumpster:  { need: 'jump',  tier: 'hard',   size: 'tall',   hitW: 2.20, hitH: 2.00, hitY: 1.00, hitDx: 0, warning: true,  name: 'Kontainer tinggi' },
    car:       { need: 'jump',  tier: 'hard',   size: 'long',   hitW: 2.75, hitH: 1.38, hitY: 0.69, hitDx: 0, warning: true,  name: 'Mobil bekas' }
  },

  // Rank progress (tanpa hadiah fisik) & 2 tier hadiah booth (ECO LEGEND & ECO CHAMPION)
  REVISIONS: BOOTH_CONFIG.revisions,
  PROGRESS_RANKS: BOOTH_CONFIG.ranks,
  REWARDS: BOOTH_CONFIG.rewards,
  RANK_BASE: { id: 'rookie', rank: 'ECO ROOKIE', minScore: 0 },
  REWARD_CODE_PREFIX: 'PLV'
};

export const OBSTACLE_DEFS = C.OBSTACLES;

// Daftar seluruh rank terurut dari skor terendah (progress ranks + reward ranks).
export const RANKS = [
  { id: C.RANK_BASE.id, name: C.RANK_BASE.rank, minScore: 0, prize: null, fullPrize: null, badge: '' },
  ...Object.entries(C.PROGRESS_RANKS || {})
    .map(([id, r]) => ({ id, name: r.rank, minScore: r.minScore, prize: null, fullPrize: null, badge: '' })),
  ...Object.entries(C.REWARDS)
    .map(([id, r]) => ({
      id,
      name: r.rank,
      minScore: r.minScore,
      prize: r.prize,
      fullPrize: r.fullPrize || r.prize,
      badge: r.badge || ''
    }))
].sort((a, b) => a.minScore - b.minScore);

export function rankFor(score) {
  let r = RANKS[0];
  for (const x of RANKS) if (score >= x.minScore) r = x;
  return r;
}

export function tierProgress(score) {
  let idx = 0;
  for (let i = 0; i < RANKS.length; i++) if (score >= RANKS[i].minScore) idx = i;
  const cur = RANKS[idx];
  const next = RANKS[idx + 1] || null;
  if (!next) return { cur, next: null, pct: 1 };
  const span = Math.max(1, next.minScore - cur.minScore);
  return { cur, next, pct: Math.max(0, Math.min(1, (score - cur.minScore) / span)) };
}

export function phaseAt(distance) {
  const ps = C.PHASES;
  for (let i = ps.length - 1; i >= 0; i--) if (distance >= ps[i].minDist) return ps[i];
  return ps[0];
}

// Kecepatan meningkat bertahap berdasarkan jarak tempuh (halus di setiap fase).
export function speedMultAt(distance) {
  const p = phaseAt(distance);
  const span = Math.max(1, p.maxDist - p.minDist);
  const t = Math.max(0, Math.min(1, (distance - p.minDist) / span));
  const eased = p.id === 1 ? t * t * (3 - 2 * t) : t;
  return Math.min(C.SPEED.MAX, p.speedMin + (p.speedMax - p.speedMin) * eased);
}
