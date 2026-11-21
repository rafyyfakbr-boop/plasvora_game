// main.js - titik masuk
import { createGame } from './game.js';

function boot() {
  try { createGame().start(); }
  catch (e) {
    console.error(e);
    const d = document.createElement('div');
    d.style.cssText = 'position:fixed;inset:0;display:grid;place-items:center;background:#06100e;color:#fff;font:20px sans-serif;text-align:center;padding:24px';
    d.textContent = 'Game tidak bisa dimulai. Pastikan browser mendukung WebGL (Chrome/Edge terbaru).';
    document.body.appendChild(d);
  }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
