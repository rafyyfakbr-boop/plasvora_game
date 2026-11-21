// reward.js - sistem 2 hadiah booth (ECO LEGEND = Sticker Limited, ECO CHAMPION = HADIAH UTAMA BOOTH),
// manajemen stok, pencegahan double claim, pencatatan waktu/rank klaim, dan sinkronisasi revisi Admin Manual Mode.
import { C, RANKS, rankFor } from './config.js';
import { Storage, KEYS } from './storage.js';

const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';

function checkRevisions() {
  const target = C.REVISIONS || { stock: 2, claims: 1, leaderboard: 1 };
  const saved = Storage.get(KEYS.REVS, null);
  if (!saved) {
    Storage.set(KEYS.REVS, { ...target });
    return;
  }
  let changed = false;
  if (saved.stock !== undefined && saved.stock !== target.stock) {
    Storage.set(KEYS.STOCK, null);
    saved.stock = target.stock;
    changed = true;
  }
  if (saved.claims !== undefined && saved.claims !== target.claims) {
    Storage.set(KEYS.CLAIMS, []);
    saved.claims = target.claims;
    changed = true;
  }
  if (saved.stock === undefined) { saved.stock = target.stock; changed = true; }
  if (saved.claims === undefined) { saved.claims = target.claims; changed = true; }
  if (changed) Storage.set(KEYS.REVS, saved);
}

function loadStock() {
  checkRevisions();
  const saved = Storage.get(KEYS.STOCK, null);
  const base = {};
  // Hanya 2 tier hadiah di C.REWARDS: legend & champion
  for (const id in C.REWARDS) base[id] = C.REWARDS[id].stock;

  if (!saved || !saved.base || !saved.rem) {
    const s = { base, rem: { ...base } };
    Storage.set(KEYS.STOCK, s);
    return s;
  }

  let changed = false;
  const cleanBase = {};
  const cleanRem = {};
  for (const id in base) {
    const prevBase = saved.base[id];
    if (prevBase === undefined) {
      cleanBase[id] = base[id];
      cleanRem[id] = base[id];
      changed = true;
    } else if (prevBase !== base[id]) {
      cleanBase[id] = base[id];
      cleanRem[id] = Math.max(0, (saved.rem[id] || 0) + base[id] - prevBase);
      changed = true;
    } else {
      cleanBase[id] = prevBase;
      cleanRem[id] = Math.max(0, Math.min(base[id], saved.rem[id] || 0));
    }
  }
  for (const oldId in saved.base) {
    if (!(oldId in base)) changed = true;
  }

  const out = { base: cleanBase, rem: cleanRem };
  if (changed) Storage.set(KEYS.STOCK, out);
  return out;
}

function loadClaims() {
  checkRevisions();
  const list = Storage.get(KEYS.CLAIMS, []);
  return Array.isArray(list) ? list : [];
}

function newCode(existing) {
  for (let tries = 0; tries < 50; tries++) {
    let s = '';
    for (let i = 0; i < 4; i++) s += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    const code = C.REWARD_CODE_PREFIX + '-' + s;
    if (!existing.some((c) => c.code === code)) return code;
  }
  return C.REWARD_CODE_PREFIX + '-' + Date.now().toString(36).toUpperCase().slice(-4);
}

export const Reward = {
  // Status kelayakan hadiah untuk skor & runId tertentu.
  // ECO ROOKIE, ECO HERO, dan ECO GUARDIAN adalah progress rank (tanpa hadiah fisik -> state: 'none').
  // Hanya ECO LEGEND dan ECO CHAMPION yang berhak klaim hadiah.
  status(score, runId) {
    const rank = rankFor(score);
    if (!rank.prize || !(rank.id in C.REWARDS)) return { rank, state: 'none' };
    const claimed = runId && loadClaims().find((c) => c.runId === runId);
    if (claimed) {
      return {
        rank,
        state: 'claimed',
        code: claimed.code,
        prize: claimed.prize || rank.prize,
        fullPrize: rank.fullPrize || rank.prize,
        badge: rank.badge
      };
    }
    const left = loadStock().rem[rank.id] || 0;
    return left > 0
      ? { rank, state: 'available', left, prize: rank.prize, fullPrize: rank.fullPrize || rank.prize, badge: rank.badge }
      : { rank, state: 'soldout', left: 0, prize: rank.prize, fullPrize: rank.fullPrize || rank.prize, badge: rank.badge };
  },

  // Klaim hadiah: strictly hanya untuk ECO LEGEND atau ECO CHAMPION sesuai skor, kurangi stok, cegah double claim.
  claim(runId, score, name) {
    if (!runId) return { ok: false, reason: 'invalid_run' };
    const st = this.status(score, runId);
    if (st.state === 'claimed') {
      return { ok: false, reason: 'claimed', code: st.code, rank: st.rank, prize: st.prize, fullPrize: st.fullPrize, badge: st.badge };
    }
    if (st.state !== 'available') {
      return { ok: false, reason: st.state, rank: st.rank };
    }
    const stock = loadStock();
    const curLeft = stock.rem[st.rank.id] || 0;
    if (curLeft <= 0) {
      return { ok: false, reason: 'soldout', rank: st.rank };
    }
    stock.rem[st.rank.id] = curLeft - 1;
    Storage.set(KEYS.STOCK, stock);

    const list = loadClaims();
    const code = newCode(list);
    const record = {
      runId,
      code,
      tier: st.rank.id,
      rank: st.rank.name,
      badge: st.rank.badge || '',
      prize: st.prize,
      score: Math.floor(score),
      name: String(name || 'PLAYER'),
      date: new Date().toISOString()
    };
    list.push(record);
    Storage.set(KEYS.CLAIMS, list);
    return { ok: true, code, rank: st.rank, prize: st.prize, fullPrize: st.fullPrize, badge: st.badge, record };
  },

  // Tabel Admin Booth: HANYA menampilkan 2 tier hadiah (ECO LEGEND & ECO CHAMPION)
  stockTable() {
    const s = loadStock();
    return RANKS.filter((r) => r.prize && (r.id in C.REWARDS)).map((r) => {
      const left = s.rem[r.id] || 0;
      const total = s.base[r.id] || 0;
      return {
        id: r.id,
        name: r.name,
        badge: r.badge || '',
        minScore: r.minScore,
        prize: r.prize,
        fullPrize: r.fullPrize || r.prize,
        left,
        total,
        soldOut: left <= 0
      };
    });
  },
  claimCount() { return loadClaims().length; },
  recentClaims(limit = 4) { return loadClaims().slice(-limit).reverse(); },
  resetStock() { Storage.set(KEYS.STOCK, null); loadStock(); },
  resetClaims() { Storage.set(KEYS.CLAIMS, []); }
};
