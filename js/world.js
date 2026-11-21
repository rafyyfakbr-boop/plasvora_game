// world.js - kota malam berlapis (parallax): langit, bulan, gedung jauh, gedung tengah, properti pinggir jalan, jalan.
// Lapisan bergeser dengan faktor berbeda sehingga kecepatan terasa naik saat game makin cepat.
import * as THREE from 'three';
import { RNG, canvasTexture, roundRect, lerp } from './util.js';
import { COLORS } from './models.js';

const BG = new THREE.Color(0x041512);
const BG_BOSS = new THREE.Color(0x24070f);
const HEMI = new THREE.Color(0x9fe8ff);
const HEMI_BOSS = new THREE.Color(0xff8a9a);

function windowTexture(seed, lit) {
  const rng = new RNG(seed);
  return canvasTexture(256, 512, (c, w, h) => {
    c.fillStyle = '#000'; c.fillRect(0, 0, w, h);
    const cols = ['#ffe59a', '#9fffe0', '#7fd8ff', '#ffd27a'];
    for (let y = 0; y < 16; y++) for (let x = 0; x < 8; x++) {
      if (rng.next() < lit) { c.fillStyle = rng.pick(cols); c.globalAlpha = 0.6 + rng.next() * 0.4; c.fillRect(x * 32 + 8, y * 32 + 9, 16, 14); }
    }
    c.globalAlpha = 1;
  }, { repeat: true });
}

function building(rng, w, h, d, mat, neon) {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * (w / 6), uv.getY(i) * (h / 8));
  const m = new THREE.Mesh(g, mat);
  m.position.y = h / 2;
  const grp = new THREE.Group(); grp.add(m);
  if (neon) {
    const l = new THREE.Mesh(new THREE.BoxGeometry(w + 0.1, 0.12, d + 0.1), new THREE.MeshBasicMaterial({ color: neon }));
    l.position.y = h; grp.add(l);
  }
  if (rng.chance(0.4)) { // antena
    const a = new THREE.Mesh(new THREE.BoxGeometry(0.12, rng.range(1.5, 3.5), 0.12), new THREE.MeshLambertMaterial({ color: 0x0a2a2a }));
    a.position.set(rng.range(-w / 3, w / 3), h + 1, 0); grp.add(a);
  }
  return grp;
}

function iconSign(kind, color) {
  const tex = canvasTexture(256, 128, (c, w, h) => {
    c.fillStyle = '#02130f'; roundRect(c, 4, 4, w - 8, h - 8, 16); c.fill();
    c.strokeStyle = color; c.lineWidth = 6; roundRect(c, 4, 4, w - 8, h - 8, 16); c.stroke();
    c.fillStyle = color; c.textAlign = 'center'; c.textBaseline = 'middle';
    if (kind === 'text') { c.font = '900 52px "Arial Black",Impact,sans-serif'; c.fillText('PLASVORA', w / 2, h / 2 - 8); c.font = '700 20px Arial'; c.fillStyle = '#d9fff0'; c.fillText('Recycle • Reuse • Reimagine', w / 2, h / 2 + 34); }
    else { c.font = '900 86px "Segoe UI Symbol","DejaVu Sans",Arial,sans-serif'; c.fillText('♻', w / 2, h / 2 + 4); }
  });
  return tex;
}

class Layer {
  constructor(scene, tileW, factor, builder, z, n = 4) {
    this.tileW = tileW; this.factor = factor; this.n = n; this.scroll = 0;
    this.tiles = [];
    for (let i = 0; i < n; i++) { const g = builder(i); g.position.z = z; scene.add(g); this.tiles.push(g); }
    this.place();
  }
  update(dx) { this.scroll += dx * this.factor; this.place(); }
  place() {
    const base = Math.floor(this.scroll / this.tileW), frac = this.scroll - base * this.tileW;
    for (let k = 0; k < this.n; k++) {
      const idx = (((base + k) % this.n) + this.n) % this.n;
      this.tiles[idx].position.x = -this.tileW + k * this.tileW - frac;
    }
  }
}

export class World {
  constructor(scene) {
    this.scene = scene;
    this.dist = 0; this.bossF = 0; this.t = 0;
    const seed = Math.floor(Math.random() * 1e9);

    scene.background = BG.clone();
    scene.fog = new THREE.Fog(0x061714, 55, 170);

    this.hemi = new THREE.HemisphereLight(HEMI.getHex(), 0x0b2a24, 1.55);
    scene.add(this.hemi);
    const sun = new THREE.DirectionalLight(0xcfeaff, 1.7); sun.position.set(-6, 14, 12); scene.add(sun);

    this.buildSky(seed);
    this.buildLayers(seed);
    this.buildRoad();
  }

  buildSky(seed) {
    const rng = new RNG(seed);
    // bintang
    const n = 260, pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { pos[i * 3] = rng.range(-90, 90); pos[i * 3 + 1] = rng.range(6, 55); pos[i * 3 + 2] = -110; }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: 0.55, sizeAttenuation: true, transparent: true, opacity: 0.8, fog: false }));
    this.stars.position.x = 5; this.scene.add(this.stars);

    // bulan + halo
    this.moon = new THREE.Group();
    const disc = new THREE.Mesh(new THREE.CircleGeometry(4.2, 32), new THREE.MeshBasicMaterial({ color: 0xd9fff0, fog: false }));
    this.moon.add(disc);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: canvasTexture(128, 128, (c) => { const g = c.createRadialGradient(64, 64, 8, 64, 64, 62); g.addColorStop(0, 'rgba(150,255,210,.55)'); g.addColorStop(1, 'rgba(60,255,170,0)'); c.fillStyle = g; c.fillRect(0, 0, 128, 128); }),
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    halo.scale.setScalar(22); halo.position.z = -0.1; this.moon.add(halo);
    this.moonDisc = disc;
    this.moon.position.set(25, 11, -100); this.scene.add(this.moon);
  }

  buildLayers(seed) {
    const scene = this.scene;
    const farMat = new THREE.MeshLambertMaterial({ color: 0x082a2d, emissive: 0xffffff, emissiveMap: windowTexture(seed + 1, 0.28), emissiveIntensity: 0.5, flatShading: true });
    const midMat = new THREE.MeshLambertMaterial({ color: 0x0b3a35, emissive: 0xffffff, emissiveMap: windowTexture(seed + 2, 0.38), emissiveIntensity: 0.8, flatShading: true });

    // gedung jauh
    this.far = new Layer(scene, 40, 0.1, (i) => {
      const rng = new RNG(seed + 100 + i), g = new THREE.Group(); let x = 0;
      while (x < 40) {
        const w = rng.range(5, 9), h = rng.range(12, 32), b = building(rng, w, h, 6, farMat, rng.chance(0.4) ? COLORS.neon : 0);
        b.position.x = x + w / 2; g.add(b); x += w + rng.range(0.5, 2);
      }
      if (i === 1) { // satu billboard teks PLASVORA, ditaruh rendah supaya tidak bertabrakan dengan HUD
        const s = new THREE.Mesh(new THREE.PlaneGeometry(14, 7), new THREE.MeshBasicMaterial({ map: iconSign('text', '#39ffa0'), transparent: true, opacity: 0.9 }));
        s.position.set(20, 8, 3.2); g.add(s);
      }
      return g;
    }, -52);

    // gedung tengah
    this.mid = new THREE.Group(); // (hanya penampung agar mudah diatur)
    this.midLayer = new Layer(scene, 30, 0.34, (i) => {
      const rng = new RNG(seed + 200 + i), g = new THREE.Group(); let x = 0;
      while (x < 30) {
        const w = rng.range(4, 7), h = rng.range(7, 17), b = building(rng, w, h, 5, midMat, rng.chance(0.5) ? COLORS.cyan : COLORS.neon);
        b.position.x = x + w / 2; g.add(b); x += w + rng.range(0.4, 1.5);
        if (rng.chance(0.3)) { // papan ikon daur ulang di wajah gedung
          const s = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.2), new THREE.MeshBasicMaterial({ map: iconSign('icon', rng.chance(0.5) ? '#39ffa0' : '#19d4ff'), transparent: true, opacity: 0.85 }));
          s.position.set(b.position.x, rng.range(3.5, 5), 2.6); g.add(s);
        }
      }
      return g;
    }, -24);

    // properti pinggir jalan (ikut kecepatan dunia)
    const barkMat = new THREE.MeshLambertMaterial({ color: 0x3b2a1c });
    const leafMats = [0x1a8f55, 0x22b36a, 0x14794a].map((c) => new THREE.MeshLambertMaterial({ color: c, flatShading: true }));
    const poleMat = new THREE.MeshLambertMaterial({ color: 0x12403a });
    const bulbMat = new THREE.MeshBasicMaterial({ color: 0xd6fff0 });
    const binColors = [0x2f8de0, 0xe0b52f, 0x2fb36a];
    const trashColors = [0xcfeaf2, 0xffffff, 0xffb36b, 0x8ee3a1];
    this.near = new Layer(scene, 22, 1.0, (i) => {
      const rng = new RNG(seed + 300 + i), g = new THREE.Group();
      const lamp = (x) => {
        const p = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 5, 6), poleMat); p.position.set(x, 2.8, 0); g.add(p);
        const arm = new THREE.Mesh(new THREE.BoxGeometry(1, 0.08, 0.08), poleMat); arm.position.set(x + 0.45, 5.3, 0); g.add(arm);
        const b = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), bulbMat); b.position.set(x + 0.9, 5.2, 0); g.add(b);
      };
      const tree = (x) => {
        const t = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 2, 6), barkMat); t.position.set(x, 1.3, 0); g.add(t);
        for (let k = 0; k < 3; k++) { const l = new THREE.Mesh(new THREE.IcosahedronGeometry(rng.range(0.9, 1.3), 0), leafMats[k]); l.position.set(x + rng.range(-0.6, 0.6), 2.8 + rng.range(0, 1.1), rng.range(-0.3, 0.3)); g.add(l); }
      };
      const bins = (x) => binColors.forEach((c, k) => {
        const b = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.33, 1, 8), new THREE.MeshLambertMaterial({ color: c, flatShading: true })); b.position.set(x + k * 0.95, 0.7, 0); g.add(b);
      });
      const trash = (x) => { for (let k = 0; k < 5; k++) { const m = new THREE.Mesh(new THREE.BoxGeometry(rng.range(0.2, 0.4), 0.15, 0.2), new THREE.MeshLambertMaterial({ color: rng.pick(trashColors) })); m.position.set(x + rng.range(-0.8, 0.8), 0.38, rng.range(-0.6, 1.2)); m.rotation.y = rng.range(0, 3); g.add(m); } };
      lamp(2); lamp(13);
      tree(6 + rng.range(-1, 1)); tree(17 + rng.range(-1, 1));
      if (i % 2 === 0) bins(8.5 + rng.range(0, 1)); else trash(9 + rng.range(0, 2));
      trash(15 + rng.range(0, 2)); if (i % 3 === 0) trash(20);
      return g;
    }, -6.5);
  }

  buildRoad() {
    const scene = this.scene;
    const roadTex = canvasTexture(512, 256, (c, w, h) => {
      c.fillStyle = '#0d1f1d'; c.fillRect(0, 0, w, h);
      const rng = new RNG(5);
      for (let i = 0; i < 700; i++) { c.fillStyle = 'rgba(255,255,255,' + (0.02 + rng.next() * 0.05) + ')'; c.fillRect(rng.next() * w, rng.next() * h, 2, 2); }
      c.fillStyle = 'rgba(220,255,240,.5)'; c.fillRect(0, 118, 230, 8);   // garis putus tengah
    }, { repeat: true });
    roadTex.repeat.set(260 / 8, 1);
    this.roadTex = roadTex;
    const road = new THREE.Mesh(new THREE.PlaneGeometry(260, 16), new THREE.MeshLambertMaterial({ map: roadTex }));
    road.rotation.x = -Math.PI / 2; road.position.set(5, 0, 4); scene.add(road);

    const walk = new THREE.Mesh(new THREE.BoxGeometry(260, 0.3, 5.5), new THREE.MeshLambertMaterial({ color: 0x1f6b5b }));
    walk.position.set(5, 0.15, -6.55); scene.add(walk);
    this.edge = new THREE.Mesh(new THREE.BoxGeometry(260, 0.06, 0.1), new THREE.MeshBasicMaterial({ color: COLORS.neon }));
    this.edge.position.set(5, 0.33, -3.85); scene.add(this.edge);
    const behind = new THREE.Mesh(new THREE.PlaneGeometry(260, 60), new THREE.MeshLambertMaterial({ color: 0x04120f }));
    behind.rotation.x = -Math.PI / 2; behind.position.set(5, -0.03, -40); scene.add(behind);
  }

  // dx = jarak dunia bergeser frame ini; bossTarget 0..1 untuk nuansa Eco Boss
  update(dt, dx, bossTarget) {
    this.t += dt; this.dist += dx;
    this.far.update(dx); this.midLayer.update(dx); this.near.update(dx);
    this.roadTex.offset.x = (this.dist / 8) % 1;
    this.bossF += (bossTarget - this.bossF) * Math.min(1, dt * 2.5);
    const f = this.bossF;
    this.scene.background.copy(BG).lerp(BG_BOSS, f);
    this.scene.fog.color.copy(this.scene.background);
    this.hemi.color.copy(HEMI).lerp(HEMI_BOSS, f * 0.6);
    this.edge.material.color.setHex(f > 0.5 ? COLORS.danger : COLORS.neon);
    this.moonDisc.material.color.setHex(f > 0.5 ? 0xffb0b8 : 0xd9fff0);
    this.moon.position.y = 11 + Math.sin(this.t * 0.3) * 0.3;
  }
}
