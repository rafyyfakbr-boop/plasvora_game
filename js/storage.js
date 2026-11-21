// storage.js - pembungkus localStorage yang aman (tetap jalan jika localStorage diblokir)
const mem = {};

export const KEYS = {
  LB: 'plasvora3d_leaderboard_v1',
  SETTINGS: 'plasvora3d_settings_v1',
  STOCK: 'plasvora3d_stock_v1',
  CLAIMS: 'plasvora3d_claims_v1'
};

export const Storage = {
  get(key, fallback) {
    try {
      const r = window.localStorage.getItem(key);
      if (r !== null) return JSON.parse(r);
    } catch (e) { /* diabaikan */ }
    return key in mem ? mem[key] : fallback;
  },
  set(key, val) {
    mem[key] = val;
    try { window.localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* diabaikan */ }
  }
};

export const Settings = {
  data: null,
  load() {
    const d = Storage.get(KEYS.SETTINGS, {});
    this.data = {
      music: typeof d.music === 'number' ? d.music : 0.5,
      sfx: typeof d.sfx === 'number' ? d.sfx : 0.8
    };
    return this.data;
  },
  get() { return this.data || this.load(); },
  save() { Storage.set(KEYS.SETTINGS, this.get()); }
};
