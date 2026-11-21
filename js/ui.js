// ui.js - semua tampilan DOM: HUD, antrean umpan balik, menu, game over, hadiah, leaderboard, admin
import { C, RANKS } from './config.js';
import { STATE } from './states.js';
import { Sound } from './audio.js';
import { Settings } from './storage.js';
import { Leaderboard } from './leaderboard.js';
import { Reward } from './reward.js';
import { pad6, fmt, km } from './util.js';
import { runConfetti } from './effects.js';

const $ = (id) => document.getElementById(id);
const SCREENS = ['menu', 'name', 'how', 'set', 'admin', 'pause', 'over', 'claim', 'explore', 'lb', 'champ'];

let h = null;                 // handlers dari game
let cur = 'menu', exploreFrom = 'over', hlId = null, countTimer = 0, muted = false;

/* ---------------- layar ---------------- */
function show(name) {
  cur = name;
  for (const s of SCREENS) $('scr-' + s).hidden = (s !== name);
  if (name === 'none') return;
  const scr = $('scr-' + name); if (!scr) return;
  if (name === 'name') { const n = $('nick'); n.value = ''; setTimeout(() => n.focus(), 30); }
  else if (name === 'admin') { setTimeout(() => $('adm-pin-in').focus(), 30); }
  else if (name !== 'champ') {
    const f = [...scr.querySelectorAll('.btn')].find((b) => !b.hidden && b.classList.contains('primary')) || [...scr.querySelectorAll('.btn')].find((b) => !b.hidden);
    if (f) setTimeout(() => f.focus(), 30);
  }
}

/* ---------------- HUD ---------------- */
const cache = {};
function setText(id, v) { if (cache[id] !== v) { cache[id] = v; $(id).textContent = v; } }

const PW = [['boost', '2X', 'ECO BOOST'], ['magnet', 'M', 'MAGNET'], ['shield', 'S', 'SHIELD'], ['speed', '»', 'SPEED']];
const pwEls = {};
function buildPowers() {
  const box = $('h-powers');
  for (const [k, ic] of PW) {
    const d = document.createElement('div'); d.className = 'pw'; d.hidden = true;
    d.innerHTML = '<span class="ic">' + ic + '</span><i><u></u></i>';
    box.appendChild(d); pwEls[k] = { el: d, bar: d.querySelector('u') };
  }
  const hearts = $('h-hearts');
  for (let i = 0; i < C.LIVES; i++) { const s = document.createElement('i'); s.textContent = '♥'; hearts.appendChild(s); }
}

function setHud(d) {
  setText('h-score', pad6(d.score));
  setText('h-high', pad6(Math.max(d.high, d.score)));
  setText('h-dist', km(d.meters));
  setText('h-plastic', String(d.plastic));
  setText('h-speed', d.speed.toFixed(1));
  const hearts = $('h-hearts').children;
  for (let i = 0; i < hearts.length; i++) hearts[i].className = i < d.lives ? '' : 'off';
  // combo: tampil mulai x2
  const cb = $('h-combo');
  if (d.level >= 1) {
    if (cb.hidden) cb.hidden = false;
    const t = 'x' + (d.level + 1);
    if (cache.combo !== t) { cache.combo = t; $('h-combo-n').textContent = t; cb.classList.remove('pulse'); void cb.offsetWidth; cb.classList.add('pulse'); }
  } else if (!cb.hidden) { cb.hidden = true; cache.combo = ''; }
  // boss
  const bb = $('h-boss');
  if (d.boss.active) {
    if (bb.hidden) bb.hidden = false;
    setText('h-boss-t', String(Math.ceil(d.boss.left)));
    $('h-boss-fill').style.width = (100 * (1 - d.boss.left / d.boss.total)) + '%';
  } else if (!bb.hidden) bb.hidden = true;
  // power-up
  for (const [k] of PW) {
    const p = pwEls[k], v = d.powers[k];
    const on = k === 'shield' ? !!v : v > 0;
    if (p.el.hidden === on) p.el.hidden = !on;
    if (on) p.bar.style.width = (k === 'shield' ? 100 : 100 * v / C.POWER[k]) + '%';
  }
  const hint = $('h-hint');
  if (hint.classList.contains('off') !== !d.hint) hint.classList.toggle('off', !d.hint);
}
function bumpScore() { const b = $('h-score'); b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); }

/* ---------------- antrean umpan balik ----------------
   Hanya satu banner besar pada satu waktu. Banner prioritas lebih tinggi menggantikan yang lebih rendah,
   yang menunggu terlalu lama dibuang. Teks kecil di dekat robot dibatasi tiga sekaligus. */
const fb = {
  active: null, t: 0, queue: [],
  push(it) {
    it.dur = it.dur || 1.4; it.prio = it.prio || 1; it.at = performance.now();
    if (this.active && this.active.text === it.text) { this.t = 0; return; }
    if (!this.active || it.prio > this.active.prio) { this.show(it); return; }
    if (this.queue.length < 3) this.queue.push(it);
  },
  show(it) {
    this.active = it; this.t = 0;
    const el = $('fb-center');
    el.className = 'fb-center ' + (it.cls || '');
    $('fb-text').textContent = it.text; $('fb-sub').textContent = it.sub || ''; $('fb-sub').hidden = !it.sub;
    el.hidden = false; el.style.animation = 'none'; void el.offsetWidth; el.style.animation = '';
  },
  update(rdt) {
    if (!this.active) return;
    this.t += rdt;
    const el = $('fb-center');
    if (this.t > this.active.dur - 0.25 && !el.classList.contains('out')) el.classList.add('out');
    if (this.t >= this.active.dur) {
      el.hidden = true; this.active = null;
      const now = performance.now();
      this.queue = this.queue.filter((q) => now - q.at < 1500).sort((a, b) => b.prio - a.prio);
      const n = this.queue.shift(); if (n) this.show(n);
    }
  },
  clear() { this.active = null; this.queue.length = 0; $('fb-center').hidden = true; }
};

const floats = [];
function floatAt(text, cls, xPct, yPct, sub) {
  let f = floats.find((x) => !x.busy);
  if (!f) {
    if (floats.length >= 3) { if (cls === 'normal') return; f = floats.sort((a, b) => a.at - b.at)[0]; }
    else { const el = document.createElement('div'); $('floats').appendChild(el); f = { el, busy: false, at: 0 }; floats.push(f); }
  }
  f.busy = true; f.at = performance.now();
  f.el.className = 'fl ' + cls;
  f.el.innerHTML = text + (sub ? '<small>' + sub + '</small>' : '');
  f.el.style.left = xPct + '%'; f.el.style.top = (yPct - (floats.filter((x) => x.busy && x !== f).length * 5)) + '%';
  f.el.style.animation = 'none'; void f.el.offsetWidth; f.el.style.animation = '';
  clearTimeout(f.to); f.to = setTimeout(() => { f.busy = false; f.el.className = 'fl'; f.el.textContent = ''; }, 820);
}

function countdown(label) {
  const el = $('countdown');
  el.hidden = false; el.textContent = label; el.classList.toggle('go', label === 'GO!');
  el.style.animation = 'none'; void el.offsetWidth; el.style.animation = '';
}
const hideCountdown = () => { $('countdown').hidden = true; };
function runTag(text) { const e = $('runtag'); if (!text) { e.hidden = true; return; } e.textContent = text; e.hidden = false; }
function hudShow(v) { $('hud').hidden = !v; if (!v) { fb.clear(); $('countdown').hidden = true; $('runtag').hidden = true; } }
function resetHudCache() { for (const k in cache) delete cache[k]; $('h-combo').hidden = true; $('h-boss').hidden = true; $('h-hint').classList.remove('off'); }

/* ---------------- leaderboard ---------------- */
function rankName(id) { const r = RANKS.find((x) => x.id === id); return r ? r.name : ''; }
function renderLB(hl) {
  hlId = hl === undefined ? hlId : hl;
  const ol = $('lb-list'), list = Leaderboard.list();
  ol.innerHTML = '';
  if (!list.length) { const e = document.createElement('li'); e.className = 'empty'; e.textContent = 'Belum ada skor. Jadilah yang pertama!'; ol.appendChild(e); return; }
  list.forEach((it, i) => {
    const li = document.createElement('li'); if (it.id === hlId) li.className = 'me';
    const d = new Date(it.date), ds = isNaN(d) ? '' : ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2);
    [['n', (i + 1) + '.'], ['nm', it.name], ['sc', fmt(it.score)], ['ds', km(it.distance || 0) + ' KM ' + ds], ['rk', rankName(it.rank).replace('ECO ', '')]].forEach(([c, t]) => {
      const s = document.createElement('span'); s.className = c; s.textContent = t; li.appendChild(s);
    });
    ol.appendChild(li);
  });
}

/* ---------------- game over ---------------- */
function countUp(el, target, ms, done) {
  clearInterval(countTimer);
  if (ms <= 0) { el.textContent = fmt(target); if (done) done(); return; }
  const t0 = performance.now(); el.textContent = '0';
  countTimer = setInterval(() => {
    const p = Math.min(1, (performance.now() - t0) / ms);
    el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)));
    if (p >= 1) { clearInterval(countTimer); if (done) done(); }
  }, 30);
}

function rewardLine(res) {
  const st = Reward.status(res.score, res.entry.id);
  const el = $('o-reward'); el.className = 'o-reward';
  const claim = $('o-claim'); claim.hidden = true;
  if (st.state === 'available') { el.innerHTML = 'REWARD UNLOCKED<br><b>' + st.prize + '</b>'; claim.hidden = false; }
  else if (st.state === 'soldout') { el.classList.add('out'); el.innerHTML = '<b>REWARD HABIS</b><br>Tetap tercatat di leaderboard!'; }
  else if (st.state === 'claimed') { el.innerHTML = 'Reward sudah diklaim &bull; KODE <b>' + st.code + '</b>'; }
  else {
    const next = RANKS.find((r) => r.prize);
    el.innerHTML = 'Capai <b>' + fmt(next.minScore) + '</b> poin untuk reward pertama.';
  }
  return st;
}

function showOver(res, animate = true) {
  $('o-name').textContent = res.name;
  $('o-dist').textContent = km(res.meters) + ' KM';
  $('o-plastic').textContent = String(res.plastic);
  $('o-combo').textContent = 'x' + (res.maxLevel + 1);
  $('o-rank-name').textContent = res.rank.name;
  $('o-rank-pos').textContent = res.position === 1 ? 'RANK #1' : res.position ? 'GOOD RUN! RANK #' + res.position : 'GOOD RUN!';
  const rk = $('o-rank'); rk.classList.remove('show'); void rk.offsetWidth;
  rewardLine(res);
  $('o-reward').style.visibility = 'hidden';
  show('over');
  countUp($('o-score'), res.score, animate ? 1000 : 0, () => {
    rk.classList.add('show');
    $('o-reward').style.visibility = 'visible';
    if (animate && res.isTop1) setTimeout(champ, 700);
  });
}
function champ() {
  show('champ'); Sound.highScore(); runConfetti($('confetti'));
}

function showClaim(info, res) {
  $('c-rank').textContent = info.rank.name;
  $('c-score').textContent = fmt(res.score);
  $('c-prize').textContent = info.prize;
  $('c-code').textContent = info.code;
  show('claim'); Sound.reward(); runConfetti($('confetti'));
}

function explore(from) {
  if (C.PLASVORA_URL) { try { window.open(C.PLASVORA_URL, '_blank', 'noopener'); } catch (e) { /* diabaikan */ } }
  else { exploreFrom = from; show('explore'); }
}

/* ---------------- pengaturan dan admin ---------------- */
function syncSettings() {
  const s = Settings.get();
  $('vol-music').value = Math.round(s.music * 100); $('vol-sfx').value = Math.round(s.sfx * 100);
  $('o-music').textContent = Math.round(s.music * 100) + '%'; $('o-sfx').textContent = Math.round(s.sfx * 100) + '%';
}
function onVol() {
  const s = Settings.get();
  s.music = +$('vol-music').value / 100; s.sfx = +$('vol-sfx').value / 100;
  $('o-music').textContent = Math.round(s.music * 100) + '%'; $('o-sfx').textContent = Math.round(s.sfx * 100) + '%';
  if (!muted) Sound.setVolumes(s.music, s.sfx);
  Settings.save();
}
function toggleFull() {
  try { if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen(); } catch (e) { /* diabaikan */ }
}
function toggleMute() {
  muted = !muted; const s = Settings.get();
  Sound.setVolumes(muted ? 0 : s.music, muted ? 0 : s.sfx);
}

function renderAdmin() {
  const t = $('adm-stock');
  t.innerHTML = '<tr><th>RANK</th><th>HADIAH</th><th style="text-align:right">SISA</th></tr>' +
    Reward.stockTable().map((r) => '<tr><td>' + r.name + '</td><td>' + r.prize + '</td><td class="n' + (r.left === 0 ? ' z' : '') + '">' + r.left + ' / ' + r.total + '</td></tr>').join('');
  $('adm-claims').textContent = 'Total klaim tercatat: ' + Reward.claimCount();
}
function adminOpen() {
  $('adm-pin').hidden = false; $('adm-panel').hidden = true; $('adm-err').hidden = true; $('adm-pin-in').value = '';
  $('adm-ok').hidden = false; $('adm-reset').hidden = true; $('adm-clear').hidden = true;
  show('admin');
}
function adminTry() {
  if ($('adm-pin-in').value === C.ADMIN_PIN) {
    $('adm-pin').hidden = true; $('adm-panel').hidden = false; $('adm-ok').hidden = true;
    $('adm-reset').hidden = false; $('adm-clear').hidden = false; renderAdmin();
    $('adm-back').focus();
  } else { $('adm-err').hidden = false; $('adm-pin-in').select(); }
}
function armed(btn, label, run) {
  btn.onclick = () => {
    if (btn.dataset.armed === '1') { btn.dataset.armed = '0'; btn.textContent = label; run(); }
    else { btn.dataset.armed = '1'; btn.textContent = 'YAKIN? KLIK LAGI'; setTimeout(() => { btn.dataset.armed = '0'; btn.textContent = label; }, 3500); }
  };
}

/* ---------------- navigasi keyboard ---------------- */
function visibleButtons() {
  const scr = $('scr-' + cur); if (!scr) return [];
  return [...scr.querySelectorAll('.btn, .link')].filter((b) => !b.hidden && b.offsetParent !== null);
}
function back() {
  if (cur === 'name') show('menu');
  else if (cur === 'admin') show('set');
  else if (cur === 'explore') show(exploreFrom);
  else if (cur === 'pause') h.resume();
  else if (cur === 'how' || cur === 'set' || cur === 'lb') h.back();
}

function onKey(e) {
  Sound.unlock();
  const k = e.key, tag = e.target && e.target.tagName;
  if (tag === 'INPUT') {
    if (e.target.id === 'nick') { if (k === 'Enter') { e.preventDefault(); h.play($('nick').value); } else if (k === 'Escape') { e.preventDefault(); show('menu'); } }
    else if (e.target.id === 'adm-pin-in') { if (k === 'Enter') { e.preventDefault(); adminTry(); } else if (k === 'Escape') { e.preventDefault(); show('set'); } }
    return;
  }
  if (k === 'f' || k === 'F') { toggleFull(); return; }
  if (k === 'm' || k === 'M') { toggleMute(); return; }
  const st = h.getState();
  if (st === STATE.PLAYING || st === STATE.BOSS || st === STATE.COUNTDOWN) return;
  if (cur === 'champ') { e.preventDefault(); show('over'); return; }
  if (st === STATE.PAUSED && (k === 'p' || k === 'P' || k === 'Escape')) { e.preventDefault(); h.resume(); return; }
  if (k === 'Escape' || k === 'Backspace') { e.preventDefault(); back(); return; }
  if (k === 'ArrowDown' || k === 'ArrowUp') {
    const bs = visibleButtons(); if (!bs.length) return;
    e.preventDefault();
    let i = bs.indexOf(document.activeElement);
    i = i < 0 ? 0 : (i + (k === 'ArrowDown' ? 1 : -1) + bs.length) % bs.length;
    bs[i].focus(); Sound.click(); return;
  }
  if (k === 'ArrowRight' || k === 'ArrowLeft') {
    const bs = visibleButtons(), i = bs.indexOf(document.activeElement);
    if (bs.length > 1 && i >= 0 && cur !== 'menu' && cur !== 'pause') { e.preventDefault(); bs[(i + (k === 'ArrowRight' ? 1 : -1) + bs.length) % bs.length].focus(); }
    return;
  }
  if (k === 'Enter' && !(document.activeElement && /BUTTON/.test(document.activeElement.tagName))) {
    const f = visibleButtons()[0]; if (f) { e.preventDefault(); f.click(); }
  }
}

/* ---------------- init ---------------- */
function init(handlers) {
  h = handlers;
  buildPowers(); syncSettings();
  const c = (id, fn) => { $(id).onclick = () => { Sound.click(); fn(); }; };

  c('b-play', () => show('name'));
  c('b-lb', () => h.go(STATE.LEADERBOARD));
  c('b-how', () => h.go(STATE.HOW_TO_PLAY));
  c('b-set', () => h.go(STATE.SETTINGS));
  c('b-start', () => h.play($('nick').value));
  c('b-name-back', () => show('menu'));
  c('how-back', () => h.back());
  c('lb-back', () => h.back());
  c('set-back', () => h.back());
  c('b-full', toggleFull);
  c('b-admin', adminOpen);
  c('adm-ok', adminTry);
  c('adm-back', () => show('set'));
  armed($('adm-reset'), 'RESET STOK', () => { Reward.resetStock(); renderAdmin(); });
  armed($('adm-clear'), 'HAPUS LEADERBOARD', () => { Leaderboard.clear(); });
  $('vol-music').oninput = onVol; $('vol-sfx').oninput = onVol;

  c('p-resume', () => h.resume());
  c('p-restart', () => h.restart());
  c('p-set', () => h.go(STATE.SETTINGS));
  c('p-menu', () => h.toMenu());

  c('o-claim', () => h.claim());
  c('o-again', () => h.playAgain());
  c('o-lb', () => h.go(STATE.LEADERBOARD));
  c('o-menu', () => h.toMenu());
  c('o-explore', () => explore('over'));
  c('c-finish', () => h.toMenu());
  c('c-explore', () => explore('claim'));
  c('x-back', () => show(exploreFrom));
  $('scr-champ').onclick = () => show('over');

  document.addEventListener('keydown', onKey);
  document.addEventListener('pointerdown', () => Sound.unlock());
}

export const UI = {
  init, show, hudShow, setHud, bumpScore, resetHudCache, feedback: fb, floatAt, countdown, hideCountdown, runTag,
  showOver, showClaim, renderLB, syncSettings, explore
};
