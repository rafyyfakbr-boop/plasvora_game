/* PLASVORA ECO RUNNER - background.js
   Parallax 5 lapis: langit, skyline jauh, gedung tengah, dekorasi pinggir jalan, jalan.
   Tiap lapis digambar sekali ke kanvas offscreen lalu digulirkan. */
(function (W) {
  'use strict';
  var PER = W.PER = W.PER || {};
  var U = PER.U, CFG = PER.CFG, TAU = Math.PI * 2;
  var H = CFG.H, G = CFG.GROUND;

  var sky, far, mid, near, built = false;
  var TW = { far: 1600, mid: 1900, near: 1500 };

  function buildSky() {
    sky = U.canvas(CFG.W, H);
    var c = sky.getContext('2d'), r = U.seeded(11);
    var g = c.createLinearGradient(0, 0, 0, G);
    g.addColorStop(0, '#04121a'); g.addColorStop(0.55, '#0a3a40'); g.addColorStop(1, '#1b8a64');
    c.fillStyle = g; c.fillRect(0, 0, CFG.W, H);
    for (var i = 0; i < 90; i++) {
      c.fillStyle = 'rgba(255,255,255,' + (0.25 + r() * 0.6) + ')';
      var s = r() < 0.12 ? 2.4 : 1.3; c.fillRect(r() * CFG.W, r() * 300, s, s);
    }
    var rg = c.createRadialGradient(930, 250, 10, 930, 250, 230);
    rg.addColorStop(0, 'rgba(160,255,214,.95)'); rg.addColorStop(0.18, 'rgba(120,255,200,.55)'); rg.addColorStop(1, 'rgba(60,255,170,0)');
    c.fillStyle = rg; c.fillRect(600, 0, 700, 520);
    c.fillStyle = '#d9fff0'; c.beginPath(); c.arc(930, 250, 44, 0, TAU); c.fill();
    c.fillStyle = 'rgba(120,200,170,.45)'; c.beginPath(); c.arc(915, 238, 10, 0, TAU); c.arc(945, 266, 7, 0, TAU); c.fill();
  }

  function buildings(c, w, base, minH, maxH, minW, maxW, fill, win, seed, neon) {
    var r = U.seeded(seed), x = -10;
    while (x < w) {
      var bw = minW + r() * (maxW - minW), bh = minH + r() * (maxH - minH);
      c.fillStyle = fill; c.fillRect(x, base - bh, bw, bh);
      if (neon) { c.fillStyle = neon; c.globalAlpha = 0.65; c.fillRect(x, base - bh, bw, 3); c.globalAlpha = 1; }
      for (var wy = base - bh + 14; wy < base - 12; wy += 20) {
        for (var wx = x + 8; wx < x + bw - 10; wx += 16) {
          if (r() < 0.38) { c.fillStyle = win[Math.floor(r() * win.length)]; c.fillRect(wx, wy, 8, 10); }
        }
      }
      if (r() < 0.35) { c.fillStyle = fill; c.fillRect(x + bw / 2 - 2, base - bh - 22, 4, 22); }
      x += bw + 2 + r() * 10;
    }
  }

  function buildFar() {
    far = U.canvas(TW.far, H);
    var c = far.getContext('2d');
    buildings(c, TW.far, G - 40, 90, 250, 50, 110, 'rgba(8,52,56,.92)', ['rgba(120,255,210,.35)', 'rgba(60,200,255,.3)'], 31, '#2fe9c0');
  }

  function sign(c, x, y, w, h, title, sub, col) {
    c.fillStyle = '#031712'; U.rr(c, x, y, w, h, 8); c.fill();
    c.strokeStyle = col; c.lineWidth = 3; c.shadowColor = col; c.shadowBlur = 12; U.rr(c, x, y, w, h, 8); c.stroke(); c.shadowBlur = 0;
    c.fillStyle = col; c.textAlign = 'center'; c.font = '900 ' + Math.round(h * 0.42) + 'px "Arial Black", Impact, sans-serif';
    c.fillText(title, x + w / 2, y + h * (sub ? 0.5 : 0.64));
    if (sub) { c.fillStyle = '#d9fff0'; c.font = '700 ' + Math.round(h * 0.2) + 'px Arial, sans-serif'; c.fillText(sub, x + w / 2, y + h * 0.82); }
  }

  function buildMid() {
    mid = U.canvas(TW.mid, H);
    var c = mid.getContext('2d');
    buildings(c, TW.mid, G - 10, 110, 300, 90, 170, '#0b3a35', ['rgba(255,235,120,.8)', 'rgba(150,255,220,.7)', 'rgba(110,210,255,.7)'], 47, '#39ffa0');
    // papan reklame besar bertema Plasvora (satu per tile)
    c.fillStyle = '#052520'; c.fillRect(420, G - 340, 10, 330); c.fillRect(640, G - 340, 10, 330);
    sign(c, 380, G - 410, 310, 96, 'PLASVORA', 'Recycle • Reuse • Reimagine', '#39ffa0');
    c.fillStyle = '#052520'; c.fillRect(1300, G - 250, 8, 240); c.fillRect(1470, G - 250, 8, 240);
    sign(c, 1260, G - 310, 260, 74, 'PILAH', 'Plastik jadi peluang baru', '#19d4ff');
  }

  function tree(c, x, base, s, r) {
    c.fillStyle = '#3b2a1c'; c.fillRect(x - 4 * s, base - 62 * s, 8 * s, 62 * s);
    for (var i = 0; i < 4; i++) {
      c.fillStyle = ['#1a8f55', '#22b36a', '#14794a', '#2ed17f'][i];
      c.beginPath(); c.arc(x + (r() * 40 - 20) * s, base - (70 + r() * 36) * s, (22 + r() * 12) * s, 0, TAU); c.fill();
    }
  }
  function binDeco(c, x, base, col) {
    c.fillStyle = col; c.beginPath(); c.moveTo(x - 17, base - 46); c.lineTo(x + 17, base - 46); c.lineTo(x + 14, base); c.lineTo(x - 14, base); c.closePath(); c.fill();
    c.fillStyle = 'rgba(0,0,0,.28)'; c.fillRect(x - 19, base - 54, 38, 9);
    c.fillStyle = '#eafff6'; c.font = '900 16px Arial'; c.textAlign = 'center'; c.fillText('♻', x, base - 14);
  }
  function trashDeco(c, x, base, r) {
    for (var i = 0; i < 5; i++) {
      c.fillStyle = ['rgba(200,240,255,.9)', '#ffffff', '#ffb36b', '#8ee3a1'][i % 4];
      c.save(); c.translate(x + (r() * 50 - 25), base - 6 - r() * 10); c.rotate(r() * 3); U.rr(c, -9, -5, 18, 10, 4); c.fill(); c.restore();
    }
  }
  function lamp(c, x, base) {
    c.fillStyle = '#12403a'; c.fillRect(x - 3, base - 170, 6, 170); c.fillRect(x - 3, base - 172, 30, 6);
    c.fillStyle = '#d6fff0'; c.shadowColor = '#7dffd0'; c.shadowBlur = 24; c.beginPath(); c.arc(x + 24, base - 160, 7, 0, TAU); c.fill(); c.shadowBlur = 0;
  }

  function buildNear() {
    near = U.canvas(TW.near, H);
    var c = near.getContext('2d'), r = U.seeded(93), base = G - 28;
    // trotoar
    c.fillStyle = '#1f6b5b'; c.fillRect(0, base, TW.near, 38);
    c.fillStyle = '#2a8a74'; c.fillRect(0, base, TW.near, 5);
    c.fillStyle = 'rgba(0,0,0,.2)'; for (var x = 0; x < TW.near; x += 120) c.fillRect(x, base + 5, 3, 33);
    lamp(c, 120, base); lamp(c, 880, base);
    tree(c, 330, base, 1, r); tree(c, 1180, base, 1.15, r);
    binDeco(c, 520, base, '#2f8de0'); binDeco(c, 560, base, '#e0b52f'); binDeco(c, 600, base, '#2fb36a');
    trashDeco(c, 760, base + 14, r); trashDeco(c, 1050, base + 16, r); trashDeco(c, 1400, base + 14, r);
    sign(c, 650, base - 108, 190, 62, 'ECO CITY', '', '#ff4fd8');
    c.fillStyle = '#12403a'; c.fillRect(712, base - 46, 6, 46); c.fillRect(772, base - 46, 6, 46);
    sign(c, 1260, base - 100, 200, 56, 'BUANG SAMPAH', '', '#ffd23f');
    c.fillStyle = '#12403a'; c.fillRect(1328, base - 44, 6, 44); c.fillRect(1388, base - 44, 6, 44);
    // semak kecil
    for (var i = 0; i < 6; i++) {
      var bx = 70 + i * 250 + r() * 40; c.fillStyle = ['#1a8f55', '#22b36a'][i % 2];
      c.beginPath(); c.arc(bx, base, 15, Math.PI, 0); c.arc(bx + 18, base, 11, Math.PI, 0); c.fill();
    }
  }

  function tile(c, img, w, scroll, f) {
    var x = -((scroll * f) % w);
    c.drawImage(img, x, 0); c.drawImage(img, x + w, 0);
  }

  PER.Background = {
    build: function () {
      if (built) return;
      buildSky(); buildFar(); buildMid(); buildNear(); built = true;
    },
    // scroll = jarak tempuh dalam px; t = waktu; boss = true saat Eco Boss (warna merah)
    draw: function (c, scroll, t, boss) {
      if (!built) this.build();
      c.drawImage(sky, 0, 0);
      tile(c, far, TW.far, scroll, 0.1);
      tile(c, mid, TW.mid, scroll, 0.32);
      tile(c, near, TW.near, scroll, 0.65);
      // jalan
      var rg = c.createLinearGradient(0, G - 28 + 38, 0, H);
      rg.addColorStop(0, '#11302d'); rg.addColorStop(1, '#071a18');
      c.fillStyle = rg; c.fillRect(0, G - 28 + 38, CFG.W, H - (G - 28 + 38));
      c.fillStyle = boss ? '#ff4d6d' : '#39ffa0'; c.globalAlpha = 0.9; c.fillRect(0, G - 28 + 38, CFG.W, 3); c.globalAlpha = 1;
      // marka jalan (kecepatan 1.0)
      var off = scroll % 160;
      c.fillStyle = 'rgba(220,255,240,.55)';
      for (var x = -off; x < CFG.W; x += 160) c.fillRect(x, G + 78, 84, 7);
      c.fillStyle = 'rgba(255,255,255,.08)';
      for (var y = G + 30; y < H; y += 34) c.fillRect(0, y, CFG.W, 1);
      // kilau neon di garis tanah
      var gg = c.createLinearGradient(0, G - 6, 0, G + 40);
      gg.addColorStop(0, boss ? 'rgba(255,77,109,.28)' : 'rgba(57,255,160,.26)'); gg.addColorStop(1, 'rgba(57,255,160,0)');
      c.fillStyle = gg; c.fillRect(0, G - 6, CFG.W, 46);
      if (boss) { c.fillStyle = 'rgba(255,40,80,' + (0.08 + Math.sin(t * 6) * 0.04) + ')'; c.fillRect(0, 0, CFG.W, H); }
    }
  };
})(window);
