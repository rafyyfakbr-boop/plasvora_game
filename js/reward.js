// reward.js - ambang skor hadiah, stok hadiah fisik, dan kode klaim (tidak bisa diklaim dua kali)
import { C, RANKS, rankFor } from './config.js';
import { Storage, KEYS } from './storage.js';

const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';   // tanpa karakter yang mudah tertukar (I, L, O, 0, 1)

function loadStock() {
  // simpan juga stok awal agar jika panitia mengubah config.js, sisa stok ikut menyesuaikan
  const saved = Storage.get(KEYS.STOCK, null);
  const base = {}, rem = {};
  for (const id in C.REWARDS) base[id] = C.REWARDS[id].stock;
  if (!saved) { const s = { base, rem: { ...base } }; Storage.set(KEYS.STOCK, s); return s; }
  let changed = false;
  for (const id in base) {
    const prevBase = saved.base[id];
    if (prevBase === undefined) { saved.base[id] = base[id]; saved.rem[id] = base[id]; changed = true; }
    else if (prevBase !== base[id]) { saved.rem[id] = Math.max(0, (saved.rem[id] || 0) + base[id] - prevBase); saved.base[id] = base[id]; changed = true; }
  }
  if (changed) Storage.set(KEYS.STOCK, saved);
  return saved;
}

const claims = () => Storage.get(KEYS.CLAIMS, []);

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
  // status untuk skor tertentu
  status(score, runId) {
    const rank = rankFor(score);
    if (!rank.prize) return { rank, state: 'none' };                    // belum memenuhi ambang hadiah
    const claimed = runId && claims().find((c) => c.runId === runId);
    if (claimed) return { rank, state: 'claimed', code: claimed.code, prize: rank.prize };
    const left = loadStock().rem[rank.id] || 0;
    return left > 0 ? { rank, state: 'available', left, prize: rank.prize } : { rank, state: 'soldout', prize: rank.prize };
  },

  // klaim: mengurangi stok dan membuat kode acak. Satu permainan hanya bisa sekali.
  claim(runId, score, name) {
    const st = this.status(score, runId);
    if (st.state === 'claimed') return { ok: false, reason: 'claimed', code: st.code, rank: st.rank, prize: st.prize };
    if (st.state !== 'available') return { ok: false, reason: st.state, rank: st.rank };
    const stock = loadStock();
    stock.rem[st.rank.id] = Math.max(0, (stock.rem[st.rank.id] || 0) - 1);
    Storage.set(KEYS.STOCK, stock);
    const list = claims();
    const code = newCode(list);
    list.push({ runId, code, tier: st.rank.id, prize: st.prize, score: Math.floor(score), name, date: new Date().toISOString() });
    Storage.set(KEYS.CLAIMS, list);
    return { ok: true, code, rank: st.rank, prize: st.prize };
  },

  // untuk panel admin
  stockTable() {
    const s = loadStock();
    return RANKS.filter((r) => r.prize).map((r) => ({ id: r.id, name: r.name, prize: r.prize, left: s.rem[r.id] || 0, total: s.base[r.id] || 0 }));
  },
  claimCount() { return claims().length; },
  resetStock() { Storage.set(KEYS.STOCK, null); Storage.set(KEYS.CLAIMS, []); loadStock(); }
};
