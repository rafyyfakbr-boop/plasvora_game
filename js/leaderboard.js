// leaderboard.js - Top 10 lokal (localStorage) dengan sinkronisasi revisi Admin Manual Mode
import { C } from './config.js';
import { Storage, KEYS } from './storage.js';

const MAX = 10;
const MIGRATE_RANK = { explorer: 'rookie', master: 'guardian' };

function syncRevision() {
  const target = (C.REVISIONS && C.REVISIONS.leaderboard) || 1;
  const saved = Storage.get(KEYS.REVS, null);
  if (!saved) {
    Storage.set(KEYS.REVS, { ...(C.REVISIONS || { stock: 1, claims: 1, leaderboard: 1 }) });
    return;
  }
  if (saved.leaderboard !== undefined && saved.leaderboard !== target) {
    Storage.set(KEYS.LB, []);
    saved.leaderboard = target;
    Storage.set(KEYS.REVS, saved);
  } else if (saved.leaderboard === undefined) {
    saved.leaderboard = target;
    Storage.set(KEYS.REVS, saved);
  }
}

export const Leaderboard = {
  list() {
    syncRevision();
    const l = Storage.get(KEYS.LB, []);
    if (!Array.isArray(l)) return [];
    return l.map((it) => (it && MIGRATE_RANK[it.rank] ? { ...it, rank: MIGRATE_RANK[it.rank] } : it));
  },
  best() { const l = this.list(); return l.length ? l[0].score : 0; },

  // Menyimpan hasil. position = 1..10, atau 0 jika tidak masuk Top 10.
  add(e) {
    const prevBest = this.best();
    const entry = {
      id: Date.now().toString(36) + Math.floor(Math.random() * 1296).toString(36),
      name: e.name, score: Math.floor(e.score), distance: Math.round(e.distance),
      plastic: e.plastic, rank: e.rank, comboMax: e.comboMax, date: new Date().toISOString()
    };
    const l = this.list().slice();
    l.push(entry);
    l.sort((a, b) => b.score - a.score);
    const top = l.slice(0, MAX);
    Storage.set(KEYS.LB, top);
    const i = top.findIndex((x) => x.id === entry.id);
    return { entry, position: i + 1, isTop1: i === 0 && entry.score > 0 && entry.score > prevBest };
  },
  clear() { Storage.set(KEYS.LB, []); }
};
