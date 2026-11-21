# PLASVORA ECO RUNNER (Three.js)

Game booth 3D side-scroller. Berjalan offline, tanpa internet dan tanpa server.

## Cara menjalankan
1. **Paling mudah:** klik dua kali `PLASVORA-ECO-RUNNER-satu-file.html` (Chrome/Edge). Semua sudah di dalam satu file.
2. Atau buka `index.html` (butuh folder `dist/` di sebelahnya).
3. Tekan **F** untuk layar penuh (16:9, cocok 1280x720 dan 1920x1080).

## Kontrol
SPACE / panah atas = lompat, panah bawah = slide, P / ESC = pause, F = layar penuh, M = bisukan.

## Pengaturan panitia
Semua angka ada di `js/config.js`: kecepatan, bobot loot, combo, boss, dan `REWARDS` (skor minimum dan stok tiap hadiah).
Setelah mengubah file di `js/`, jalankan `npm install` (sekali) lalu `npm run build` untuk membuat ulang `dist/` dan file satu-file.
- `PLASVORA_URL`: isi tautan untuk tombol EXPLORE PLASVORA (kosong = tampil info singkat).
- Panel admin: SETTINGS > ADMIN, PIN awal `1234` (`ADMIN_PIN`). Isinya sisa stok, reset stok, hapus leaderboard.
- Leaderboard, stok, dan kode klaim tersimpan di localStorage browser yang sama. Pakai satu laptop dan satu browser selama pameran.

## Struktur
index.html, css/style.css, js/ (main, config, game, player, spawner, loot, collision, score, reward, leaderboard, input, audio, effects, ui, storage, models, world, util, states), assets/ (opsional).
