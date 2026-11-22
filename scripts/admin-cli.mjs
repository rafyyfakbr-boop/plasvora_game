// scripts/admin-cli.mjs - Admin Manual Mode CLI untuk PLASVORA ECO RUNNER (2 Hadiah: ECO LEGEND & ECO CHAMPION)
// Tidak pernah mengubah file/data tanpa command eksplisit dan konfirmasi manual dari admin.
import { readFileSync, writeFileSync } from 'node:fs';
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dir, '..');
const CFG_PATH = resolve(ROOT, 'js/booth-config.js');
const REWARD_TIERS = ['legend', 'champion'];

function loadConfig() {
  const src = readFileSync(CFG_PATH, 'utf8');
  const m = src.match(/export const BOOTH_CONFIG\s*=\s*(\{[\s\S]*\});?\s*$/);
  if (!m) throw new Error('Format js/booth-config.js tidak valid.');
  return new Function('return (' + m[1] + ');')();
}

function saveConfig(cfg) {
  const header =
    '// booth-config.js - konfigurasi rank progress dan 2 tier hadiah fisik booth (ECO LEGEND & ECO CHAMPION).\n' +
    '// Dapat diubah secara manual oleh panitia melalui Admin Manual Mode (npm run admin:*).\n';
  const body = 'export const BOOTH_CONFIG = ' + JSON.stringify(cfg, null, 2) + ';\n';
  writeFileSync(CFG_PATH, header + body, 'utf8');
}

function rebuildBundle() {
  console.log('\nMembangun ulang bundle game (dist/ & satu-file HTML)...');
  execFileSync(process.execPath, [resolve(ROOT, 'build.mjs')], { cwd: ROOT, stdio: 'inherit' });
}

function printHelp() {
  console.log('\n=== PLASVORA ECO RUNNER — ADMIN MANUAL MODE ===');
  console.log('ADMIN ACTION REQUIRED');
  console.log('Untuk melakukan perubahan secara manual, jalankan command berikut di terminal:\n');
  console.log('  [INFO - READ ONLY]');
  console.log('    npm run admin:status');
  console.log('\n  [UBAH STOK & HADIAH (HANYA 2 TIER HADIAH: LEGEND & CHAMPION)]');
  console.log('    npm run admin:set-stock legend 5');
  console.log('    npm run admin:set-stock champion 1');
  console.log('    npm run admin:set-score legend 7000');
  console.log('    npm run admin:set-score champion 11000');
  console.log('    npm run admin:set-reward <legend|champion> "<nama hadiah>"');
  console.log('\n  [OPERASI DESTRUKTIF — BUTUH KONFIRMASI MANUAL]');
  console.log('    npm run admin:reset-stock');
  console.log('    npm run admin:reset-claims');
  console.log('    npm run admin:reset-leaderboard\n');
}

function printStatus(cfg) {
  console.log('\n=== ADMIN BOOTH — PLASVORA ECO RUNNER ===\n');
  console.log('RANK              HADIAH                     LABEL                 SISA DEFAULT');
  console.log('-------------------------------------------------------------------------------');
  for (const id of REWARD_TIERS) {
    const r = cfg.rewards[id];
    if (!r) continue;
    const rank = r.rank.padEnd(17);
    const prize = r.prize.padEnd(26);
    const badge = (r.badge || '-').padEnd(21);
    const stock = `${r.stock} / ${r.stock}`;
    console.log(`${rank} ${prize} ${badge} ${stock}`);
  }
  console.log('\nProgress Ranks (tanpa hadiah fisik):');
  console.log(`  - ECO HERO (${cfg.ranks.hero.minScore}+ poin)`);
  console.log(`  - ECO GUARDIAN (${cfg.ranks.guardian.minScore}+ poin)`);
  console.log(`  - ECO LEGEND (${cfg.rewards.legend.minScore}+ poin) -> ${cfg.rewards.legend.prize}`);
  console.log(`  - ECO CHAMPION (${cfg.rewards.champion.minScore}+ poin) -> ${cfg.rewards.champion.prize}`);
  console.log('\nRevisi sinkronisasi browser:', cfg.revisions, '\n');
}

async function confirmDestructive(summary) {
  console.log('\n=======================================================');
  console.log('PERINGATAN: COMMAND INI AKAN MENGUBAH DATA BOOTH.');
  console.log('Pastikan Anda ingin melanjutkan sebelum menjalankannya.');
  console.log('=======================================================');
  console.log('Perubahan: ' + summary + '\n');

  if (!input.isTTY) {
    console.log('DIBATALKAN: Terminal non-interaktif tidak diizinkan menjalankan aksi destruktif secara otomatis.');
    process.exit(1);
  }

  const rl = createInterface({ input, output });
  try {
    const ans = (await rl.question('Ketik "YA" untuk melanjutkan (lainnya = batal): ')).trim();
    if (ans !== 'YA') {
      console.log('Dibatalkan oleh admin. Tidak ada data yang diubah.');
      process.exit(0);
    }
  } finally {
    rl.close();
  }
}

async function main() {
  const [cmd, ...args] = process.argv.slice(2);
  if (!cmd || cmd === 'help' || cmd === '--help' || cmd === '-h') {
    printHelp();
    return;
  }

  const cfg = loadConfig();

  if (cmd === 'status') {
    printStatus(cfg);
    return;
  }

  if (cmd === 'reset-stock') {
    await confirmDestructive('Reset sisa stok ECO LEGEND & ECO CHAMPION ke jumlah default saat browser dimuat ulang.');
    cfg.revisions.stock = (cfg.revisions.stock || 1) + 1;
    saveConfig(cfg);
    rebuildBundle();
    console.log('SELESAI: Revisi stok diperbarui ke #' + cfg.revisions.stock + '. Muat ulang game di browser.');
    return;
  }

  if (cmd === 'reset-claims') {
    await confirmDestructive('Menghapus seluruh riwayat klaim hadiah booth saat browser dimuat ulang.');
    cfg.revisions.claims = (cfg.revisions.claims || 1) + 1;
    saveConfig(cfg);
    rebuildBundle();
    console.log('SELESAI: Revisi klaim diperbarui ke #' + cfg.revisions.claims + '. Muat ulang game di browser.');
    return;
  }

  if (cmd === 'reset-leaderboard') {
    await confirmDestructive('Menghapus seluruh daftar skor leaderboard saat browser dimuat ulang.');
    cfg.revisions.leaderboard = (cfg.revisions.leaderboard || 1) + 1;
    saveConfig(cfg);
    rebuildBundle();
    console.log('SELESAI: Revisi leaderboard diperbarui ke #' + cfg.revisions.leaderboard + '. Muat ulang game di browser.');
    return;
  }

  if (cmd === 'set-stock') {
    const [tier, rawVal] = args;
    if (!REWARD_TIERS.includes(tier)) {
      console.error('Hanya 2 tier hadiah yang memiliki stok fisik: legend (ECO LEGEND) atau champion (ECO CHAMPION).');
      process.exit(1);
    }
    const val = Number(rawVal);
    if (!Number.isInteger(val) || val < 0 || val > 9999) {
      console.error('Jumlah stok harus berupa bilangan bulat 0..9999.');
      process.exit(1);
    }
    const r = cfg.rewards[tier];
    await confirmDestructive(`Ubah stok ${r.rank} (${r.prize}) dari ${r.stock} menjadi ${val}.`);
    r.stock = val;
    saveConfig(cfg);
    rebuildBundle();
    console.log(`SELESAI: Stok ${r.rank} diatur menjadi ${val}. Muat ulang game di browser.`);
    return;
  }

  if (cmd === 'set-score') {
    const [tier, rawVal] = args;
    if (!REWARD_TIERS.includes(tier)) {
      console.error('Gunakan tier hadiah: legend atau champion.');
      process.exit(1);
    }
    const val = Number(rawVal);
    if (!Number.isInteger(val) || val <= cfg.ranks.guardian.minScore || val > 999999) {
      console.error(`Skor harus lebih besar dari ECO GUARDIAN (${cfg.ranks.guardian.minScore}).`);
      process.exit(1);
    }
    if (tier === 'legend' && val >= cfg.rewards.champion.minScore) {
      console.error(`Skor ECO LEGEND harus lebih kecil dari ECO CHAMPION (${cfg.rewards.champion.minScore}).`);
      process.exit(1);
    }
    if (tier === 'champion' && val <= cfg.rewards.legend.minScore) {
      console.error(`Skor ECO CHAMPION harus lebih besar dari ECO LEGEND (${cfg.rewards.legend.minScore}).`);
      process.exit(1);
    }
    const r = cfg.rewards[tier];
    await confirmDestructive(`Ubah threshold skor ${r.rank} dari ${r.minScore} menjadi ${val}.`);
    r.minScore = val;
    saveConfig(cfg);
    rebuildBundle();
    console.log(`SELESAI: Threshold ${r.rank} diatur menjadi ${val}. Muat ulang game di browser.`);
    return;
  }

  if (cmd === 'set-reward') {
    const [tier, ...rest] = args;
    const prize = rest.join(' ').trim();
    if (!REWARD_TIERS.includes(tier)) {
      console.error('Gunakan tier hadiah: legend atau champion.');
      process.exit(1);
    }
    if (!prize || prize.length > 60) {
      console.error('Nama hadiah wajib diisi (maks 60 karakter).');
      process.exit(1);
    }
    const r = cfg.rewards[tier];
    await confirmDestructive(`Ubah nama hadiah ${r.rank} dari "${r.prize}" menjadi "${prize}".`);
    r.prize = prize;
    r.fullPrize = prize;
    saveConfig(cfg);
    rebuildBundle();
    console.log(`SELESAI: Hadiah ${r.rank} diatur menjadi "${prize}". Muat ulang game di browser.`);
    return;
  }

  console.error('Command tidak dikenal: ' + cmd);
  printHelp();
  process.exit(1);
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
