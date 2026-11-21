// leaderboard.js - Top 10 lokal (localStorage)
import { Storage, KEYS } from './storage.js';

const MAX = 10;

export const Leaderboard = {
  list() {
    const l = Storage.get(KEYS.LB, []);
    return Array.isArray(l) ? l : [];
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
