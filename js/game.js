// game.js - inti permainan: renderer, state machine, loop, tabrakan, boss, game over, hadiah
import * as THREE from 'three';
import { C, rankFor, speedMultAt } from './config.js';
import { STATE } from './states.js';
import { World } from './world.js';
import { Player } from './player.js';
import { Spawner } from './spawner.js';
import { ScoreSystem } from './score.js';
import { Effects } from './effects.js';
import { Input } from './input.js';
import { Sound } from './audio.js';
import { UI } from './ui.js';
import { Settings } from './storage.js';
import { Leaderboard } from './leaderboard.js';
import { Reward } from './reward.js';
import { obstacleBox, grabBox, bodyBox, overlap } from './collision.js';
import { clamp, newSeed, seedCode } from './util.js';

const W = C.WORLD;
const CAM_BASE = new THREE.Vector3(5, 3.6, 20);
const TIER_COLOR = { normal: 0x7dff9e, rare: 0x19d4ff, gold: 0xffd23f };

export function createGame() {
  const stage = document.getElementById('stage');
  const canvas = document.getElementById('gl');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 16 / 9, 0.5, 300);
  camera.position.copy(CAM_BASE);

  const world = new World(scene);
  const player = new Player(scene);
  const spawner = new Spawner(scene);
  const score = new ScoreSystem();
  const fx = new Effects(scene, document.getElementById('flash'));

  const g = {
    state: STATE.MENU, prev: STATE.MENU, returnTo: 'menu',
    t: 0, lives: C.LIVES, seed: 0, name: 'PLAYER', high: 0,
    speedMult: 1, curSpeed: 0, bossDone: false, boss: { active: false, left: 0, total: 0 },
    cdT: 0, cdN: 4, overT: 0, tagT: 0, pauseCd: 0, last: null, res: null, tNow: 0, hint: 0
  };
  const tmp = new THREE.Vector3(), v2 = new THREE.Vector2();
  const bb = { x: 0, y: 0, hw: 0, hh: 0 }, ob = { x: 0, y: 0, hw: 0, hh: 0 }, gb = { x: 0, y: 0, hw: 0, hh: 0 }, it = { x: 0, y: 0, hw: 0.5, hh: 0.5 };

  /* ---------- ukuran ---------- */
  function resize() {
    const w = stage.clientWidth || 1280, h = stage.clientHeight || 720;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(stage);
  window.addEventListener('resize', resize);
  resize();

  const inRun = () => g.state === STATE.PLAYING || g.state === STATE.BOSS;
  const setState = (s) => { g.prev = g.state; g.state = s; };

  /* ---------- posisi layar untuk teks melayang ---------- */
  function screenPct(x, y, out) {
    tmp.set(x, y, 0).project(camera);
    out.x = (tmp.x * 0.5 + 0.5) * 100; out.y = (-tmp.y * 0.5 + 0.5) * 100; return out;
  }

  /* ---------- siklus permainan ---------- */
  function startRun(name) {
    g.name = (String(name || '').trim().toUpperCase().slice(0, 10)) || 'PLAYER';
    g.seed = newSeed();
    spawner.reset(g.seed); score.reset(); player.reset(); fx.reset();
    g.t = 0; g.lives = C.LIVES; g.bossDone = false; g.boss = { active: false, left: 0, total: 0 };
    g.speedMult = 1; g.curSpeed = W.BASE_SPEED; g.high = Leaderboard.best(); g.res = null; g.hint = 7;
    world.bossF = 0;
    UI.resetHudCache(); UI.feedback.clear(); UI.hudShow(true); UI.show('none');
    UI.runTag('NEW RUN • NEW LAYOUT ' + seedCode(g.seed)); g.tagT = 4;
    g.cdT = 0; g.cdN = 4;
    setState(STATE.COUNTDOWN);
    Input.setActive(false);
    Sound.startMusic('run'); Sound.setMode('run');
  }

  function stepCountdown(rdt) {
    g.cdT -= rdt;
    if (g.cdT <= 0) {
      g.cdN--;
      if (g.cdN > 0) { UI.countdown(String(g.cdN)); Sound.tick(false); g.cdT = 0.8; }
      else if (g.cdN === 0) { UI.countdown('GO!'); Sound.tick(true); g.cdT = 0.6; Input.setActive(true); Input.clear(); }
      else { UI.hideCountdown(); setState(STATE.PLAYING); }
    }
  }

  function pause() {
    if (!inRun()) return;
    setState(STATE.PAUSED); Input.setActive(false);
    UI.show('pause');
  }
  function resume() {
    if (g.state !== STATE.PAUSED && !(g.state === STATE.SETTINGS && g.returnTo === 'pause')) return;
    g.state = g.boss.active ? STATE.BOSS : STATE.PLAYING;
    UI.show('none'); g.pauseCd = 0.3; Input.setActive(true); Input.clear();
  }

  function startBoss() {
    g.boss = { active: true, left: spawner.director.bossTime, total: spawner.director.bossTime };
    spawner.clearAhead(16);
    setState(STATE.BOSS);
    UI.feedback.push({ text: 'ECO BOSS!', sub: 'Bertahan ' + g.boss.total + ' detik', cls: 'boss', dur: C.BOSS.WARN, prio: 6 });
    Sound.boss(); Sound.setMode('boss');
    fx.shake(0.25, 0.5); fx.flash('#ff2a4d', 0.3);
  }
  function endBoss() {
    g.boss.active = false; g.bossDone = true; setState(STATE.PLAYING);
    const p = score.addBonus(C.BOSS.BONUS, false);
    UI.bumpScore();
    UI.feedback.push({ text: 'BOSS CLEARED!', sub: '+' + p + ' BONUS', cls: 'gold', dur: 1.8, prio: 5 });
    Sound.bossWin(); Sound.setMode('run');
    fx.burst(1, 2.5, 1, 0xffd23f, 40, 8); fx.ring(0, 1.5, 0xffd23f, 4);
  }

  function gameOver() {
    setState(STATE.GAME_OVER); g.overT = 1.1; Input.setActive(false);
    g.boss.active = false;
    Sound.stopMusic(); Sound.gameOver();
    UI.feedback.clear();
  }
  function finishOver() {
    const sc = Math.floor(score.score), rank = rankFor(sc);
    const r = Leaderboard.add({ name: g.name, score: sc, distance: score.meters, plastic: score.plastic, rank: rank.id, comboMax: score.comboMax });
    g.res = {
      name: g.name, score: sc, meters: score.meters, plastic: score.plastic, maxLevel: score.maxLevel,
      rank, position: r.position, isTop1: r.isTop1, entry: r.entry
    };
    UI.hudShow(false); UI.show('none');
    setState(STATE.GAME_OVER);
    player.reset(); player.idle = true; spawner.reset(1); fx.reset();
    Sound.startMusic('menu'); Sound.setMode('menu');
    UI.showOver(g.res);
  }

  function claim() {
    const r = g.res; if (!r) return;
    const c = Reward.claim(r.entry.id, r.score, r.name);
    if (c.ok || c.reason === 'claimed') {
      setState(STATE.REWARD);
      UI.showClaim({ rank: c.rank, prize: c.prize, code: c.code }, r);
    } else UI.showOver(r, false);
  }

  function toMenu() {
    UI.hudShow(false); UI.show('menu'); setState(STATE.MENU);
    player.reset(); player.idle = true; spawner.reset(1); fx.reset(); Input.setActive(false);
    Sound.startMusic('menu'); Sound.setMode('menu');
  }

  function go(st) {
    const from = g.state;
    if (from === STATE.PAUSED) g.returnTo = 'pause'; else g.returnTo = 'menu';
    if (from === STATE.GAME_OVER || from === STATE.REWARD) g.returnTo = 'over';
    setState(st);
    if (st === STATE.LEADERBOARD) { UI.renderLB(g.res ? g.res.entry.id : null); UI.show('lb'); }
    else if (st === STATE.HOW_TO_PLAY) UI.show('how');
    else if (st === STATE.SETTINGS) { UI.syncSettings(); UI.show('set'); }
  }
  function back() {
    const rt = g.returnTo;
    if (rt === 'pause') { g.state = STATE.PAUSED; UI.show('pause'); }
    else if (rt === 'over' && g.res) { g.state = STATE.GAME_OVER; UI.showOver(g.res, false); }
    else toMenu();
  }

  /* ---------- tabrakan dan item ---------- */
  function hitObstacle(o) {
    o.hit = true;
    const cx = o.x + o.def.hitDx, cy = o.def.hitY;
    if (player.speed > 0) {
      o.x = W.DESPAWN_X - 1;
      score.addBonus(C.SCORE.smash, player.boost > 0);
      fx.burst(cx, cy, 0.5, 0xffb347, 22, 9); fx.shake(0.12, 0.15); Sound.smash();
      return;
    }
    if (player.shield) {
      player.shield = false; player.inv = 1; o.x = W.DESPAWN_X - 1;
      fx.ring(player.x, 1, 0x19d4ff, 4); fx.burst(player.x, 1, 0.5, 0x19d4ff, 26, 8); fx.shake(0.12, 0.2); Sound.shield();
      return;
    }
    g.lives--; score.breakCombo(); player.hurt();
    fx.shake(0.4, 0.4); fx.flash('#ff2a4d', 0.4); fx.burst(player.x, 1, 0.5, 0xff4d5e, 24, 7);
    Sound.hit();
    if (g.lives <= 0) { gameOver(); return; }
    UI.feedback.push({ text: 'OUCH!', cls: 'boss', dur: 0.9, prio: 7 });
  }

  function collectLoot(o) {
    o.taken = true; player.pickup();
    const r = score.collect(o.tier, player.boost > 0);
    UI.bumpScore();
    const col = TIER_COLOR[o.tier];
    fx.burst(o.x, o.y, 0.5, col, o.tier === 'gold' ? 26 : o.tier === 'rare' ? 18 : 10, o.tier === 'normal' ? 4 : 6);
    const p = screenPct(player.x, player.y + 2.4, v2);
    if (o.tier === 'normal') { Sound.collect(r.level); UI.floatAt('+' + r.pts + ' PLASTIC', 'normal', p.x, p.y); }
    else if (o.tier === 'rare') { Sound.rare(); fx.ring(o.x, o.y, col, 2.4); UI.floatAt('+' + r.pts + ' RARE', 'rare', p.x, p.y); }
    else {
      Sound.gold(); fx.ring(o.x, o.y, col, 3.4); fx.slowmo(0.45, 0.22); fx.shake(0.08, 0.15);
      UI.feedback.push({ text: 'GOLD +' + r.pts, cls: 'gold', dur: 0.9, prio: 3 });
    }
    if (r.levelUp) {
      Sound.combo(r.level);
      UI.feedback.push({ text: 'COMBO x' + (r.level + 1), cls: 'green', dur: 1.0, prio: 4 });
    }
  }

  const PW_LABEL = { boost: 'ECO BOOST', magnet: 'ECO MAGNET', shield: 'ECO SHIELD', speed: 'SPEED BOOST' };
  function collectPower(o) {
    o.taken = true; player.pickup();
    if (o.kind === 'boost') player.boost = C.POWER.boost;
    else if (o.kind === 'magnet') player.magnet = C.POWER.magnet;
    else if (o.kind === 'shield') player.shield = true;
    else { player.speed = C.POWER.speed; score.addBonus(C.SCORE.speedBoostBonus, player.boost > 0); }
    score.addBonus(C.SCORE.power, false);
    Sound.power(); fx.ring(player.x, 1, 0xffd23f, 3.4); fx.burst(player.x, 1.2, 0.5, 0xffffff, 16, 6);
    const p = screenPct(player.x, player.y + 2.4, v2);
    UI.floatAt(PW_LABEL[o.kind], 'info', p.x, p.y);
  }

  function interactions(gdt) {
    bodyBox(player, bb);
    if (player.inv <= 0 && player.hitT <= 0) {
      for (const o of spawner.obstacles) {
        if (o.hit || o.x > 3 || o.x < -3) continue;
        if (overlap(bb, obstacleBox(o, ob))) { hitObstacle(o); if (!inRun()) return; }
      }
    }
    for (const o of spawner.obstacles) if (!o.passed && o.x + o.def.hitDx + o.def.hitW / 2 < player.x - 0.5) { o.passed = true; score.cleared++; }
    grabBox(player, gb);
    const magnet = player.magnet > 0, cy = player.y + 1;
    for (const o of spawner.loot) {
      if (o.taken) continue;
      if (magnet && o.x < 12 && o.x > -1) {
        const dx = player.x - o.x, dy = cy - o.y, d = Math.hypot(dx, dy);
        if (d < 8) { const k = Math.min(1, gdt * 9); o.x += dx * k; o.y += dy * k; }
      }
      it.x = o.x; it.y = o.y;
      if (overlap(gb, it)) collectLoot(o);
    }
    for (const o of spawner.powers) {
      if (o.taken) continue;
      it.x = o.x; it.y = o.y; it.hw = 0.7; it.hh = 0.7;
      const hit = overlap(gb, it); it.hw = 0.5; it.hh = 0.5;
      if (hit) collectPower(o);
    }
  }

  /* ---------- loop ---------- */
  function updateCamera(rdt, speedF) {
    const t = g.tNow;
    camera.position.x = CAM_BASE.x + Math.sin(t * 0.5) * 0.18;
    camera.position.y = CAM_BASE.y + player.y * 0.1 + Math.sin(t * 0.7) * 0.05;
    camera.position.z = CAM_BASE.z - (speedF - 1) * 1.2;
    fx.shakeOffset(v2); camera.position.x += v2.x; camera.position.y += v2.y;
    camera.lookAt(5.4, 2.2 + player.y * 0.12, 0);
  }

  function hud() {
    UI.setHud({
      score: score.score, high: g.high, meters: score.meters, plastic: score.plastic, speed: g.speedMult,
      lives: g.lives, level: score.level, boss: g.boss, hint: g.hint > 0 && inRun(),
      powers: { boost: player.boost, magnet: player.magnet, shield: player.shield, speed: player.speed }
    });
  }

  function frame(now) {
    requestAnimationFrame(frame);
    const rdt = g.last === null ? 0.016 : Math.min(0.05, (now - g.last) / 1000);
    g.last = now;
    step(rdt, true);
  }

  function step(rdt, draw) {
    g.tNow += rdt;
    if (g.pauseCd > 0) g.pauseCd -= rdt;
    const s = g.state;
    let speedF = 1;

    if (s === STATE.PLAYING || s === STATE.BOSS) {
      if (g.pauseCd <= 0 && Input.takePause()) { pause(); }
      else {
        if (g.pauseCd > 0) Input.takePause();
        const gdt = rdt * fx.timeScale();
        g.t += gdt; if (g.hint > 0) g.hint -= gdt;
        g.speedMult = speedMultAt(g.t);
        const target = W.BASE_SPEED * g.speedMult * (g.boss.active ? C.BOSS.SPEED_MULT : 1) * (player.speed > 0 ? 1.35 : 1);
        g.curSpeed += (target - g.curSpeed) * Math.min(1, gdt * 4);
        const dx = g.curSpeed * gdt;
        speedF = g.curSpeed / W.BASE_SPEED;

        const ev = player.update(gdt, Input.takeJump(), Input.slideHeld());
        if (ev.jumped) { Sound.jump(); fx.burst(player.x - 0.2, 0.1, 0.4, 0xbfffe8, 6, 3); }
        if (ev.landed) { Sound.land(); fx.burst(player.x, 0.1, 0.4, 0xbfffe8, 6, 3); }
        if (ev.slideStart) Sound.slide();

        score.addDistance(dx, player.boost > 0, player.speed > 0);
        spawner.update(gdt, dx, { t: g.t, boss: g.boss.active, speed: g.curSpeed }, g.tNow);
        interactions(gdt);

        if (g.state !== STATE.GAME_OVER) {
          if (!g.bossDone && !g.boss.active && score.score >= spawner.director.bossScore) startBoss();
          if (g.boss.active) { g.boss.left -= gdt; if (g.boss.left <= 0) endBoss(); }
          world.update(gdt, dx, g.boss.active ? 1 : 0);
          fx.update(gdt, rdt, g.curSpeed, clamp((g.curSpeed / W.BASE_SPEED - 1.15) * 1.6, 0, 1) + (player.speed > 0 ? 0.6 : 0));
          hud();
        }
        if (g.tagT > 0) { g.tagT -= rdt; if (g.tagT <= 0) UI.runTag(''); }
      }
    } else if (s === STATE.COUNTDOWN) {
      stepCountdown(rdt);
      const dx = W.BASE_SPEED * 0.6 * rdt;
      player.update(rdt, false, false);
      world.update(rdt, dx, 0); fx.update(rdt, rdt, W.BASE_SPEED, 0);
      hud();
      if (g.tagT > 0) { g.tagT -= rdt; if (g.tagT <= 0) UI.runTag(''); }
    } else if (s === STATE.GAME_OVER && g.overT > 0) {
      // tabrakan terakhir: dunia melambat lalu layar hasil muncul
      g.overT -= rdt; g.curSpeed *= 0.94;
      const dx = g.curSpeed * rdt;
      player.update(rdt, false, false);
      world.update(rdt, dx, 0); spawner.update(0, dx, { t: g.t, boss: false, speed: 1 }, g.tNow);
      fx.update(rdt, rdt, 0, 0);
      if (g.overT <= 0) finishOver();
    } else if (s === STATE.PAUSED || (s === STATE.SETTINGS && g.returnTo === 'pause')) {
      fx.update(0, rdt, 0, 0);
    } else {
      // latar saat menu, hasil, leaderboard
      player.idle = true; player.update(rdt, false, false);
      world.update(rdt, 3.2 * rdt, 0); fx.update(rdt, rdt, 0, 0);
    }

    UI.feedback.update(rdt);
    updateCamera(rdt, speedF);
    if (draw) renderer.render(scene, camera);
  }

  /* ---------- pause otomatis saat tab disembunyikan ---------- */
  document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
  window.addEventListener('blur', () => pause());

  /* ---------- hubungan dengan UI ---------- */
  const handlers = {
    getState: () => g.state,
    play: (name) => startRun(name),
    playAgain: () => { UI.show('name'); setState(STATE.MENU); },
    restart: () => startRun(g.name),
    resume, back, go, toMenu, claim
  };

  function start() {
    const s = Settings.get(); Sound.setVolumes(s.music, s.sfx);
    UI.init(handlers);
    player.idle = true;
    UI.show('menu');
    requestAnimationFrame(frame);
  }

  // untuk uji otomatis
  window.__plv = { step, g, score, player, spawner, world, fx, startRun, STATE };

  return { start };
}
