// score.js - skor, combo (x1..x8), jarak (meter)
import { C } from './config.js';

function comboLevelFor(count) {
  const th = C.COMBO.thresholds;
  let lv = 0;
  for (let i = 0; i < th.length; i++) if (count >= th[i]) lv = i;
  return lv;
}

export class ScoreSystem {
  constructor() { this.reset(); }

  reset() {
    this.score = 0;
    this.combo = 0;
    this.comboMax = 0;
    this.plastic = 0;
    this.meters = 0;
    this.cleared = 0;
    this._acc = 0;
  }

  // level combo 0..7 (ditampilkan x1..x8)
  get level() { return comboLevelFor(this.combo); }
  get multiplier() { return C.COMBO.mult[this.level]; }
  get maxLevel() { return comboLevelFor(this.comboMax); }

  collect(tier, boostOn) {
    const before = this.level;
    this.combo++;
    this.plastic++;
    if (this.combo > this.comboMax) this.comboMax = this.combo;
    const base = C.SCORE[tier] || C.SCORE.normal;
    const pts = Math.round(base * this.multiplier * (boostOn ? C.SCORE.boostMult : 1));
    this.score += pts;
    return { pts, levelUp: this.level > before, level: this.level, combo: this.combo };
  }

  breakCombo() { this.combo = 0; }

  addBonus(pts, boostOn) {
    const p = Math.round(pts * (boostOn ? C.SCORE.boostMult : 1));
    this.score += p;
    return p;
  }

  // worldUnits = jarak geser 3D; dikonversi ke meter dengan DISTANCE_PER_UNIT
  addDistance(worldUnits, boostOn, speedOn) {
    const dm = worldUnits * C.WORLD.DISTANCE_PER_UNIT;
    this.meters += dm;
    this._acc += dm * C.SCORE.perMeter * (boostOn ? C.SCORE.boostMult : 1) * (speedOn ? 1.35 : 1);
    const whole = Math.floor(this._acc);
    if (whole > 0) { this.score += whole; this._acc -= whole; }
    return dm;
  }
}
