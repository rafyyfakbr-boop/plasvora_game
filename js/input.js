// input.js - keyboard. Lompat dan pause dicatat sebagai "tepi" (satu kali tekan).
const held = {};
let jumpEdge = false, pauseEdge = false, active = false;

const JUMP = { Space: 1, ArrowUp: 1, KeyW: 1 };
const SLIDE = { ArrowDown: 1, KeyS: 1 };
const PAUSE = { KeyP: 1, Escape: 1 };

const typing = (e) => e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA');

window.addEventListener('keydown', (e) => {
  if (typing(e)) return;
  held[e.code] = true;
  if (active && (JUMP[e.code] || SLIDE[e.code] || PAUSE[e.code])) e.preventDefault();
  if (e.repeat || !active) return;
  if (JUMP[e.code]) jumpEdge = true;
  if (PAUSE[e.code]) pauseEdge = true;
});
window.addEventListener('keyup', (e) => { held[e.code] = false; });
window.addEventListener('blur', () => { for (const k in held) held[k] = false; });

export const Input = {
  setActive(v) { active = v; if (!v) this.clear(); },
  clear() { jumpEdge = false; pauseEdge = false; },
  slideHeld() { for (const k in SLIDE) if (held[k]) return true; return false; },
  takeJump() { const v = jumpEdge; jumpEdge = false; return v; },
  takePause() { const v = pauseEdge; pauseEdge = false; return v; }
};
