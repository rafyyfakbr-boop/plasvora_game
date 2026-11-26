// ui.js - semua tampilan DOM: HUD + Tier Progress, antrean umpan balik, menu, game over, hadiah, leaderboard, admin
import { C, RANKS } from './config.js';
import { STATE } from './states.js';
import { Sound } from './audio.js';
import { Settings } from './storage.js';
import { Leaderboard } from './leaderboard.js';
import { Reward } from './reward.js';
import { fmt, km } from './util.js';
import { runConfetti } from './effects.js';

const $ = (id) => document.getElementById(id);
const SCREENS = ['menu', 'name', 'how', 'set', 'admin', 'pause', 'over', 'claim', 'explore', 'lb', 'champ'];
const LEGACY_RANK = { explorer: 'ECO ROOKIE', master: 'ECO GUARDIAN' };

const MANUAL_COMMANDS = [
  { cmd: 'npm run admin:status', desc: 'Lihat konfigurasi 2 hadiah booth (ECO LEGEND & ECO CHAMPION) [read-only]', warn: false },
  { cmd: 'npm run admin:set-stock legend 10', desc: 'Atur stok ECO LEGEND (1 STICKER)', warn: false },
  { cmd: 'npm run admin:set-stock champion 6', desc: 'Atur stok ECO CHAMPION (2 STICKER)', warn: false },
  { cmd: 'npm run admin:set-score legend 5000', desc: 'Ubah skor minimum ECO LEGEND', warn: false },
  { cmd: 'npm run admin:set-score champion 8000', desc: 'Ubah skor minimum ECO CHAMPION', warn: false },
  { cmd: 'npm run admin:set-reward legend "1 STICKER"', desc: 'Ubah nama hadiah ECO LEGEND / ECO CHAMPION', warn: false },
  { cmd: 'npm run admin:reset-stock', desc: 'Reset stok hadiah booth ke angka default (destruktif)', warn: true },
  { cmd: 'npm run admin:reset-claims', desc: 'Reset seluruh riwayat klaim booth (destruktif)', warn: true },
  { cmd: 'npm run admin:reset-leaderboard', desc: 'Reset seluruh data leaderboard (destruktif)', warn: true }
];

const MENU_CTAS = [
  '🏆 Jadi <b>#1 LEADERBOARD</b> &amp; buktikan kamu adalah <b>ECO CHAMPION!</b>',
  '🔥 <b>CAN YOU BE #1?</b> Kejar skor tertinggi &amp; raih <b>2 STICKER!</b>',
  '🎁 Capai <b>5.000+</b> untuk <b>1 STICKER</b> &amp; <b>8.000+</b> untuk <b>2 STICKER!</b>'
];

const OVER_CTAS_BELOW_LEGEND = [
  'KEJAR ECO LEGEND &rarr; <em>1 STICKER</em>',
  '🔥 KEJAR ECO LEGEND &mdash; <em>1 STICKER</em> MENUNGGU!',
  'NAIKKAN SKORMU DAN JADI <b>#1!</b>',
  '🔥 <b>CAN YOU BE #1?</b> KEJAR ECO LEGEND!'
];
let ctaIdx = 0;

let h = null;
let cur = 'menu', exploreFrom = 'over', hlId = null, countTimer = 0, muted = false;

/* ---------------- layar ---------------- */
function show(name) {
  cur = name;
  for (const s of SCREENS) $('scr-' + s).hidden = (s !== name);
  if (name === 'none') return;
  if (name === 'menu') {
    const mc = $('menu-cta');
    if (mc) mc.innerHTML = MENU_CTAS[ctaIdx % MENU_CTAS.length];
    ctaIdx++;
  }
  const scr = $('scr-' + name); if (!scr) return;
  if (name === 'name') { const n = $('nick'); n.value = ''; setTimeout(() => n.focus(), 30); }
  else if (name === 'admin') { setTimeout(() => $('adm-pin-in').focus(), 30); }
  else if (name !== 'champ') {
    const f = [...scr.querySelectorAll('.btn')].find((b) => !b.hidden && !b.disabled && b.classList.contains('primary')) || [...scr.querySelectorAll('.btn')].find((b) => !b.hidden && !b.disabled);
    if (f) setTimeout(() => f.focus(), 30);
  }
}

/* ---------------- HUD ---------------- */
const cache = {};
function setText(id, v) { if (cache[id] !== v) { cache[id] = v; $(id).textContent = v; } }

const PW = [
  ['boost', '⚡', 'ECO BOOST'],
  ['magnet', 'M', 'MAGNET'],
  ['shield', 'S', 'SHIELD'],
  ['speed', '»', 'SPEED'],
  ['guard', 'G', 'COMBO GUARD']
];
const pwEls = {};
function buildPowers() {
  const box = $('h-powers');
  for (const [k, ic] of PW) {
    const d = document.createElement('div'); d.className = 'pw' + (k === 'guard' ? ' guard' : ''); d.hidden = true;
    d.innerHTML = '<span class="ic">' + ic + '</span><i><u></u></i>';
    box.appendChild(d); pwEls[k] = { el: d, bar: d.querySelector('u') };
  }
  const hearts = $('h-hearts');
  for (let i = 0; i < C.LIVES; i++) { const s = document.createElement('i'); s.textContent = '♥'; hearts.appendChild(s); }
}

function setHud(d) {
  setText('h-score', fmt(d.score));
  setText('h-high', fmt(Math.max(d.high, d.score)));
  setText('h-dist', km(d.meters));
  setText('h-plastic', String(d.plastic));
  setText('h-speed', d.speed.toFixed(2));

  if (d.phase) {
    const pTxt = 'P' + d.phase.id + ' • ' + d.phase.name;
    setText('h-phase', pTxt);
    const phEl = $('h-phase');
    const pCls = 'phase-pill p' + d.phase.id;
    if (cache.phCls !== pCls) { cache.phCls = pCls; phEl.className = pCls; }
  }

  // Score Tier Progress Display (minimalis & informatif)
  if (d.tier) {
    const { cur: tc, next: tn, pct } = d.tier;
    setText('h-tier-name', tc.name);
    const nextTxt = tn ? ('NEXT: ' + tn.name + ' — ' + fmt(tn.minScore)) : '★ 2 STICKER TERBUKA ★';
    setText('h-tier-next', nextTxt);
    const pctRound = Math.round(pct * 100);
    if (cache.tierPct !== pctRound) { cache.tierPct = pctRound; $('h-tier-fill').style.width = pctRound + '%'; }
    const tb = $('h-tier-box');
    const isChamp = !tn;
    if (cache.isChamp !== isChamp) { cache.isChamp = isChamp; tb.classList.toggle('champ', isChamp); }
  }

  const hearts = $('h-hearts').children;
  for (let i = 0; i < hearts.length; i++) hearts[i].className = i < d.lives ? '' : 'off';

  // Combo: tampil mulai x2..x8
  const cb = $('h-combo');
  if (d.level >= 1) {
    if (cb.hidden) cb.hidden = false;
    const t = 'x' + (d.level + 1);
    if (cache.combo !== t) { cache.combo = t; $('h-combo-n').textContent = t; cb.classList.remove('pulse'); void cb.offsetWidth; cb.classList.add('pulse'); }
  } else if (!cb.hidden) { cb.hidden = true; cache.combo = ''; }

  // Boss bar dengan nama varian & tingkat kesulitan
  const bb = $('h-boss');
  if (d.boss && d.boss.active) {
    if (bb.hidden) bb.hidden = false;
    const vName = d.boss.variant ? d.boss.variant.name : 'ECO BOSS';
    const dLbl = d.boss.diff ? ' [' + d.boss.diff.label + ']' : '';
    setText('h-boss-name', vName + dLbl);
    setText('h-boss-t', String(Math.ceil(d.boss.left)));
    $('h-boss-fill').style.width = (100 * (1 - d.boss.left / Math.max(1, d.boss.total))) + '%';
  } else if (!bb.hidden) bb.hidden = true;

  // Peringatan visual singkat di tepi kanan untuk obstacle berat (dumpster, lowBeam, car)
  const wn = $('h-warn');
  if (d.warn) {
    if (wn.hidden) wn.hidden = false;
    const isSlide = d.warn.need === 'slide';
    setText('h-warn-ic', isSlide ? '▼' : '▲');
    setText('h-warn-txt', isSlide ? 'SLIDE' : 'JUMP');
    if (cache.warnSlide !== isSlide) { cache.warnSlide = isSlide; wn.classList.toggle('slide', isSlide); }
  } else if (!wn.hidden) {
    wn.hidden = true;
  }

  // Power-up & Combo Protection
  for (const [k] of PW) {
    const p = pwEls[k], v = d.powers[k];
    const on = k === 'shield' ? !!v : v > 0;
    if (p.el.hidden === on) p.el.hidden = !on;
    if (on) {
      const denom = k === 'guard' ? 8 : (C.POWER[k] || 1);
      p.bar.style.width = (k === 'shield' ? 100 : Math.min(100, 100 * v / denom)) + '%';
    }
  }
  const hint = $('h-hint');
  if (hint.classList.contains('off') !== !d.hint) hint.classList.toggle('off', !d.hint);
}
function bumpScore() { const b = $('h-score'); b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); }

/* ---------------- antrean umpan balik ---------------- */
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
function hudShow(v) { $('hud').hidden = !v; if (!v) { fb.clear(); $('countdown').hidden = true; $('runtag').hidden = true; $('h-warn').hidden = true; } }
function resetHudCache() {
  for (const k in cache) delete cache[k];
  $('h-combo').hidden = true; $('h-boss').hidden = true; $('h-warn').hidden = true;
  $('h-hint').classList.remove('off');
  $('h-tier-box').classList.remove('champ');
}

/* ---------------- leaderboard ---------------- */
function rankName(id) {
  const r = RANKS.find((x) => x.id === id);
  return r ? r.name : (LEGACY_RANK[id] || '');
}
function renderLB(hl) {
  hlId = hl === undefined ? hlId : hl;
  const ol = $('lb-list'), list = Leaderboard.list();
  ol.innerHTML = '';
  if (!list.length) {
    const e = document.createElement('li');
    e.className = 'empty';
    e.textContent = 'Belum ada skor. Jadilah #1 TOP ECO RUNNER & raih 2 STICKER!';
    ol.appendChild(e);
    return;
  }
  list.forEach((it, i) => {
    const li = document.createElement('li');
    const isTop1 = i === 0;
    const isChamp = it.rank === 'champion';
    const isLegend = it.rank === 'legend';
    if (isTop1) li.classList.add('top1');
    if (it.id === hlId) li.classList.add('me');
    const d = new Date(it.date), ds = isNaN(d) ? '' : ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2);
    const posTxt = isTop1 ? '🏆 #1' : '#' + (i + 1);
    const rkLabel = isChamp && isTop1
      ? '🏆 ECO CHAMPION • 2 STICKER'
      : isChamp
        ? '🏆 ECO CHAMPION'
        : isLegend
          ? '🟢 ECO LEGEND'
          : rankName(it.rank);
    [
      ['n', posTxt],
      ['nm', it.name],
      ['sc', fmt(it.score)],
      ['ds', km(it.distance || 0) + ' KM ' + ds],
      ['rk' + (isChamp ? ' chp' : isLegend ? ' leg' : ''), rkLabel]
    ].forEach(([c, t]) => {
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
  const cta = $('o-cta');
  const claim = $('o-claim');
  claim.hidden = true;
  claim.disabled = false;
  claim.textContent = 'CLAIM REWARD';

  const isChamp = st.rank.id === 'champion';
  const legScore = C.REWARDS.legend.minScore;
  const chpScore = C.REWARDS.champion.minScore;

  if (st.state === 'available') {
    if (isChamp) {
      el.innerHTML =
        '<div class="rw-unlock champion">' +
        '<b>🏆 ECO CHAMPION!</b>' +
        '<span>2 STICKER UNLOCKED</span>' +
        '</div>';
      cta.innerHTML = '👑 <b>ECO CHAMPION!</b> KAMU BERHASIL MERAIH <b>2 STICKER!</b>';
    } else {
      const toChamp = Math.max(0, chpScore - res.score);
      el.innerHTML =
        '<div class="rw-unlock legend">' +
        '<b>🎁 ECO LEGEND!</b>' +
        '<span>1 STICKER UNLOCKED</span>' +
        '</div>';
      cta.innerHTML = toChamp > 0
        ? '🏆 ' + fmt(toChamp) + ' POIN MENUJU ECO CHAMPION &rarr; <b>2 STICKER</b>'
        : '🏆 TINGGAL SEDIKIT LAGI &mdash; KEJAR <b>ECO CHAMPION!</b>';
    }
    claim.hidden = false;
  } else if (st.state === 'soldout') {
    el.classList.add('out');
    el.innerHTML = '<b>STOK HABIS</b> &bull; ' + st.prize;
    cta.innerHTML = res.position === 1 ? '👑 PERTAHANKAN POSISI <b>#1 LEADERBOARD!</b>' : '🔥 <b>CAN YOU BE #1?</b> NAIKKAN SKORMU!';
    claim.hidden = false;
    claim.disabled = true;
    claim.textContent = 'STOK HABIS';
  } else if (st.state === 'claimed') {
    el.innerHTML = '<b>REWARD CLAIMED!</b> &bull; KODE <b>' + st.code + '</b>';
    cta.innerHTML = isChamp
      ? '👑 <b>ECO CHAMPION!</b> KAMU BERHASIL MERAIH <b>2 STICKER!</b>'
      : '🏆 TINGGAL SEDIKIT LAGI &mdash; KEJAR <b>ECO CHAMPION &rarr; 2 STICKER</b>';
    claim.hidden = false;
    claim.disabled = true;
    claim.textContent = 'REWARD CLAIMED!';
  } else {
    const needLeg = Math.max(0, legScore - res.score);
    el.innerHTML = '<div class="o-prog"><b>' + fmt(needLeg) + ' POIN</b> MENUJU ECO LEGEND</div>';
    const pool = res.position === 1 ? OVER_CTAS_BELOW_LEGEND.slice(0, 2) : OVER_CTAS_BELOW_LEGEND;
    cta.innerHTML = pool[ctaIdx % pool.length];
    ctaIdx++;
  }
  return st;
}

function showOver(res, animate = true) {
  $('o-name').textContent = res.name;
  $('o-dist').textContent = km(res.meters) + ' KM';
  $('o-plastic').textContent = String(res.plastic);
  $('o-combo').textContent = 'x' + (res.maxLevel + 1);
  $('o-rank-name').textContent = res.rank.id === 'champion' ? '🏆 ECO CHAMPION' : res.rank.id === 'legend' ? '🎁 ECO LEGEND' : res.rank.name;
  $('o-rank-pos').textContent = res.position ? '#' + res.position + ' LEADERBOARD' : 'TOP 10 MENUNGGU';
  const rk = $('o-rank'); rk.classList.remove('show'); void rk.offsetWidth;
  rewardLine(res);
  $('o-reward').style.visibility = 'hidden';
  $('o-cta').style.visibility = 'hidden';
  show('over');
  countUp($('o-score'), res.score, animate ? 1000 : 0, () => {
    rk.classList.add('show');
    $('o-reward').style.visibility = 'visible';
    $('o-cta').style.visibility = 'visible';
    if (animate && res.isTop1) setTimeout(champ, 700);
  });
}
function champ() {
  show('champ'); Sound.highScore(); runConfetti($('confetti'));
}

function showClaim(info, res) {
  const isChamp = info.rank.id === 'champion';
  const card = $('c-card');
  card.className = 'card narrow ticket tier-' + info.rank.id;
  const badge = $('c-badge');
  badge.className = 'c-badge ' + (isChamp ? 'utama' : 'limited');
  badge.textContent = info.badge || (isChamp ? '2 STICKER' : '1 STICKER');
  $('c-title').textContent = 'REWARD CLAIMED!';
  $('c-rank').textContent = isChamp ? '🏆 ECO CHAMPION' : '🎁 ECO LEGEND';
  $('c-score').textContent = fmt(res.score);
  $('c-prize').textContent = info.fullPrize || info.prize;
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

let pendingAdminAction = null;

function badgeClass(id) {
  if (id === 'champion') return 'utama';
  if (id === 'legend') return 'limited';
  return 'spesial';
}

function fmtTime(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return '';
  return ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
}

function setAdminTab(tab) {
  const isManual = tab === 'manual';
  $('adm-view-stock').hidden = isManual;
  $('adm-view-manual').hidden = !isManual;
  $('adm-tab-stock').classList.toggle('active', !isManual);
  $('adm-tab-manual').classList.toggle('active', isManual);
  $('adm-reset').hidden = isManual;
  $('adm-reset-claims').hidden = isManual;
  $('adm-clear').hidden = isManual;
  if (isManual) hideAdminConfirm();
}

function renderManualCommands() {
  const box = $('adm-cmds');
  if (box.childElementCount > 0) return;
  for (const item of MANUAL_COMMANDS) {
    const row = document.createElement('div');
    row.className = 'cmd-row' + (item.warn ? ' warn' : '');
    const left = document.createElement('div');
    const code = document.createElement('code');
    code.textContent = item.cmd;
    const desc = document.createElement('small');
    desc.textContent = item.desc;
    left.appendChild(code); left.appendChild(desc);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'cmd-copy';
    btn.textContent = 'SALIN';
    btn.onclick = () => {
      try { navigator.clipboard.writeText(item.cmd); } catch (e) { /* fallback */ }
      btn.textContent = 'TERSALIN';
      setTimeout(() => { btn.textContent = 'SALIN'; }, 1400);
    };
    row.appendChild(left); row.appendChild(btn);
    box.appendChild(row);
  }
}

function renderAdmin() {
  const t = $('adm-stock');
  t.innerHTML = '<tr><th>RANK</th><th>HADIAH</th><th style="text-align:right">SISA</th></tr>' +
    Reward.stockTable().map((r) => {
      const badge = r.badge ? '<span class="t-badge ' + badgeClass(r.id) + '">' + r.badge + '</span>' : '';
      const stockTxt = r.soldOut ? 'STOK HABIS' : (r.left + ' / ' + r.total);
      const ic = r.id === 'champion' ? '🏆 ' : '🟢 ';
      return '<tr class="tier-' + r.id + '">' +
        '<td>' + ic + r.name + '<span class="t-score">' + fmt(r.minScore) + '+ POIN</span></td>' +
        '<td class="prize-col">' + r.prize + badge + '</td>' +
        '<td class="n' + (r.soldOut ? ' z' : '') + '">' + stockTxt + '</td>' +
        '</tr>';
    }).join('');
  $('adm-claims').textContent = 'Total claim tercatat: ' + Reward.claimCount();
  const rec = Reward.recentClaims(3);
  $('adm-recent').innerHTML = rec.length
    ? rec.map((c) => '<span>' + c.name + ' &bull; ' + (c.rank || rankName(c.tier)) + ' &bull; ' + c.code + ' (' + fmtTime(c.date) + ')</span>').join('')
    : '<span>Belum ada klaim hadiah.</span>';
  renderManualCommands();
}

function askAdminConfirm(msg, cmd, fn) {
  pendingAdminAction = fn;
  $('adm-confirm-msg').textContent = msg + ' Pastikan Anda ingin melanjutkan sebelum menjalankannya.';
  $('adm-confirm-cmd').textContent = 'Terminal manual: ' + cmd;
  $('adm-confirm').hidden = false;
  $('adm-confirm-no').focus();
}

function hideAdminConfirm() {
  pendingAdminAction = null;
  $('adm-confirm').hidden = true;
}

function adminOpen() {
  hideAdminConfirm();
  $('adm-pin').hidden = false; $('adm-panel').hidden = true; $('adm-tabs').hidden = true;
  $('adm-err').hidden = true; $('adm-pin-in').value = '';
  $('adm-ok').hidden = false;
  $('adm-reset').hidden = true; $('adm-reset-claims').hidden = true; $('adm-clear').hidden = true;
  show('admin');
}
function adminTry() {
  if ($('adm-pin-in').value === C.ADMIN_PIN) {
    $('adm-pin').hidden = true; $('adm-panel').hidden = false; $('adm-tabs').hidden = false;
    $('adm-ok').hidden = true;
    setAdminTab('stock');
    renderAdmin();
    $('adm-back').focus();
  } else { $('adm-err').hidden = false; $('adm-pin-in').select(); }
}

/* ---------------- navigasi keyboard ---------------- */
function visibleButtons() {
  const scr = $('scr-' + cur); if (!scr) return [];
  return [...scr.querySelectorAll('.btn, .link')].filter((b) => !b.hidden && !b.disabled && b.offsetParent !== null);
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
  c('adm-back', () => { hideAdminConfirm(); show('set'); });
  c('adm-tab-stock', () => setAdminTab('stock'));
  c('adm-tab-manual', () => setAdminTab('manual'));
  c('adm-reset', () => askAdminConfirm('Aksi ini akan mereset seluruh sisa stok hadiah booth ke angka default.', 'npm run admin:reset-stock', () => { Reward.resetStock(); renderAdmin(); }));
  c('adm-reset-claims', () => askAdminConfirm('Aksi ini akan menghapus seluruh catatan riwayat klaim booth.', 'npm run admin:reset-claims', () => { Reward.resetClaims(); renderAdmin(); }));
  c('adm-clear', () => askAdminConfirm('Aksi ini akan menghapus seluruh skor di leaderboard booth.', 'npm run admin:reset-leaderboard', () => { Leaderboard.clear(); renderAdmin(); }));
  c('adm-confirm-yes', () => { const fn = pendingAdminAction; hideAdminConfirm(); if (fn) fn(); });
  c('adm-confirm-no', hideAdminConfirm);
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
