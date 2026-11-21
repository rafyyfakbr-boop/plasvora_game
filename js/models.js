// models.js - semua model 3D dibuat dari geometri Three.js (tanpa file model eksternal).
// Geometri dan material dipakai bersama oleh banyak objek supaya ringan (target 60 FPS).
import * as THREE from 'three';
import { OBSTACLE_DEFS } from './config.js';
import { canvasTexture, roundRect } from './util.js';
export { OBSTACLE_DEFS };

export const COLORS = {
  emerald: 0x1fbf7a, emeraldDark: 0x0f6b48, neon: 0x39ffa0, cyan: 0x19d4ff, gold: 0xffd23f,
  danger: 0xff4d6d, navy: 0x06231c, amber: 0xff9d2e, magenta: 0xff4fd8
};

const geoCache = {}, matCache = {};
const geo = (k, f) => geoCache[k] || (geoCache[k] = f());
function lam(color, o = {}) {
  const k = color + JSON.stringify(o);
  return matCache[k] || (matCache[k] = new THREE.MeshLambertMaterial({ color, flatShading: true, ...o }));
}
const mesh = (g, m) => new THREE.Mesh(g, m);

/* ---------------- tekstur kecil ---------------- */
let texCache = null;
function textures() {
  if (texCache) return texCache;
  const visor = (kind) => canvasTexture(256, 96, (c, w, h) => {
    c.fillStyle = '#021a12'; roundRect(c, 0, 0, w, h, 22); c.fill();
    c.fillStyle = '#19d4ff'; c.strokeStyle = '#19d4ff'; c.lineCap = 'round'; c.lineWidth = 9;
    if (kind === 'hit') {
      c.strokeStyle = '#ff4d6d';
      [[0.56, 0.5], [0.82, 0.5]].forEach(([x, y]) => { const cx = w * x, cy = h * y; c.beginPath(); c.moveTo(cx - 14, cy - 14); c.lineTo(cx + 14, cy + 14); c.moveTo(cx + 14, cy - 14); c.lineTo(cx - 14, cy + 14); c.stroke(); });
    } else if (kind === 'happy') {
      c.strokeStyle = '#ffd23f';
      [[0.56, 0.58], [0.82, 0.58]].forEach(([x, y]) => { c.beginPath(); c.arc(w * x, h * y, 15, Math.PI * 1.1, Math.PI * 1.9); c.stroke(); });
    } else {
      [[0.54, 0.5], [0.8, 0.5]].forEach(([x, y]) => { roundRect(c, w * x - 12, h * y - 22, 24, 44, 9); c.fill(); });
    }
  });
  const recycle = canvasTexture(128, 128, (c, w, h) => {
    c.fillStyle = '#eafff6'; c.font = '900 104px "Segoe UI Symbol","Noto Sans Symbols2","DejaVu Sans",Arial,sans-serif';
    c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('♻', w / 2, h / 2 + 6);
  });
  const stripes = (a, b) => canvasTexture(128, 128, (c, w, h) => {
    c.fillStyle = a; c.fillRect(0, 0, w, h); c.fillStyle = b;
    for (let i = -2; i < 6; i++) { c.beginPath(); c.moveTo(i * 32, 0); c.lineTo(i * 32 + 16, 0); c.lineTo(i * 32 + 48, h); c.lineTo(i * 32 + 32, h); c.fill(); }
  }, { repeat: true });
  const glow = (col) => canvasTexture(64, 64, (c, w, h) => {
    const g = c.createRadialGradient(32, 32, 2, 32, 32, 30);
    g.addColorStop(0, col); g.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  });
  texCache = {
    visor: visor('normal'), visorHit: visor('hit'), visorHappy: visor('happy'), recycle,
    redStripes: stripes('#e8e8e8', '#e0334f'), orangeStripes: stripes('#1c1c1c', '#ffb02e'),
    glowGreen: glow('rgba(57,255,160,.7)'), glowEmerald: glow('rgba(44,240,143,.88)'),
    glowCyan: glow('rgba(25,212,255,.85)'), glowGold: glow('rgba(255,210,63,.95)')
  };
  return texCache;
}

/* ---------------- robot ---------------- */
export function createRobot() {
  const T = textures();
  const root = new THREE.Group();
  const bodyMat = new THREE.MeshLambertMaterial({ color: COLORS.emerald, flatShading: true });
  const headMat = new THREE.MeshLambertMaterial({ color: COLORS.emeraldDark, flatShading: true });
  const darkMat = lam(0x17302a);

  const hip = new THREE.Group(); hip.position.y = 0.45; root.add(hip);

  const body = mesh(geo('rb-body', () => new THREE.CylinderGeometry(0.52, 0.42, 0.9, 10)), bodyMat);
  body.position.y = 0.45; hip.add(body);
  const trim = mesh(geo('rb-trim', () => new THREE.TorusGeometry(0.47, 0.035, 6, 16)), new THREE.MeshBasicMaterial({ color: COLORS.neon }));
  trim.rotation.x = Math.PI / 2; trim.position.y = 0.16; hip.add(trim);
  const decal = mesh(geo('rb-decal', () => new THREE.PlaneGeometry(0.5, 0.5)), new THREE.MeshBasicMaterial({ map: T.recycle, transparent: true }));
  decal.position.set(0, 0.52, 0.5); hip.add(decal);

  const head = new THREE.Group(); head.position.y = 0.92; hip.add(head);
  const lid = mesh(geo('rb-head', () => new THREE.BoxGeometry(1.04, 0.5, 0.88)), headMat);
  lid.position.y = 0.26; head.add(lid);
  const handle = mesh(geo('rb-handle', () => new THREE.BoxGeometry(0.36, 0.09, 0.22)), darkMat);
  handle.position.y = 0.55; head.add(handle);
  const visorMat = new THREE.MeshBasicMaterial({ map: T.visor, transparent: true });
  const visorA = mesh(geo('rb-visor', () => new THREE.PlaneGeometry(0.8, 0.3)), visorMat);
  visorA.position.set(0, 0.26, 0.445); head.add(visorA);
  const visorB = mesh(geo('rb-visor', () => new THREE.PlaneGeometry(0.8, 0.3)), visorMat);
  visorB.position.set(0.525, 0.26, 0); visorB.rotation.y = Math.PI / 2; head.add(visorB);
  const ant = mesh(geo('rb-ant', () => new THREE.CylinderGeometry(0.02, 0.02, 0.3, 5)), darkMat);
  ant.position.set(-0.28, 0.66, 0); head.add(ant);
  const led = mesh(geo('rb-led', () => new THREE.SphereGeometry(0.07, 8, 6)), new THREE.MeshBasicMaterial({ color: 0xff4fd8 }));
  led.position.set(-0.28, 0.84, 0); head.add(led);

  const mkArm = (z) => {
    const g = new THREE.Group(); g.position.set(0, 0.72, z);
    const a = mesh(geo('rb-arm', () => new THREE.CylinderGeometry(0.075, 0.065, 0.46, 6)), darkMat); a.position.y = -0.23; g.add(a);
    const h = mesh(geo('rb-hand', () => new THREE.SphereGeometry(0.1, 8, 6)), lam(COLORS.neon)); h.position.y = -0.5; g.add(h);
    hip.add(g); return g;
  };
  const armF = mkArm(0.6), armB = mkArm(-0.6);

  const mkLeg = (z) => {
    const g = new THREE.Group(); g.position.set(0, 0.45, z);
    const l = mesh(geo('rb-leg', () => new THREE.CylinderGeometry(0.09, 0.08, 0.28, 6)), darkMat); l.position.y = -0.14; g.add(l);
    const b = mesh(geo('rb-boot', () => new THREE.BoxGeometry(0.5, 0.17, 0.3)), lam(COLORS.neon, { emissive: 0x0a5a38 }));
    b.position.set(0.08, -0.36, 0); g.add(b);
    root.add(g); return g;
  };
  const legF = mkLeg(0.24), legB = mkLeg(-0.24);

  // perisai
  const shield = mesh(geo('rb-shield', () => new THREE.SphereGeometry(1.3, 16, 12)),
    new THREE.MeshBasicMaterial({ color: COLORS.cyan, transparent: true, opacity: 0.22, depthWrite: false }));
  shield.position.y = 0.95; shield.visible = false; root.add(shield);
  // cincin magnet
  const magnet = mesh(geo('rb-magnet', () => new THREE.TorusGeometry(1.15, 0.04, 6, 28)),
    new THREE.MeshBasicMaterial({ color: 0xff4fd8, transparent: true, opacity: 0.8 }));
  magnet.position.y = 0.95; magnet.visible = false; root.add(magnet);
  // bayangan bulat di jalan (dibuat di luar robot agar tidak ikut miring)
  const shadow = mesh(geo('rb-shadow', () => new THREE.CircleGeometry(0.8, 16)),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.4, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.03;

  const flashMats = [bodyMat, headMat];
  let face = 'normal';

  function setFace(f) {
    if (f === face) return; face = f;
    visorMat.map = f === 'hit' ? T.visorHit : f === 'happy' ? T.visorHappy : T.visor;
    visorMat.needsUpdate = true;
  }

  // state: idle | run | jump | fall | slide | hit
  function update(t, state, f) {
    const ph = t * 13;
    let legA = 0, legBv = 0, armA = 0, armBv = 0, bob = 0, lean = 0, hipRot = 0, hipY = 0.45, sq = 1;
    switch (state) {
      case 'run': legA = Math.sin(ph) * 0.85; legBv = -legA; armA = -legA * 0.9; armBv = legA * 0.9; bob = Math.abs(Math.sin(ph)) * 0.07; lean = -0.1; break;
      case 'jump': legA = -0.6; legBv = 0.45; armA = 2.5; armBv = 2.0; lean = -0.14; sq = 1.05; break;
      case 'fall': legA = 0.5; legBv = -0.3; armA = 1.3; armBv = 0.9; lean = 0.05; break;
      case 'slide': hipRot = 1.2; hipY = 0.38; legA = 1.15; legBv = 1.3; armA = -1.3; armBv = -1.1; break;
      case 'hit': hipRot = 0.4; lean = 0; armA = 2.6 + Math.sin(t * 40) * 0.3; armBv = 2.3; legA = 0.3; legBv = -0.3; break;
      default: sq = 1 + Math.sin(t * 3) * 0.015; armA = Math.sin(t * 2) * 0.1; armBv = -armA; // idle
    }
    legF.rotation.z = legA; legB.rotation.z = legBv;
    armF.rotation.z = armA; armB.rotation.z = armBv;
    hip.position.y = hipY + bob;
    hip.rotation.z = state === 'slide' || state === 'hit' ? hipRot : lean;
    hip.scale.set(1, sq, 1);
    ant.rotation.z = Math.sin(t * 9) * (state === 'run' ? 0.25 : 0.05);

    setFace(state === 'hit' ? 'hit' : f.happy ? 'happy' : 'normal');

    // efek status
    const e = f.boost ? 0x6b5200 : f.speed ? 0x7a3200 : f.flash ? 0x990000 : 0x000000;
    for (const m of flashMats) m.emissive.setHex(e);
    shield.visible = !!f.shield; if (f.shield) { const s = 1 + Math.sin(t * 6) * 0.04; shield.scale.set(s, s, s); }
    magnet.visible = !!f.magnet; if (f.magnet) { magnet.rotation.y = t * 3; magnet.rotation.x = Math.PI / 2 + Math.sin(t * 2) * 0.3; const s = 1 + Math.sin(t * 8) * 0.06; magnet.scale.set(s, s, s); }
  }

  return { root, shadow, update };
}

/* ---------------- loot collectible (4 tier: Plastic, Recycled, Rare, Golden) ---------------- */
const TIER = {
  normal:   { color: 0xcff5ff, emissive: 0x0c5e3e, ei: 0.65, ring: null,         scale: 0.96, glow: 'glowGreen',   glowOp: 0.42, glowScale: 1.65 },
  recycled: { color: 0x6dffb8, emissive: 0x0d7d47, ei: 0.92, ring: COLORS.neon,  scale: 1.05, glow: 'glowEmerald', glowOp: 0.65, glowScale: 1.9 },
  rare:     { color: 0x72e9ff, emissive: 0x0a7a99, ei: 1.05, ring: COLORS.cyan,  scale: 1.14, glow: 'glowCyan',    glowOp: 0.85, glowScale: 2.15 },
  gold:     { color: 0xffd23f, emissive: 0x9a6a00, ei: 1.15, ring: COLORS.gold,  scale: 1.28, glow: 'glowGold',    glowOp: 0.95, glowScale: 2.6 }
};

function plasticShape(variant, mat) {
  const g = new THREE.Group();
  if (variant === 0) { // botol
    const b = mesh(geo('l-bot', () => new THREE.CylinderGeometry(0.27, 0.27, 0.78, 10)), mat); b.position.y = -0.05; g.add(b);
    const n = mesh(geo('l-botn', () => new THREE.CylinderGeometry(0.11, 0.24, 0.26, 10)), mat); n.position.y = 0.47; g.add(n);
    const c = mesh(geo('l-botc', () => new THREE.CylinderGeometry(0.12, 0.12, 0.12, 8)), lam(0xff7a2f)); c.position.y = 0.66; g.add(c);
  } else if (variant === 1) { // gelas / material daur ulang
    const b = mesh(geo('l-cup', () => new THREE.CylinderGeometry(0.34, 0.24, 0.66, 10)), mat); g.add(b);
    const l = mesh(geo('l-cupl', () => new THREE.CylinderGeometry(0.37, 0.37, 0.06, 10)), lam(0xffffff)); l.position.y = 0.35; g.add(l);
    const s = mesh(geo('l-cups', () => new THREE.CylinderGeometry(0.025, 0.025, 0.4, 5)), lam(0xff7a2f)); s.position.set(0.06, 0.55, 0); s.rotation.z = -0.3; g.add(s);
  } else { // kantong / paket material
    const b = mesh(geo('l-bag', () => new THREE.BoxGeometry(0.62, 0.7, 0.3)), mat); g.add(b);
    const h1 = mesh(geo('l-bagh', () => new THREE.TorusGeometry(0.13, 0.03, 5, 10, Math.PI)), lam(0xffffff)); h1.position.set(-0.17, 0.35, 0); g.add(h1);
    const h2 = h1.clone(); h2.position.x = 0.17; g.add(h2);
  }
  return g;
}

export function createLoot(tier, variant) {
  const T = textures(), d = TIER[tier] || TIER.normal;
  const root = new THREE.Group();
  const mat = tier === 'gold'
    ? new THREE.MeshStandardMaterial({ color: d.color, emissive: d.emissive, emissiveIntensity: d.ei, metalness: 0.72, roughness: 0.32, flatShading: true })
    : new THREE.MeshLambertMaterial({ color: d.color, emissive: d.emissive, emissiveIntensity: d.ei, flatShading: true, transparent: true, opacity: 0.93 });
  const shape = plasticShape(variant, mat);
  shape.scale.setScalar(d.scale);
  root.add(shape);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: T[d.glow], transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: d.glowOp }));
  sp.scale.setScalar(d.glowScale); sp.position.z = -0.3; root.add(sp);
  if (d.ring) {
    const rSize = tier === 'gold' ? 0.84 : tier === 'rare' ? 0.70 : 0.62;
    const r = mesh(geo('l-ring' + tier, () => new THREE.TorusGeometry(rSize, 0.04, 6, 24)), new THREE.MeshBasicMaterial({ color: d.ring }));
    r.userData.ring = true; root.add(r);
  }
  root.userData = { shape, tier };
  return root;
}

/* ---------------- power-up ---------------- */
const POWER_TINT = { boost: '#ffd23f', magnet: '#ff4fd8', shield: '#19d4ff', speed: '#ff7a2f' };

function powerIcon(kind) {
  return canvasTexture(128, 128, (c) => {
    c.fillStyle = '#06231c'; c.beginPath(); c.arc(64, 64, 58, 0, 6.2832); c.fill();
    const g = c.createRadialGradient(64, 64, 6, 64, 64, 56); g.addColorStop(0, POWER_TINT[kind]); g.addColorStop(1, 'rgba(0,0,0,0)');
    c.globalAlpha = 0.45; c.fillStyle = g; c.beginPath(); c.arc(64, 64, 56, 0, 6.2832); c.fill(); c.globalAlpha = 1;
    c.strokeStyle = '#19d4ff'; c.lineWidth = 6; c.beginPath(); c.arc(64, 64, 55, 0, 6.2832); c.stroke();
    c.fillStyle = '#ffffff'; c.strokeStyle = '#ffffff'; c.lineJoin = 'round'; c.lineCap = 'round';
    if (kind === 'boost') { c.beginPath(); c.moveTo(72, 24); c.lineTo(42, 70); c.lineTo(62, 70); c.lineTo(54, 104); c.lineTo(88, 56); c.lineTo(68, 56); c.closePath(); c.fill(); }
    else if (kind === 'magnet') { c.lineWidth = 16; c.beginPath(); c.arc(64, 62, 24, Math.PI, 0); c.lineTo(88, 92); c.moveTo(40, 62); c.lineTo(40, 92); c.stroke(); c.fillStyle = '#ff4d6d'; c.fillRect(32, 86, 16, 12); c.fillRect(80, 86, 16, 12); }
    else if (kind === 'shield') { c.beginPath(); c.moveTo(64, 24); c.lineTo(94, 36); c.lineTo(90, 70); c.quadraticCurveTo(82, 92, 64, 102); c.quadraticCurveTo(46, 92, 38, 70); c.lineTo(34, 36); c.closePath(); c.fill(); c.strokeStyle = '#0a5d78'; c.lineWidth = 8; c.beginPath(); c.moveTo(50, 62); c.lineTo(60, 74); c.lineTo(80, 50); c.stroke(); }
    else { for (let i = 0; i < 2; i++) { c.beginPath(); c.moveTo(34 + i * 24, 34); c.lineTo(58 + i * 24, 64); c.lineTo(34 + i * 24, 94); c.lineTo(46 + i * 24, 94); c.lineTo(70 + i * 24, 64); c.lineTo(46 + i * 24, 34); c.closePath(); c.fill(); } }
  });
}
const iconCache = {};

export function createPower(kind) {
  const root = new THREE.Group();
  const tex = iconCache[kind] || (iconCache[kind] = powerIcon(kind));
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
  sp.scale.setScalar(1.7); root.add(sp);
  const ring = mesh(geo('p-ring', () => new THREE.TorusGeometry(1.0, 0.04, 6, 28)), new THREE.MeshBasicMaterial({ color: COLORS.cyan }));
  ring.userData.ring = true; root.add(ring);
  return root;
}

/* ---------------- rintangan (10 variasi, definisi ada di config.js -> OBSTACLE_DEFS) ---------------- */

export function createObstacle(kind) {
  const T = textures();
  const g = new THREE.Group();
  let beacon = null;

  if (kind === 'cone') {
    [-0.28, 0.32].forEach((ox, idx) => {
      const base = mesh(geo('o-coneb', () => new THREE.BoxGeometry(0.54, 0.08, 0.54)), lam(0x232b2d));
      base.position.set(ox, 0.04, idx ? -0.25 : 0.25); g.add(base);
      const c = mesh(geo('o-cone', () => new THREE.ConeGeometry(0.24, 0.88, 8)), lam(0xff6b2b, { emissive: 0x3b1200 }));
      c.position.set(ox, 0.48, idx ? -0.25 : 0.25); g.add(c);
      const st = mesh(geo('o-cones', () => new THREE.CylinderGeometry(0.11, 0.16, 0.18, 8)), lam(0xf4fff9));
      st.position.set(ox, 0.56, idx ? -0.25 : 0.25); g.add(st);
    });
  } else if (kind === 'bin') {
    const body = mesh(geo('o-bin', () => new THREE.CylinderGeometry(0.62, 0.5, 1.1, 10)), lam(0x3c7c9c));
    body.position.y = 0.62; body.rotation.z = 0.12; g.add(body);
    const lid = mesh(geo('o-binl', () => new THREE.CylinderGeometry(0.7, 0.7, 0.12, 10)), lam(0x2c6482));
    lid.position.set(-0.55, 0.15, 0); lid.rotation.z = -0.5; g.add(lid);
    const band = mesh(geo('o-binb', () => new THREE.CylinderGeometry(0.585, 0.55, 0.22, 10)), lam(0xe0334f, { emissive: 0x4a0a14 }));
    band.position.set(0.07, 0.6, 0); band.rotation.z = 0.12; g.add(band);
  } else if (kind === 'box') {
    const b = mesh(geo('o-box', () => new THREE.BoxGeometry(1.9, 1.65, 1.6)), lam(0xb98652)); b.position.y = 0.825; g.add(b);
    const tape = mesh(geo('o-boxt', () => new THREE.BoxGeometry(0.32, 1.67, 1.62)), lam(0xe0334f, { emissive: 0x4a0a14 })); tape.position.y = 0.825; g.add(tape);
    const top = mesh(geo('o-boxtop', () => new THREE.BoxGeometry(1.94, 0.1, 1.64)), lam(0xd3a56c)); top.position.y = 1.65; g.add(top);
  } else if (kind === 'barrier') {
    const m = matCache.redBar || (matCache.redBar = new THREE.MeshLambertMaterial({ map: T.redStripes, flatShading: true }));
    const b = mesh(geo('o-bar', () => new THREE.BoxGeometry(2.25, 0.7, 0.5)), m); b.position.y = 0.85; g.add(b);
    [-0.85, 0.85].forEach((x) => { const l = mesh(geo('o-barl', () => new THREE.BoxGeometry(0.18, 0.7, 0.4)), lam(0x555d63)); l.position.set(x, 0.35, 0); g.add(l); });
    beacon = mesh(geo('o-barlamp', () => new THREE.SphereGeometry(0.14, 8, 6)), new THREE.MeshBasicMaterial({ color: 0xff3b3b })); beacon.position.set(-0.95, 1.3, 0); g.add(beacon);
  } else if (kind === 'trashPile') {
    const bagMat = lam(0x283834), bagMat2 = lam(0x3b4d46), crateMat = lam(0x9e7246);
    const b1 = mesh(geo('o-tp1', () => new THREE.DodecahedronGeometry(0.75, 0)), bagMat); b1.position.set(-0.62, 0.62, 0.15); b1.scale.set(1.1, 0.9, 1.0); g.add(b1);
    const b2 = mesh(geo('o-tp2', () => new THREE.DodecahedronGeometry(0.78, 0)), bagMat2); b2.position.set(0.42, 0.70, -0.1); b2.scale.set(1.15, 1.05, 1.0); g.add(b2);
    const b3 = mesh(geo('o-tp3', () => new THREE.DodecahedronGeometry(0.62, 0)), lam(0x1f5946)); b3.position.set(-0.08, 1.24, 0.05); g.add(b3);
    const cr = mesh(geo('o-tpc', () => new THREE.BoxGeometry(0.95, 0.75, 0.95)), crateMat); cr.position.set(0.82, 0.42, 0.25); cr.rotation.z = -0.18; g.add(cr);
    const warn = mesh(geo('o-tpw', () => new THREE.TorusGeometry(0.22, 0.05, 6, 12)), new THREE.MeshBasicMaterial({ color: 0xff9d2e })); warn.position.set(-0.1, 1.65, 0.35); g.add(warn);
  } else if (kind === 'dumpster') {
    const body = mesh(geo('o-dmp', () => new THREE.BoxGeometry(2.3, 1.9, 1.65)), lam(0x1d4d3e)); body.position.y = 1.02; g.add(body);
    const mStripe = matCache.orgBar || (matCache.orgBar = new THREE.MeshLambertMaterial({ map: T.orangeStripes, flatShading: true }));
    const stripe = mesh(geo('o-dmps', () => new THREE.BoxGeometry(2.34, 0.36, 1.68)), mStripe); stripe.position.y = 1.62; g.add(stripe);
    const lid = mesh(geo('o-dmpl', () => new THREE.BoxGeometry(2.42, 0.18, 1.76)), lam(0x102822)); lid.position.set(0, 2.04, 0); lid.rotation.z = 0.05; g.add(lid);
    [-0.85, 0.85].forEach((x) => {
      const w = mesh(geo('o-dmpw', () => new THREE.CylinderGeometry(0.18, 0.18, 1.6, 8)), lam(0x111518));
      w.rotation.x = Math.PI / 2; w.position.set(x, 0.18, 0); g.add(w);
    });
    beacon = mesh(geo('o-beacon', () => new THREE.SphereGeometry(0.18, 8, 6)), new THREE.MeshBasicMaterial({ color: 0xff3b5c }));
    beacon.position.set(-0.95, 2.28, 0.4); g.add(beacon);
  } else if (kind === 'car') {
    const base = mesh(geo('o-car', () => new THREE.BoxGeometry(3.05, 0.75, 1.5)), lam(0x6a4fc2)); base.position.y = 0.6; g.add(base);
    const cab = mesh(geo('o-carc', () => new THREE.BoxGeometry(1.6, 0.6, 1.4)), lam(0x7a5ad8)); cab.position.set(-0.1, 1.2, 0); g.add(cab);
    const win = mesh(geo('o-carw', () => new THREE.BoxGeometry(1.45, 0.4, 1.44)), lam(0x9fdcff, { emissive: 0x1a4a66 })); win.position.set(-0.1, 1.22, 0); g.add(win);
    beacon = mesh(geo('o-cart', () => new THREE.BoxGeometry(0.1, 0.22, 1.25)), new THREE.MeshBasicMaterial({ color: 0xff3b3b })); beacon.position.set(-1.56, 0.76, 0); g.add(beacon);
    [-0.95, 0.95].forEach((x) => { [0.76, -0.76].forEach((z) => { const w = mesh(geo('o-carwh', () => new THREE.CylinderGeometry(0.32, 0.32, 0.22, 10)), lam(0x15191c)); w.rotation.x = Math.PI / 2; w.position.set(x, 0.32, z); g.add(w); }); });
  } else if (kind === 'hole') {
    const pit = mesh(geo('o-hole', () => new THREE.BoxGeometry(2.7, 0.06, 5.4)), new THREE.MeshBasicMaterial({ color: 0x020807 })); pit.position.set(0, 0.04, 1.2); g.add(pit);
    const rim = mesh(geo('o-holer', () => new THREE.BoxGeometry(2.8, 0.05, 0.12)), new THREE.MeshBasicMaterial({ color: COLORS.danger })); rim.position.set(0, 0.08, -1.45); g.add(rim);
    const rim2 = rim.clone(); rim2.position.z = 3.85; g.add(rim2);
    [-1.45, 1.45].forEach((x) => { const p = mesh(geo('o-holep', () => new THREE.CylinderGeometry(0.06, 0.06, 0.9, 5)), lam(0xffb02e)); p.position.set(x, 0.45, -1.2); g.add(p); const l = mesh(geo('o-holel', () => new THREE.SphereGeometry(0.13, 8, 6)), new THREE.MeshBasicMaterial({ color: 0xff3b3b })); l.position.set(x, 0.95, -1.2); g.add(l); });
  } else if (kind === 'pipe') {
    const p = mesh(geo('o-pipe', () => new THREE.CylinderGeometry(0.4, 0.4, 3.2, 12)), lam(0x9fb2c0)); p.rotation.z = Math.PI / 2; p.position.y = 1.54; g.add(p);
    [-1.05, 1.05].forEach((x) => { const b = mesh(geo('o-pipeb', () => new THREE.CylinderGeometry(0.43, 0.43, 0.3, 12)), lam(0xe0334f, { emissive: 0x4a0a14 })); b.rotation.z = Math.PI / 2; b.position.set(x, 1.54, 0); g.add(b); });
    [-1.45, 1.45].forEach((x) => { const s = mesh(geo('o-pipes', () => new THREE.BoxGeometry(0.22, 9, 0.22)), lam(0x5c6b76)); s.position.set(x, 6.4, 0); g.add(s); });
  } else if (kind === 'lowBeam') {
    const mStripe = matCache.orgBar || (matCache.orgBar = new THREE.MeshLambertMaterial({ map: T.orangeStripes, flatShading: true }));
    const board = mesh(geo('o-lbeam', () => new THREE.BoxGeometry(3.0, 1.45, 0.65)), lam(0x281e2a)); board.position.y = 2.02; g.add(board);
    const strip = mesh(geo('o-lbeams', () => new THREE.BoxGeometry(3.04, 0.36, 0.7)), mStripe); strip.position.y = 1.48; g.add(strip);
    const laser = mesh(geo('o-lbeaml', () => new THREE.BoxGeometry(2.9, 0.08, 0.72)), new THREE.MeshBasicMaterial({ color: COLORS.danger })); laser.position.y = 1.24; g.add(laser);
    [-1.35, 1.35].forEach((x) => {
      const s = mesh(geo('o-lbeamp', () => new THREE.BoxGeometry(0.24, 8, 0.24)), lam(0x4a5560)); s.position.set(x, 6.5, 0); g.add(s);
    });
    beacon = mesh(geo('o-lbeamb', () => new THREE.SphereGeometry(0.2, 8, 6)), new THREE.MeshBasicMaterial({ color: 0xff3b5c }));
    beacon.position.set(-1.35, 1.45, 0.45); g.add(beacon);
  }

  g.userData.beacon = beacon;
  return g;
}

/* ---------------- 3D ECO BOSS ENTITY (3 varian pooled, 0 alokasi runtime) ---------------- */
export function createBossEntity(scene) {
  const T = textures();
  const root = new THREE.Group();
  root.visible = false;
  root.position.set(32, 3.8, -0.6);
  scene.add(root);

  // 1. ECO TRASH GIANT: tumpukan monster sampah raksasa dengan mata merah menyala
  const trashGiant = new THREE.Group();
  const tgCore = mesh(new THREE.DodecahedronGeometry(2.2, 0), lam(0x2f3b35)); trashGiant.add(tgCore);
  [[-1.3, -0.8, 0.4, 1.15], [1.2, -0.9, -0.3, 1.1], [0.4, 1.5, 0.2, 1.25], [-0.9, 1.2, -0.2, 1.0]].forEach(([x, y, z, r]) => {
    const m = mesh(new THREE.DodecahedronGeometry(r, 0), lam(0x414f47)); m.position.set(x, y, z); trashGiant.add(m);
  });
  const eyeMatR = new THREE.MeshBasicMaterial({ color: 0xff3b5c });
  const tgEye1 = mesh(new THREE.BoxGeometry(0.55, 0.28, 0.3), eyeMatR); tgEye1.position.set(-1.85, 0.45, 0.6); trashGiant.add(tgEye1);
  const tgEye2 = mesh(new THREE.BoxGeometry(0.55, 0.28, 0.3), eyeMatR); tgEye2.position.set(-1.85, 0.45, -0.3); trashGiant.add(tgEye2);
  const tgMouth = mesh(new THREE.BoxGeometry(0.4, 0.35, 1.3), new THREE.MeshBasicMaterial({ color: 0xff9d2e })); tgMouth.position.set(-1.95, -0.45, 0.15); trashGiant.add(tgMouth);
  root.add(trashGiant);

  // 2. PLASTIC MONSTER: inti energi plastik beracun dengan cincin & tentakel berputar
  const plasticMonster = new THREE.Group();
  const pmCore = mesh(new THREE.OctahedronGeometry(1.75, 0), lam(0x6b228c, { emissive: 0x3b0c52 })); plasticMonster.add(pmCore);
  const pmRingA = mesh(new THREE.TorusGeometry(2.45, 0.16, 8, 24), new THREE.MeshBasicMaterial({ color: COLORS.magenta })); plasticMonster.add(pmRingA);
  const pmRingB = mesh(new THREE.TorusGeometry(2.05, 0.12, 8, 24), new THREE.MeshBasicMaterial({ color: COLORS.cyan })); pmRingB.rotation.x = Math.PI / 2; plasticMonster.add(pmRingB);
  const pmEye = mesh(new THREE.SphereGeometry(0.55, 10, 8), new THREE.MeshBasicMaterial({ color: 0x19d4ff })); pmEye.position.set(-1.55, 0.1, 0); plasticMonster.add(pmEye);
  root.add(plasticMonster);

  // 3. WASTE MACHINE: mesin industri berat dengan garis bahaya & corong pembuangan
  const wasteMachine = new THREE.Group();
  const wmBody = mesh(new THREE.BoxGeometry(3.4, 2.8, 2.2), lam(0x3a424a)); wasteMachine.add(wmBody);
  const wmStripe = mesh(new THREE.BoxGeometry(3.48, 0.55, 2.26), new THREE.MeshLambertMaterial({ map: T.orangeStripes, flatShading: true }));
  wmStripe.position.y = -0.8; wasteMachine.add(wmStripe);
  const wmStack = mesh(new THREE.CylinderGeometry(0.35, 0.45, 1.6, 8), lam(0x23282d)); wmStack.position.set(0.6, 2.0, 0); wasteMachine.add(wmStack);
  const wmCannon = mesh(new THREE.CylinderGeometry(0.48, 0.58, 1.4, 10), lam(0x20262b)); wmCannon.rotation.z = Math.PI / 2; wmCannon.position.set(-2.1, -0.35, 0); wasteMachine.add(wmCannon);
  const wmCore = mesh(new THREE.SphereGeometry(0.5, 10, 8), new THREE.MeshBasicMaterial({ color: 0xff9d2e })); wmCore.position.set(-1.72, 0.55, 0.4); wasteMachine.add(wmCore);
  const wmGear = mesh(new THREE.TorusGeometry(1.1, 0.15, 6, 12), lam(0x7c8a96)); wmGear.position.set(0.2, 0.2, 1.2); wasteMachine.add(wmGear);
  root.add(wasteMachine);

  const variants = { trash_giant: trashGiant, plastic_monster: plasticMonster, waste_machine: wasteMachine };
  let activeVariant = 'trash_giant', targetX = 32, recoil = 0, scaleBase = 1;

  function show(variantId, diffId) {
    activeVariant = variants[variantId] ? variantId : 'trash_giant';
    for (const k in variants) variants[k].visible = (k === activeVariant);
    scaleBase = diffId === 'ultimate' ? 1.18 : diffId === 'hard' ? 1.08 : diffId === 'easy' ? 0.92 : 1.0;
    root.visible = true;
    targetX = 16.8;
    recoil = 0;
  }

  function hide() { targetX = 33; }
  function pulseAttack() { recoil = 1.0; }

  function update(dt, tNow, active) {
    if (!root.visible) return;
    const goal = active ? targetX : 33;
    root.position.x += (goal - root.position.x) * Math.min(1, dt * 3.2);
    if (recoil > 0) recoil = Math.max(0, recoil - dt * 4.5);
    const kick = Math.sin(recoil * Math.PI) * 1.1;
    root.position.y = 3.8 + Math.sin(tNow * 2.6) * 0.45;
    root.scale.setScalar(scaleBase * (1 + kick * 0.08));
    if (activeVariant === 'trash_giant') {
      trashGiant.rotation.z = Math.sin(tNow * 2.2) * 0.1 + kick * 0.15;
    } else if (activeVariant === 'plastic_monster') {
      pmCore.rotation.y = tNow * 1.8;
      pmRingA.rotation.z = tNow * 2.6;
      pmRingB.rotation.y = -tNow * 3.1;
      plasticMonster.position.x = -kick * 0.7;
    } else {
      wmGear.rotation.z = -tNow * 3.4;
      wasteMachine.position.x = -kick * 0.6;
    }
    if (!active && root.position.x > 31.5) root.visible = false;
  }

  return { root, show, hide, pulseAttack, update };
}
