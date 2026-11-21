// audio.js - semua suara dibuat dengan Web Audio API (tanpa file), jadi game tetap offline.
// Musik: sequencer 64 langkah (Am - F - C - G). Mode: menu, run, boss.

let ctx = null, master, musicGain, sfxGain, noiseBuf;
const vol = { music: 0.5, sfx: 0.8 };
let musicOn = false, mode = 'menu', timer = null, nextT = 0, step = 0;

const CHORDS = [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]];
const BASS = { 0: 1, 3: 1, 6: 1, 8: 1, 11: 1, 14: 1 };
const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);

function init() {
  if (ctx) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  ctx = new AC();
  master = ctx.createGain(); master.connect(ctx.destination);
  musicGain = ctx.createGain(); musicGain.connect(master);
  sfxGain = ctx.createGain(); sfxGain.connect(master);
  noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
  const d = noiseBuf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  apply();
}
function apply() {
  if (!ctx) return;
  musicGain.gain.value = vol.music * 0.3;
  sfxGain.gain.value = vol.sfx * 0.7;
}

function tone(f, dur, type, v, t0, slideTo, dest) {
  if (!ctx) return;
  t0 = t0 || ctx.currentTime;
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type || 'sine';
  o.frequency.setValueAtTime(f, t0);
  if (slideTo) o.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t0 + dur);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(v || 0.2, t0 + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g); g.connect(dest || sfxGain);
  o.start(t0); o.stop(t0 + dur + 0.02);
}
function noise(dur, v, t0, freq, dest) {
  if (!ctx) return;
  t0 = t0 || ctx.currentTime;
  const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
  s.buffer = noiseBuf; f.type = 'highpass'; f.frequency.value = freq || 2000;
  g.gain.setValueAtTime(v || 0.2, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  s.connect(f); f.connect(g); g.connect(dest || sfxGain);
  s.start(t0); s.stop(t0 + dur + 0.02);
}
const seq = (notes, dur, type, v, gap) => {
  if (!ctx) return; const t = ctx.currentTime;
  notes.forEach((n, i) => tone(n, dur, type, v, t + i * gap));
};

function playStep(s, t, sd) {
  const bar = Math.floor(s / 16) % 4, k = s % 16, ch = CHORDS[bar];
  const calm = mode === 'menu', boss = mode === 'boss';
  if (!calm && k % 4 === 0) tone(150, 0.16, 'sine', 0.9, t, 45, musicGain);
  if (!calm && (k === 4 || k === 12)) noise(0.1, 0.3, t, 1500, musicGain);
  if (k % 2 === 1 || (boss && k % 2 === 0)) noise(0.04, calm ? 0.06 : 0.13, t, 7000, musicGain);
  if (BASS[k]) tone(mtof(ch[0] - 24), sd * 2.2, 'sawtooth', calm ? 0.2 : 0.3, t, null, musicGain);
  if (k % 2 === 0) tone(mtof(ch[(k / 2) % 3] + 12), sd * 1.6, 'square', calm ? 0.06 : 0.09, t, null, musicGain);
  if (boss) tone(mtof(ch[(k + 1) % 3] + 24), sd * 0.9, 'triangle', 0.09, t + sd * 0.5, null, musicGain);
}
function sched() {
  if (!ctx || !musicOn) return;
  const bpm = mode === 'boss' ? 150 : mode === 'menu' ? 100 : 128;
  const sd = 60 / bpm / 4;
  while (nextT < ctx.currentTime + 0.16) { playStep(step, nextT, sd); nextT += sd; step = (step + 1) % 64; }
}

export const Sound = {
  unlock() { init(); if (ctx && ctx.state === 'suspended') ctx.resume(); },
  setVolumes(m, s) { vol.music = m; vol.sfx = s; apply(); },
  startMusic(m) {
    this.unlock(); if (!ctx) return;
    mode = m || 'run';
    if (musicOn) return;
    musicOn = true; step = 0; nextT = ctx.currentTime + 0.06;
    timer = setInterval(sched, 40);
  },
  setMode(m) { mode = m; },
  stopMusic() { musicOn = false; clearInterval(timer); },

  click() { tone(660, 0.07, 'square', 0.12); },
  jump() { tone(280, 0.16, 'square', 0.14, 0, 620); },
  slide() { noise(0.22, 0.16, 0, 1200); },
  land() { tone(120, 0.08, 'sine', 0.25, 0, 70); },
  collect(level) { const f = 700 + level * 80; tone(f, 0.08, 'square', 0.12); tone(f * 1.5, 0.1, 'square', 0.1, ctx ? ctx.currentTime + 0.05 : 0); },
  rare() { seq([880, 1175, 1480], 0.11, 'triangle', 0.18, 0.06); },
  gold() { seq([784, 1047, 1319, 1568], 0.14, 'square', 0.17, 0.07); },
  combo(level) { const b = 520 + level * 60; seq([b, b * 1.25, b * 1.5], 0.12, 'triangle', 0.2, 0.07); },
  power() { seq([440, 660, 880, 1320], 0.12, 'sawtooth', 0.15, 0.08); },
  shield() { tone(900, 0.2, 'triangle', 0.2, 0, 200); noise(0.15, 0.14, 0, 3000); },
  smash() { noise(0.2, 0.28, 0, 600); tone(200, 0.15, 'square', 0.14, 0, 80); },
  hit() { noise(0.3, 0.42, 0, 300); tone(160, 0.3, 'sawtooth', 0.28, 0, 40); },
  boss() { if (!ctx) return; const t = ctx.currentTime; for (let i = 0; i < 6; i++) tone(i % 2 ? 520 : 780, 0.22, 'sawtooth', 0.18, t + i * 0.38); },
  bossWin() { seq([523, 659, 784, 1047, 1319], 0.2, 'square', 0.17, 0.09); },
  gameOver() { seq([392, 330, 262, 196], 0.35, 'sawtooth', 0.19, 0.22); },
  reward() { seq([523, 659, 784, 1047, 784, 1047, 1319], 0.16, 'square', 0.17, 0.1); },
  highScore() { seq([523, 659, 784, 659, 784, 1047, 1319], 0.2, 'square', 0.19, 0.11); },
  tick(go) { tone(go ? 880 : 520, go ? 0.3 : 0.1, 'square', 0.16); }
};
