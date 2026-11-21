/* PLASVORA ECO RUNNER - hud.js : HUD, banner, dan hitung mundur yang digambar di kanvas */
(function (W) {
  'use strict';
  var PER = W.PER = W.PER || {};
  var CFG = PER.CFG, U = PER.U, COL = PER.COL, TAU = Math.PI * 2;
  var FONT = '"Arial Black","Segoe UI Black",Impact,system-ui,sans-serif';
  var BODY = '"Segoe UI",Arial,system-ui,sans-serif';

  function heart(c, x, y, s, full) {
    c.save(); c.translate(x, y); c.scale(s, s);
    c.beginPath(); c.moveTo(0, 8); c.bezierCurveTo(-16, -4, -9, -16, 0, -7); c.bezierCurveTo(9, -16, 16, -4, 0, 8); c.closePath();
    if (full) { c.fillStyle = '#ff4d6d'; c.shadowColor = '#ff4d6d'; c.shadowBlur = 10; c.fill(); c.shadowBlur = 0; }
    else { c.fillStyle = '#1b2a2c'; c.fill(); }
    c.lineWidth = 2; c.strokeStyle = full ? '#ffd0d8' : '#4b5f62'; c.stroke();
    c.restore();
  }

  function panel(c, x, y, w, h) {
    c.save(); c.fillStyle = 'rgba(2,22,18,.62)'; U.rr(c, x, y, w, h, 12); c.fill();
    c.strokeStyle = 'rgba(57,255,160,.55)'; c.lineWidth = 2; U.rr(c, x, y, w, h, 12); c.stroke(); c.restore();
  }
  function label(c, txt, x, y, col, size, align) {
    c.save(); c.textAlign = align || 'left'; c.font = '700 ' + (size || 13) + 'px ' + BODY; c.fillStyle = col || 'rgba(190,255,230,.75)';
    c.fillText(txt, x, y); c.restore();
  }
  function big(c, txt, x, y, size, col, align, glowC) {
    c.save(); c.textAlign = align || 'left'; c.font = '900 ' + size + 'px ' + FONT;
    if (glowC) { c.shadowColor = glowC; c.shadowBlur = 16; }
    c.fillStyle = col || '#fff'; c.fillText(txt, x, y); c.restore();
  }

  function logo(c, x, y) {
    c.save(); c.translate(x, y);
    c.fillStyle = '#0f6b48'; c.strokeStyle = COL.neon; c.lineWidth = 3; c.shadowColor = COL.neon; c.shadowBlur = 12;
    c.beginPath(); c.arc(22, 22, 20, 0, TAU); c.fill(); c.stroke(); c.shadowBlur = 0;
    c.fillStyle = '#eafff6'; c.font = '900 26px Arial'; c.textAlign = 'center'; c.fillText('♻', 22, 31);
    c.restore();
    big(c, CFG.BRAND, x + 52, y + 24, 26, '#eafff6', 'left', COL.neon);
    label(c, 'ECO RUNNER', x + 53, y + 42, COL.neon, 13);
  }

  function powerBar(c, x, y, type, left, total) {
    var info = PER.POWER_INFO[type];
    c.save(); panel(c, x, y, 190, 34);
    PER.Sprites.drawPowerIcon(c, type, x + 20, y + 17, 0.62);
    c.fillStyle = 'rgba(255,255,255,.12)'; U.rr(c, x + 40, y + 12, 138, 10, 5); c.fill();
    c.fillStyle = info.color; c.shadowColor = info.color; c.shadowBlur = 8;
    U.rr(c, x + 40, y + 12, Math.max(6, 138 * U.clamp(left / total, 0, 1)), 10, 5); c.fill();
    c.restore();
  }

  PER.HUD = {
    // g = snapshot dari game.js
    draw: function (c, g, t) {
      var cx = CFG.W / 2;

      /* kiri atas: logo + nyawa + pengali */
      panel(c, 16, 14, 270, 112);
      logo(c, 28, 20);
      for (var i = 0; i < CFG.LIVES; i++) heart(c, 44 + i * 36, 88, 1.15, i < g.lives);
      label(c, 'MULTIPLIER', 160, 80, null, 11);
      big(c, 'x' + (Math.round(g.mult * 100) / 100).toFixed(g.mult % 1 === 0 ? 0 : 2).replace(/0$/, ''), 160, 106, 26, g.mult > 1 ? COL.gold : '#eafff6', 'left', g.mult > 1 ? COL.gold : null);

      /* tengah atas: skor */
      panel(c, cx - 170, 14, 340, 86);
      label(c, 'SCORE', cx, 36, null, 13, 'center');
      big(c, U.pad6(g.score), cx, 84, 52, '#ffffff', 'center', COL.neon);

      /* kanan atas: high score, jarak, sampah */
      panel(c, CFG.W - 306, 14, 290, 112);
      label(c, 'HIGH SCORE', CFG.W - 290, 36, null, 12);
      big(c, U.pad6(Math.max(g.high, g.score)), CFG.W - 30, 36, 24, g.score > g.high && g.high > 0 ? COL.gold : '#eafff6', 'right');
      label(c, 'DISTANCE', CFG.W - 290, 62, null, 12);
      big(c, U.km(g.dist), CFG.W - 30, 64, 20, '#eafff6', 'right');
      label(c, 'PLASTIC COLLECTED', CFG.W - 290, 92, null, 12);
      big(c, String(g.collected), CFG.W - 30, 96, 22, COL.neon, 'right');
      label(c, 'SPEED ' + g.speed.toFixed(1) + 'x', CFG.W - 290, 116, g.speed >= 1.5 ? COL.danger : COL.neon2, 12);

      /* combo di bawah skor: level 2 ke atas besar, sebelum itu hanya rantai kecil */
      if (g.combo >= 2) {
        var col = ['#7dffd0', '#7dffd0', '#ffe14a', '#ff9d2e', '#ff4fd8', '#ff4d6d'][g.level] || '#fff';
        if (g.level >= 2) {
          var pulse = 1 + Math.sin(t * 10) * 0.04 * g.level;
          c.save(); c.translate(cx, 142); c.scale(pulse, pulse);
          c.textAlign = 'center'; c.font = '900 ' + (28 + g.level * 3) + 'px ' + FONT;
          c.shadowColor = col; c.shadowBlur = 14 + g.level * 4; c.fillStyle = col;
          c.fillText('COMBO x' + g.level, 0, 0);
          c.restore();
        } else {
          label(c, 'CHAIN ' + g.combo, cx, 138, col, 18, 'center');
        }
        if (g.level < CFG.COMBO_MAX_LEVEL) {
          var p = (g.combo % CFG.COMBO_STEP) / CFG.COMBO_STEP;
          c.fillStyle = 'rgba(255,255,255,.14)'; U.rr(c, cx - 70, 152, 140, 6, 3); c.fill();
          c.fillStyle = col; U.rr(c, cx - 70, 152, Math.max(4, 140 * p), 6, 3); c.fill();
        }
      }

      /* bar Eco Boss */
      if (g.boss.state === 'fight') {
        var by = 200;
        c.save(); c.textAlign = 'center';
        label(c, 'ECO BOSS  •  BERTAHAN ' + Math.ceil(g.boss.left) + ' DETIK', cx, by, COL.danger, 15, 'center');
        c.fillStyle = 'rgba(255,255,255,.14)'; U.rr(c, cx - 190, by + 8, 380, 12, 6); c.fill();
        c.fillStyle = COL.danger; c.shadowColor = COL.danger; c.shadowBlur = 10;
        U.rr(c, cx - 190, by + 8, Math.max(8, 380 * (1 - g.boss.left / CFG.BOSS.TIME)), 12, 6); c.fill(); c.restore();
      }

      /* timer power-up (kiri bawah) */
      var py = CFG.H - 54, k = 0;
      var list = [['boost', g.p.boost, CFG.POWER.boost], ['magnet', g.p.magnet, CFG.POWER.magnet], ['speed', g.p.speed, CFG.POWER.speed]];
      for (var j = 0; j < list.length; j++) {
        if (list[j][1] > 0) { powerBar(c, 18, py - k * 42, list[j][0], list[j][1], list[j][2]); k++; }
      }
      if (g.p.shield) {
        c.save(); panel(c, 18, py - k * 42, 190, 34); PER.Sprites.drawPowerIcon(c, 'shield', 38, py - k * 42 + 17, 0.62);
        label(c, 'ECO SHIELD AKTIF', 60, py - k * 42 + 22, COL.neon2, 13); c.restore();
      }
      if (g.p.boost > 0) { // label 2X score
        big(c, '2X SCORE', 18, py - k * 42 - 10, 18, COL.gold, 'left', COL.gold);
      }

      /* petunjuk kontrol di awal permainan */
      if (g.t < 7) {
        var a = g.t < 5.5 ? 1 : (7 - g.t) / 1.5;
        c.save(); c.globalAlpha = a;
        panel(c, cx - 300, CFG.H - 96, 600, 64);
        c.textAlign = 'center';
        label(c, 'SPACE / ↑  LOMPAT        ↓  SLIDE        KUMPULKAN PLASTIK, HINDARI RINTANGAN', cx, CFG.H - 58, '#eafff6', 17, 'center');
        c.restore();
      }
    },

    banner: function (c, b) {
      var k = b.t / b.max, s = k < 0.12 ? U.easeOutBack(k / 0.12) : 1;
      var a = k > 0.78 ? 1 - (k - 0.78) / 0.22 : 1;
      c.save(); c.globalAlpha = a; c.translate(CFG.W / 2, b.y || 270); c.scale(s, s);
      c.textAlign = 'center'; c.shadowColor = b.color; c.shadowBlur = 26;
      c.font = '900 ' + (b.size || 54) + 'px ' + FONT; c.lineWidth = 8; c.strokeStyle = 'rgba(2,20,16,.95)'; c.lineJoin = 'round';
      c.strokeText(b.text, 0, 0); c.fillStyle = b.color; c.fillText(b.text, 0, 0);
      if (b.sub) {
        c.shadowBlur = 10; c.font = '800 ' + (b.subSize || 28) + 'px ' + FONT; c.strokeText(b.sub, 0, 46); c.fillStyle = '#ffffff'; c.fillText(b.sub, 0, 46);
      }
      if (b.sub2) { c.font = '800 24px ' + FONT; c.strokeText(b.sub2, 0, 86); c.fillStyle = COL.gold; c.fillText(b.sub2, 0, 86); }
      c.restore();
    },

    countdown: function (c, label, frac) {
      var s = 1 + (1 - frac) * 0.5, a = U.clamp(frac * 1.6, 0, 1);
      c.save(); c.translate(CFG.W / 2, CFG.H / 2 - 20); c.scale(s, s); c.globalAlpha = a;
      c.textAlign = 'center'; c.font = '900 200px ' + FONT; c.shadowColor = COL.neon; c.shadowBlur = 40;
      c.lineWidth = 12; c.strokeStyle = 'rgba(2,20,16,.9)'; c.lineJoin = 'round';
      c.strokeText(label, 0, 70); c.fillStyle = label === 'GO!' ? COL.gold : '#eafff6'; c.fillText(label, 0, 70);
      c.restore();
    },

    // lapisan gelap + judul saat pause / game over (opsional)
    dim: function (c, a) { c.save(); c.fillStyle = 'rgba(0,10,8,' + a + ')'; c.fillRect(0, 0, CFG.W, CFG.H); c.restore(); }
  };
})(window);
