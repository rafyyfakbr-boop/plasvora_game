/* PLASVORA ECO RUNNER - sprites.js
   Semua gambar dibuat prosedural di canvas (tanpa file gambar): item, power-up, rintangan, robot. */
(function (W) {
  'use strict';
  var PER = W.PER = W.PER || {};
  var U = PER.U, CFG = PER.CFG;
  var TAU = Math.PI * 2;

  var COL = {
    neon: '#39ffa0', neon2: '#19d4ff', dark: '#06231c', mid: '#0c4a3a', gold: '#ffd23f',
    plastic: 'rgba(170,235,255,.85)', cap: '#ff7a2f', white: '#eafff6', danger: '#ff4d6d', pink: '#ff4fd8'
  };
  PER.COL = COL;

  /* ---------- definisi rintangan (dipakai logika dan gambar) ----------
     need: 'jump' atau 'slide'. y dihitung dari tanah: top = GROUND - h - lift. */
  var OBS = {
    bin:    { w: 70,  h: 78,  lift: 0,  need: 'jump',  name: 'Tempat sampah' },
    box:    { w: 96,  h: 92,  lift: 0,  need: 'jump',  name: 'Kardus besar' },
    pile:   { w: 130, h: 66,  lift: 0,  need: 'jump',  name: 'Tumpukan sampah' },
    fence:  { w: 56,  h: 104, lift: 0,  need: 'jump',  name: 'Pagar' },
    car:    { w: 170, h: 96,  lift: 0,  need: 'jump',  name: 'Mobil parkir' },
    barrier:{ w: 110, h: 70,  lift: 0,  need: 'jump',  name: 'Penghalang plastik' },
    stack:  { w: 100, h: 84,  lift: 0,  need: 'jump',  name: 'Material daur ulang' },
    hole:   { w: 150, h: 30,  lift: -14, need: 'jump', name: 'Lubang jalan', hazardOnly: true },
    pipe:   { w: 160, h: 52,  lift: 50, need: 'slide', name: 'Pipa rendah' }
  };
  var OBS_TOP = {}; // tinggi hitbox bagian atas pipa (menggantung)

  function glow(c, color, blur) { c.shadowColor = color; c.shadowBlur = blur; }
  function noGlow(c) { c.shadowBlur = 0; c.shadowColor = 'transparent'; }

  /* ---------- item sampah ---------- */
  var ITEM_KINDS = ['pet', 'hdpe', 'bag', 'cup', 'pack'];

  function drawItemShape(c, kind, gold) {
    var tint = gold ? '#fff0a0' : COL.plastic;
    c.lineJoin = 'round'; c.lineWidth = 2.5; c.strokeStyle = gold ? '#8a5a00' : '#0b3b4a';
    if (kind === 'pet') {
      c.fillStyle = tint;
      c.beginPath(); c.moveTo(-5, -22); c.lineTo(5, -22); c.lineTo(5, -15); c.quadraticCurveTo(13, -9, 13, -2);
      c.lineTo(13, 18); c.quadraticCurveTo(13, 22, 9, 22); c.lineTo(-9, 22); c.quadraticCurveTo(-13, 22, -13, 18);
      c.lineTo(-13, -2); c.quadraticCurveTo(-13, -9, -5, -15); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = COL.cap; c.fillRect(-5, -26, 10, 5);
      c.fillStyle = gold ? '#ff9d00' : '#1fbf7a'; c.fillRect(-13, 2, 26, 11);
    } else if (kind === 'hdpe') {
      c.fillStyle = gold ? '#ffe066' : '#f4f8ff';
      c.beginPath(); c.moveTo(-12, -14); c.lineTo(4, -14); c.lineTo(12, -6); c.lineTo(12, 20); c.quadraticCurveTo(12, 23, 9, 23);
      c.lineTo(-9, 23); c.quadraticCurveTo(-12, 23, -12, 20); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = '#2b7bff'; c.fillRect(-7, -22, 9, 8); c.strokeRect(-7, -22, 9, 8);
      c.fillStyle = '#2b7bff'; c.fillRect(-12, 3, 24, 10);
    } else if (kind === 'bag') {
      c.fillStyle = gold ? '#fff0a0' : 'rgba(255,255,255,.92)';
      c.beginPath(); c.moveTo(-14, -10); c.lineTo(14, -10); c.lineTo(17, 22); c.lineTo(-17, 22); c.closePath(); c.fill(); c.stroke();
      c.beginPath(); c.arc(-7, -10, 7, Math.PI, 0); c.stroke(); c.beginPath(); c.arc(7, -10, 7, Math.PI, 0); c.stroke();
      c.fillStyle = '#ff5a8a'; c.fillRect(-9, 2, 18, 8);
    } else if (kind === 'cup') {
      c.fillStyle = tint;
      c.beginPath(); c.moveTo(-14, -14); c.lineTo(14, -14); c.lineTo(10, 22); c.lineTo(-10, 22); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = '#ff8a3d'; c.fillRect(-11.5, 0, 23, 8);
      c.fillStyle = 'rgba(255,255,255,.95)'; U.rr(c, -16, -19, 32, 6, 3); c.fill(); c.stroke();
      c.strokeStyle = '#0b3b4a'; c.beginPath(); c.moveTo(3, -19); c.lineTo(9, -30); c.stroke();
    } else { // pack: kemasan sachet/pouch
      c.fillStyle = gold ? '#ffe066' : '#7ee0ff';
      c.beginPath(); c.moveTo(-14, -20); c.lineTo(14, -20); c.lineTo(11, 22); c.lineTo(-11, 22); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = '#fff'; c.fillRect(-14, -20, 28, 5); c.fillRect(-11, 18, 22, 4);
      c.fillStyle = '#ff4fd8'; c.beginPath(); c.arc(0, 0, 7, 0, TAU); c.fill();
    }
  }

  function drawItem(c, it, t) {
    var bob = Math.sin(t * 5 + it.ph) * 5;
    var s = it.tier === 'gold' ? 1.25 : 1;
    c.save();
    c.translate(it.x + it.w / 2, it.y + it.h / 2 + bob);
    if (it.tier !== 'common') {
      var gc = it.tier === 'gold' ? COL.gold : COL.neon2;
      glow(c, gc, 20 + Math.sin(t * 8 + it.ph) * 6);
      c.strokeStyle = gc; c.lineWidth = 3; c.globalAlpha = 0.85;
      c.beginPath(); c.arc(0, 0, 31 * s, 0, TAU); c.stroke();
      c.globalAlpha = 1;
    }
    c.rotate(Math.sin(t * 3 + it.ph) * 0.14);
    c.scale(s, s);
    if (it.tier === 'common') glow(c, 'rgba(57,255,160,.55)', 8);
    drawItemShape(c, it.kind, it.tier === 'gold');
    noGlow(c);
    if (it.tier !== 'common') { // kilau
      var k = (t * 2 + it.ph) % 1;
      c.fillStyle = 'rgba(255,255,255,' + (1 - k) + ')';
      c.beginPath(); c.arc(-9 + k * 18, -12 + k * 10, 3.5 * (1 - k) + 1, 0, TAU); c.fill();
    }
    c.restore();
  }

  /* ---------- power-up ---------- */
  var POWER = {
    boost:  { color: '#ffe14a', label: '2X' },
    magnet: { color: '#ff4fd8', label: '' },
    shield: { color: '#27e4ff', label: '' },
    speed:  { color: '#ff7a2f', label: '' }
  };
  PER.POWER_INFO = POWER;

  function drawPowerGlyph(c, type) {
    c.lineJoin = 'round'; c.lineCap = 'round';
    if (type === 'boost') {
      c.fillStyle = '#fff'; c.beginPath(); c.moveTo(3, -14); c.lineTo(-9, 3); c.lineTo(-1, 3); c.lineTo(-4, 15); c.lineTo(10, -4); c.lineTo(2, -4); c.closePath(); c.fill();
    } else if (type === 'magnet') {
      c.lineWidth = 7; c.strokeStyle = '#fff'; c.beginPath(); c.arc(0, 1, 10, Math.PI, 0); c.lineTo(10, 12); c.moveTo(-10, 1); c.lineTo(-10, 12); c.stroke();
      c.fillStyle = '#ff4d6d'; c.fillRect(-13.5, 10, 7, 5); c.fillRect(6.5, 10, 7, 5);
    } else if (type === 'shield') {
      c.fillStyle = '#fff'; c.beginPath(); c.moveTo(0, -15); c.lineTo(13, -9); c.lineTo(11, 7); c.quadraticCurveTo(7, 14, 0, 17); c.quadraticCurveTo(-7, 14, -11, 7); c.lineTo(-13, -9); c.closePath(); c.fill();
      c.strokeStyle = '#0a5d78'; c.lineWidth = 3; c.beginPath(); c.moveTo(-5, 1); c.lineTo(-1, 6); c.lineTo(7, -5); c.stroke();
    } else {
      c.fillStyle = '#fff';
      for (var i = 0; i < 2; i++) { c.beginPath(); c.moveTo(-12 + i * 10, -11); c.lineTo(-2 + i * 10, 0); c.lineTo(-12 + i * 10, 11); c.lineTo(-7 + i * 10, 11); c.lineTo(3 + i * 10, 0); c.lineTo(-7 + i * 10, -11); c.closePath(); c.fill(); }
    }
  }

  function drawPower(c, it, t) {
    var info = POWER[it.type], bob = Math.sin(t * 4 + it.ph) * 6;
    c.save(); c.translate(it.x + it.w / 2, it.y + it.h / 2 + bob);
    glow(c, info.color, 26);
    c.fillStyle = info.color; c.globalAlpha = 0.28; c.beginPath(); c.arc(0, 0, 34, 0, TAU); c.fill(); c.globalAlpha = 1;
    c.fillStyle = COL.dark; c.strokeStyle = info.color; c.lineWidth = 4;
    c.beginPath(); c.arc(0, 0, 26, 0, TAU); c.fill(); c.stroke();
    noGlow(c);
    c.save(); c.rotate(Math.sin(t * 3 + it.ph) * 0.12); c.scale(0.95, 0.95);
    c.shadowColor = info.color; c.shadowBlur = 8; drawPowerGlyph(c, it.type); c.restore();
    // orbit
    c.fillStyle = '#fff'; var a = t * 3 + it.ph;
    c.beginPath(); c.arc(Math.cos(a) * 34, Math.sin(a) * 34, 3, 0, TAU); c.fill();
    c.restore();
  }

  /* ---------- rintangan ---------- */
  function drawObstacle(c, o, t) {
    var d = OBS[o.type], x = o.x, w = o.w, h = o.h, g = CFG.GROUND, y = o.y;
    c.save(); c.lineJoin = 'round'; c.lineWidth = 3; c.strokeStyle = '#04130f';
    var tp = o.type;
    if (tp === 'bin') {
      c.fillStyle = '#3c7c9c'; c.beginPath(); c.moveTo(x + 6, y + 10); c.lineTo(x + w - 6, y + 10); c.lineTo(x + w - 12, y + h); c.lineTo(x + 12, y + h); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = '#2c6482'; c.save(); c.translate(x + w / 2, y + 10); c.rotate(-0.28); U.rr(c, -w / 2 - 2, -14, w + 4, 12, 4); c.fill(); c.stroke(); c.restore();
      c.strokeStyle = 'rgba(0,0,0,.35)'; c.lineWidth = 3; for (var i = 1; i < 4; i++) { c.beginPath(); c.moveTo(x + 6 + i * (w - 12) / 4, y + 22); c.lineTo(x + 10 + i * (w - 20) / 4, y + h - 8); c.stroke(); }
      c.fillStyle = COL.neon; c.font = '900 20px Arial'; c.textAlign = 'center'; c.fillText('♻', x + w / 2, y + h - 22);
    } else if (tp === 'box') {
      c.fillStyle = '#b98652'; U.rr(c, x, y, w, h, 5); c.fill(); c.stroke();
      c.fillStyle = '#d3a56c'; c.fillRect(x + 4, y + 4, w - 8, 14);
      c.fillStyle = '#e8d6a8'; c.fillRect(x + w / 2 - 9, y, 18, h); c.strokeRect(x + w / 2 - 9, y, 18, h);
      c.fillStyle = '#6b4a22'; c.font = '900 13px Arial'; c.textAlign = 'center'; c.fillText('FRAGILE', x + w / 2 - 28, y + h - 14);
    } else if (tp === 'pile') {
      var r = U.seeded(o.seed || 7);
      for (var j = 0; j < 14; j++) {
        var px = x + 14 + r() * (w - 28), py = y + h - 16 - r() * (h - 30) * (1 - Math.abs(px - (x + w / 2)) / w * 1.4);
        c.fillStyle = ['#7ec8e3', '#ffffff', '#ffb36b', '#8ee3a1', '#c9a0ff', '#b98652'][j % 6];
        c.save(); c.translate(px, py); c.rotate(r() * 3); U.rr(c, -14, -9, 28, 18, 6); c.fill(); c.lineWidth = 2; c.stroke(); c.restore();
      }
    } else if (tp === 'fence') {
      c.fillStyle = '#d8dfe4';
      for (var k = 0; k < 2; k++) { U.rr(c, x + k * (w - 16), y, 16, h, 3); c.fill(); c.stroke(); }
      c.fillStyle = '#ff9d2e'; c.fillRect(x - 4, y + 12, w + 8, 16); c.strokeRect(x - 4, y + 12, w + 8, 16);
      c.fillRect(x - 4, y + 50, w + 8, 16); c.strokeRect(x - 4, y + 50, w + 8, 16);
      c.fillStyle = '#04130f'; for (var s = 0; s < 3; s++) { c.beginPath(); c.moveTo(x + s * 18, y + 12); c.lineTo(x + s * 18 + 9, y + 12); c.lineTo(x + s * 18 + 1, y + 28); c.lineTo(x + s * 18 - 8, y + 28); c.closePath(); c.fill(); }
    } else if (tp === 'car') {
      c.fillStyle = '#7a5ad8'; U.rr(c, x, y + 38, w, h - 38, 14); c.fill(); c.stroke();
      c.beginPath(); c.moveTo(x + 34, y + 40); c.lineTo(x + 58, y + 8); c.lineTo(x + w - 52, y + 8); c.lineTo(x + w - 26, y + 40); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = '#bfefff'; c.beginPath(); c.moveTo(x + 48, y + 38); c.lineTo(x + 64, y + 16); c.lineTo(x + w / 2, y + 16); c.lineTo(x + w / 2, y + 38); c.closePath(); c.fill(); c.stroke();
      c.beginPath(); c.moveTo(x + w / 2 + 8, y + 38); c.lineTo(x + w / 2 + 8, y + 16); c.lineTo(x + w - 58, y + 16); c.lineTo(x + w - 36, y + 38); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = '#ffe14a'; c.fillRect(x + w - 10, y + 52, 10, 14);
      c.fillStyle = '#111'; [x + 40, x + w - 42].forEach(function (wx) { c.beginPath(); c.arc(wx, y + h - 6, 17, 0, TAU); c.fill(); c.stroke(); c.fillStyle = '#9aa7b0'; c.beginPath(); c.arc(wx, y + h - 6, 7, 0, TAU); c.fill(); c.fillStyle = '#111'; });
    } else if (tp === 'barrier') {
      c.fillStyle = '#ff5a3c'; U.rr(c, x, y + 8, w, h - 8, 10); c.fill(); c.stroke();
      c.save(); c.beginPath(); U.rr(c, x, y + 8, w, h - 8, 10); c.clip(); c.fillStyle = '#fff';
      for (var b = -1; b < 6; b++) { c.beginPath(); c.moveTo(x + b * 26, y + 8); c.lineTo(x + b * 26 + 14, y + 8); c.lineTo(x + b * 26 + 36, y + h); c.lineTo(x + b * 26 + 22, y + h); c.closePath(); c.fill(); }
      c.restore(); c.strokeStyle = '#04130f'; U.rr(c, x, y + 8, w, h - 8, 10); c.stroke();
      c.fillStyle = '#ffe14a'; c.beginPath(); c.arc(x + 14, y + 8, 7, 0, TAU); c.fill(); c.stroke();
    } else if (tp === 'stack') {
      var cols = ['#31c48d', '#2aa4d8', '#f2b233'];
      for (var n = 0; n < 3; n++) { c.fillStyle = cols[n]; U.rr(c, x + (n % 2) * 6, y + h - 28 * (n + 1), w - 6, 28, 6); c.fill(); c.stroke(); c.fillStyle = 'rgba(255,255,255,.85)'; c.font = '900 17px Arial'; c.textAlign = 'center'; c.fillText('♻', x + w / 2 - 3 + (n % 2) * 6, y + h - 28 * n - 8); }
    } else if (tp === 'hole') {
      c.fillStyle = '#02100b'; c.beginPath(); c.moveTo(x, g - 2); c.lineTo(x + w, g - 2); c.lineTo(x + w - 16, g + 40); c.lineTo(x + 16, g + 40); c.closePath(); c.fill();
      c.strokeStyle = COL.danger; c.lineWidth = 4; glow(c, COL.danger, 14);
      c.beginPath(); c.moveTo(x, g - 3); c.lineTo(x + w, g - 3); c.stroke(); noGlow(c);
      c.fillStyle = '#ffb02e'; c.fillRect(x - 6, g - 34, 6, 32); c.fillRect(x + w, g - 34, 6, 32);
      c.fillStyle = '#ff3b3b'; c.beginPath(); c.arc(x - 3, g - 38, 6 + Math.sin(t * 10) * 1.5, 0, TAU); c.fill(); c.beginPath(); c.arc(x + w + 3, g - 38, 6 + Math.cos(t * 10) * 1.5, 0, TAU); c.fill();
    } else if (tp === 'pipe') {
      // pipa menggantung: bagian bawah di y + h, dengan tiang penyangga ke atas
      c.fillStyle = '#6f7f8c'; c.fillRect(x + 12, 0, 14, y); c.fillRect(x + w - 26, 0, 14, y);
      c.fillStyle = '#9fb2c0'; U.rr(c, x, y - 4, w, h + 4, 20); c.fill(); c.stroke();
      c.fillStyle = 'rgba(255,255,255,.35)'; c.fillRect(x + 12, y + 4, w - 24, 8);
      c.fillStyle = COL.danger; c.fillRect(x + 28, y - 4, 12, h + 4); c.fillRect(x + w - 40, y - 4, 12, h + 4);
      c.fillStyle = '#ffe14a'; c.font = '900 15px Arial'; c.textAlign = 'center'; c.fillText('▼ SLIDE ▼', x + w / 2, y + h - 18);
    }
    c.restore();
  }

  /* ---------- robot Plasvora ----------
     state: run | jump | fall | slide | hit | collect | idle. (x,y) = tengah kaki bawah. */
  function drawRobot(c, x, y, state, t, o) {
    o = o || {};
    var sl = state === 'slide', hit = state === 'hit', col = state === 'collect';
    var run = state === 'run', air = state === 'jump' || state === 'fall';
    var ph = t * 14;
    c.save(); c.translate(x, y); c.lineJoin = 'round'; c.lineCap = 'round';

    if (o.blink && Math.floor(t * 18) % 2 === 0) c.globalAlpha = 0.35;

    // bayangan (di tanah saja)
    if (!o.noShadow) {
      c.save(); c.setTransform(1, 0, 0, 1, 0, 0); c.restore();
    }

    if (sl) { c.translate(-4, 0); c.rotate(-0.06); }
    var bodyW = sl ? 74 : 52, bodyH = sl ? 34 : 50;
    var squash = col ? 1.07 : 1, bob = run ? Math.abs(Math.sin(ph)) * 4 : 0;
    var legY = -bodyH - 6 - bob;
    var bodyTop = sl ? -44 : -88 - bob;

    // aura
    if (o.boost) { glow(c, COL.gold, 28); } else if (o.speed) { glow(c, '#ff7a2f', 28); } else if (o.magnet) { glow(c, COL.pink, 20); }

    // kaki / roda
    c.strokeStyle = '#04130f'; c.lineWidth = 3;
    var l1 = run ? Math.sin(ph) * 13 : air ? (state === 'jump' ? -6 : 8) : 0;
    var l2 = run ? -Math.sin(ph) * 13 : air ? (state === 'jump' ? 6 : -4) : 0;
    if (!sl) {
      [[-12, l1], [12, l2]].forEach(function (L) {
        c.fillStyle = '#17302a'; U.rr(c, L[0] - 6 + L[1] * 0.3, -22 - bob * 0.4, 12, 16, 4); c.fill(); c.stroke();
        c.fillStyle = COL.neon; U.rr(c, L[0] - 9 + L[1] * 0.5, -9 - (air ? 4 : 0), 18, 9, 4); c.fill(); c.stroke();
      });
    } else {
      c.fillStyle = COL.neon; U.rr(c, -34, -10, 24, 10, 5); c.fill(); c.stroke(); U.rr(c, 14, -10, 24, 10, 5); c.fill(); c.stroke();
      // garis kecepatan saat slide
      c.strokeStyle = 'rgba(180,255,230,.5)'; c.lineWidth = 3;
      for (var s = 0; s < 3; s++) { c.beginPath(); c.moveTo(-40 - s * 14, -8 - s * 7); c.lineTo(-62 - s * 14, -8 - s * 7); c.stroke(); }
      c.strokeStyle = '#04130f';
    }

    // tubuh tong sampah
    c.save();
    if (!sl) c.translate(0, -bob);
    c.scale(squash, 2 - squash);
    var by = sl ? -44 : -80, bh = sl ? 34 : 56;
    var shake = hit ? Math.sin(t * 60) * 3 : 0;
    c.translate(shake, 0);
    c.fillStyle = hit ? '#ff6a6a' : '#1fbf7a';
    c.beginPath(); c.moveTo(-bodyW / 2 + 4, by); c.lineTo(bodyW / 2 - 4, by); c.lineTo(bodyW / 2 - (sl ? 2 : 8), by + bh); c.lineTo(-bodyW / 2 + (sl ? 2 : 8), by + bh); c.closePath(); c.fill(); c.stroke();
    c.fillStyle = hit ? '#d94b4b' : '#15955f';
    for (var r = 1; r < 3; r++) { c.fillRect(-bodyW / 2 + 12 + r * (bodyW - 24) / 3 - 2, by + 8, 4, bh - 14); }
    // lambang daur ulang
    if (!sl) { c.fillStyle = '#eafff6'; c.font = '900 22px Arial'; c.textAlign = 'center'; c.fillText('♻', 0, by + 34); }
    // tutup (kepala)
    var hy = sl ? by - 14 : by - 20;
    c.fillStyle = hit ? '#e04f4f' : '#0f6b48'; c.save(); c.translate(sl ? 20 : 0, hy + 8); c.rotate(sl ? 0.05 : Math.sin(ph * 0.5) * (run ? 0.04 : 0));
    U.rr(c, -(sl ? 22 : 31), -8, sl ? 44 : 62, 22, 9); c.fill(); c.stroke();
    // visor mata
    c.fillStyle = '#021a12'; U.rr(c, -(sl ? 16 : 24), -3, sl ? 34 : 48, 13, 6); c.fill();
    var eye = hit ? COL.danger : col ? COL.gold : COL.neon2;
    glow(c, eye, 10); c.fillStyle = eye;
    if (hit) { c.font = '900 12px Arial'; c.textAlign = 'center'; c.fillText('X  X', sl ? 1 : 0, 8); }
    else if (col) { c.beginPath(); c.arc(sl ? -4 : -9, 3.5, 3.5, 0, TAU); c.fill(); c.beginPath(); c.arc(sl ? 8 : 9, 3.5, 3.5, 0, TAU); c.fill(); c.fillRect(-4, 6, 8, 2); }
    else { var bl = (Math.floor(t * 1.7) % 5 === 0 && (t * 1.7) % 1 < 0.12) ? 1 : 5; c.fillRect(sl ? -9 : -14, 4 - bl / 2 + 2, 9, bl); c.fillRect(sl ? 3 : 5, 4 - bl / 2 + 2, 9, bl); }
    noGlow(c);
    // antena
    c.strokeStyle = '#04130f'; c.lineWidth = 3; c.beginPath(); c.moveTo(sl ? -10 : 0, -8); c.lineTo(sl ? -14 : 4, -18); c.stroke();
    c.fillStyle = o.shield ? COL.neon2 : COL.pink; c.beginPath(); c.arc(sl ? -14 : 4, -20, 4, 0, TAU); c.fill();
    c.restore();
    c.restore();

    // lengan
    if (!sl) {
      var ay = -66 - bob, sw = run ? Math.sin(ph) * 0.9 : air ? -1.2 : 0.2;
      c.strokeStyle = '#04130f'; c.lineWidth = 9; c.beginPath(); c.moveTo(-26, ay); c.lineTo(-26 - Math.cos(sw) * 10, ay + 8 + Math.sin(sw) * 12); c.stroke();
      c.strokeStyle = '#17302a'; c.lineWidth = 5; c.beginPath(); c.moveTo(-26, ay); c.lineTo(-26 - Math.cos(sw) * 10, ay + 8 + Math.sin(sw) * 12); c.stroke();
      c.strokeStyle = '#04130f'; c.lineWidth = 9; c.beginPath(); c.moveTo(26, ay); c.lineTo(26 + Math.cos(sw) * 10, ay + 8 - Math.sin(sw) * 12); c.stroke();
      c.strokeStyle = '#17302a'; c.lineWidth = 5; c.beginPath(); c.moveTo(26, ay); c.lineTo(26 + Math.cos(sw) * 10, ay + 8 - Math.sin(sw) * 12); c.stroke();
    }
    noGlow(c);

    // perisai
    if (o.shield) {
      c.strokeStyle = COL.neon2; c.fillStyle = 'rgba(39,228,255,.14)'; c.lineWidth = 4;
      glow(c, COL.neon2, 18);
      c.beginPath(); c.ellipse(0, sl ? -26 : -50, sl ? 52 : 46, sl ? 34 : 62, 0, 0, TAU); c.fill(); c.stroke(); noGlow(c);
    }
    c.restore();
  }

  PER.Sprites = {
    OBS: OBS, ITEM_KINDS: ITEM_KINDS, POWER: POWER,
    drawItem: drawItem, drawPower: drawPower, drawObstacle: drawObstacle, drawRobot: drawRobot,
    drawItemIcon: function (c, kind, x, y, s, gold) { c.save(); c.translate(x, y); c.scale(s, s); drawItemShape(c, kind, gold); c.restore(); },
    drawPowerIcon: function (c, type, x, y, s) { c.save(); c.translate(x, y); c.scale(s, s); drawPowerGlyph(c, type); c.restore(); }
  };
})(window);
