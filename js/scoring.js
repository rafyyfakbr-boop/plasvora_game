/* PLASVORA ECO RUNNER - scoring.js : skor, combo, jarak, pengali */
(function (W) {
  'use strict';
  var PER = W.PER = W.PER || {};
  var CFG = PER.CFG;

  var S = PER.Score = {
    score: 0, combo: 0, comboMax: 0, level: 1, collected: 0, cleared: 0, dist: 0, bossWins: 0, _distAcc: 0,

    reset: function () {
      this.score = 0; this.combo = 0; this.comboMax = 0; this.level = 1;
      this.collected = 0; this.cleared = 0; this.dist = 0; this.bossWins = 0; this._distAcc = 0;
    },
    levelFor: function (combo) { return Math.min(CFG.COMBO_MAX_LEVEL, 1 + Math.floor(combo / CFG.COMBO_STEP)); },
    // pengali poin item dari combo: x1.0 sampai x2.0 (COMBO_LEVEL_MULT per level), dikali 2 saat Eco Boost
    comboMult: function () { return 1 + (this.level - 1) * CFG.COMBO_LEVEL_MULT; },
    totalMult: function (boostOn) { return this.comboMult() * (boostOn ? 2 : 1); },

    add: function (pts) { this.score += pts; return pts; },

    // item diambil. Mengembalikan {pts, levelUp, level}
    collect: function (tier, boostOn) {
      this.collected++; this.combo++;
      if (this.combo > this.comboMax) this.comboMax = this.combo;
      var prev = this.level; this.level = this.levelFor(this.combo);
      var pts = Math.round(CFG.ITEM_VALUE[tier] * this.comboMult() * (boostOn ? 2 : 1));
      this.score += pts;
      var bonus = 0;
      if (this.level > prev) { bonus = CFG.COMBO_LEVEL_BONUS * (boostOn ? 2 : 1); this.score += bonus; }
      return { pts: pts, bonus: bonus, levelUp: this.level > prev, level: this.level };
    },
    breakCombo: function () { this.combo = 0; this.level = 1; },

    clearObstacle: function (boostOn) {
      this.cleared++;
      var p = CFG.CLEAR_BONUS * (boostOn ? 2 : 1); this.score += p; return p;
    },

    // jarak dalam pixel; speedBonus = true saat Speed Boost (poin jarak 2x)
    addDistance: function (px, boostOn, speedOn) {
      var m = px / CFG.PX_PER_M; this.dist += m;
      this._distAcc += m * CFG.DIST_PTS * (boostOn ? 2 : 1) * (speedOn ? 2 : 1);
      var whole = Math.floor(this._distAcc);
      if (whole > 0) { this.score += whole; this._distAcc -= whole; }
    }
  };
})(window);
