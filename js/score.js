// score.js - skor, combo, jarak
import { C } from './config.js';

export class ScoreSystem {
  constructor() { this.reset(); }

  reset() {
    this.score = 0; this.combo = 0; this.comboMax = 0; this.plastic = 0;
    this.meters = 0; this.cleared = 0; this._acc = 0;
  }

  // level combo 0..4 (ditampilkan x1..x5)
  get level() { return Math.min(C.COMBO.mult.length - 1, Math.floor(this.combo / C.COMBO.perLevel)); }
  get multiplier() { return C.COMBO.mult[this.level]; }
  get maxLevel() { return Math.min(C.COMBO.mult.length - 1, Math.floor(this.comboMax / C.COMBO.perLevel)); }

  collect(tier, boostOn) {
    const before = this.level;
    this.combo++; this.plastic++;
    if (this.combo > this.comboMax) this.comboMax = this.combo;
    const pts = Math.round(C.SCORE[tier] * this.multiplier * (boostOn ? 2 : 1));
    this.score += pts;
    return { pts, levelUp: this.level > before, level: this.level };
  }

  breakCombo() { this.combo = 0; }

  addBonus(pts, boostOn) {
    const p = Math.round(pts * (boostOn ? 2 : 1));
    this.score += p; return p;
  }

  addDistance(units, boostOn, speedOn) {
    this.meters += units;
    this._acc += units * C.SCORE.perMeter * (boostOn ? 2 : 1) * (speedOn ? 2 : 1);
    const whole = Math.floor(this._acc);
    if (whole > 0) { this.score += whole; this._acc -= whole; }
  }
}
