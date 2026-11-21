// config.js - semua angka yang boleh diubah panitia booth ada di sini.
// Tidak perlu menyentuh logika game untuk mengatur hadiah, stok, atau tingkat kesulitan.

export const C = {
  // Isi dengan alamat website Plasvora agar tombol EXPLORE PLASVORA membukanya.
  // Kosong = tombol menampilkan panel info saja.
  PLASVORA_URL: '',

  // PIN panel admin booth (Settings > ADMIN). Ganti sebelum acara.
  ADMIN_PIN: '1234',

  BRAND: 'PLASVORA',
  TAGLINE: 'Recycle • Reuse • Reimagine',
  LIVES: 3,

  // Satuan dunia = meter. Robot setinggi 1.9.
  WORLD: {
    GRAVITY: 50,
    JUMP_V: 19,         // puncak lompatan sekitar 3.6
    FALL_MULT: 1.8,     // jatuh lebih cepat saat tombol bawah ditekan di udara
    BASE_SPEED: 9,      // satuan per detik pada kecepatan 1.0x
    SPAWN_X: 27,        // objek muncul di luar tepi kanan layar
    DESPAWN_X: -12,
    JUMP_BUFFER: 0.12
  },

  // 1.0x naik 0.1x tiap STEP_SECONDS sampai 1.8x
  SPEED: { STEP_SECONDS: 9, MIN: 1.0, MAX: 1.8, STEP: 0.1 },

  SCORE: {
    normal: 50, rare: 100, gold: 250,
    perMeter: .3,      // poin jarak
    power: 25,          // bonus ambil power-up
    speedBoostBonus: 100,
    smash: 40           // menghancurkan rintangan saat Speed Boost
  },

  // x1..x5 -> pengali 1, 1.25, 1.5, 1.75, 2.0. Naik 1 level tiap perLevel plastik berurutan.
  COMBO: { perLevel: 5, mult: [1, 1.25, 1.5, 1.75, 2.0] },

  // Peluang tiap "slot" di jalan. Susunannya diacak dengan biji baru di setiap permainan.
  LOOT: {
    weights: { normal: 50, rare: 15, gold: 5, power: 10, obstacle: 20 },
    MAX_CONSECUTIVE_OBSTACLES: 2,
    GAP_START: 1.65,        // detik antar slot di awal
    GAP_END: 0.9,           // detik antar slot di kecepatan penuh
    OBSTACLE_MIN_GAP: 1.15, // detik minimum antar dua rintangan (agar sempat mendarat)
    POWER_COOLDOWN: 14,     // detik minimum antar power-up
    INTRO_SLOTS: 3          // slot awal selalu aman
  },

  BOSS: {
    SCORE_MIN: 1500, SCORE_MAX: 2200,   // skor pemicu diacak tiap permainan
    TIME_MIN: 10, TIME_MAX: 15,
    BONUS: 500, SPEED_MULT: 1.2, WARN: 2.4
  },

  POWER: { boost: 8, magnet: 8, speed: 4.5 },   // detik

  // Hadiah. stock = jumlah hadiah fisik yang tersedia. Ubah angka lalu muat ulang halaman.
  REWARDS: {
    hero:     { minScore: 500,  stock: 30, rank: 'ECO HERO',     prize: '1 Sticker Plasvora' },
    master:   { minScore: 1000, stock: 15, rank: 'ECO MASTER',   prize: 'Sticker Spesial' },
    champion: { minScore: 2000, stock: 5,  rank: 'ECO CHAMPION', prize: 'Sticker Limited' },
    legend:   { minScore: 3000, stock: 2,  rank: 'ECO LEGEND',   prize: 'Hadiah Utama Booth' }
  },
  RANK_BASE: { id: 'explorer', rank: 'ECO EXPLORER', minScore: 0 },
  REWARD_CODE_PREFIX: 'PLV'
};

// Daftar rank terurut dari skor terendah. Dipakai di game over dan leaderboard.
export const RANKS = [
  { id: C.RANK_BASE.id, name: C.RANK_BASE.rank, minScore: 0, prize: null },
  ...Object.entries(C.REWARDS)
    .map(([id, r]) => ({ id, name: r.rank, minScore: r.minScore, prize: r.prize }))
    .sort((a, b) => a.minScore - b.minScore)
];

export function rankFor(score) {
  let r = RANKS[0];
  for (const x of RANKS) if (score >= x.minScore) r = x;
  return r;
}

export function speedMultAt(t) {
  const s = C.SPEED;
  return Math.min(s.MAX, s.MIN + Math.floor(t / s.STEP_SECONDS) * s.STEP);
}
