# PLASVORA ECO RUNNER (Three.js)

Game booth 3D side-scroller. Berjalan offline, tanpa internet dan tanpa server.

## Cara menjalankan
1. **Paling mudah:** klik dua kali `PLASVORA-ECO-RUNNER-satu-file.html` (Chrome/Edge). Semua sudah di dalam satu file.
2. Atau buka `index.html` (butuh folder `dist/` di sebelahnya).
3. Tekan **F** untuk layar penuh (16:9, cocok 1280x720 dan 1920x1080).

## Kontrol
`SPACE` / panah atas = lompat, panah bawah = slide, `P` / `ESC` = pause, `F` = layar penuh, `M` = bisukan.

## Struktur Rank & 2 Hadiah Booth
| Rank | Skor Minimum | Status / Hadiah | Label | Stok Default |
| --- | ---: | --- | --- | ---: |
| ECO ROOKIE | 0+ | Progress | — | — |
| ECO HERO | 1.000+ | Progress | — | — |
| ECO GUARDIAN | 2.500+ | Progress | — | — |
| **🟢 ECO LEGEND** | **7.000+** | **STICKER LIMITED** | `LIMITED` | `5 / 5` |
| **🏆 ECO CHAMPION** | **11.000+** | **STICKER JUARA** | `STICKER JUARA` | `1 / 1` |

## Admin Booth & Mode Manual (Terminal)
- Panel admin di dalam game: **SETTINGS > ADMIN**, PIN awal `1234` (`ADMIN_PIN` di `js/config.js`).
- Tabel Admin Booth hanya menampilkan 2 tier hadiah fisik (`ECO LEGEND` dan `ECO CHAMPION`).
- Semua konfigurasi rank, hadiah, stok default, dan revisi data tersimpan di `js/booth-config.js`.
- **Admin Manual Mode (Terminal):** perubahan manual dilakukan secara sadar oleh admin dan setiap command ubah/reset meminta konfirmasi manual (`YA`) sebelum mengubah data booth:
  - `npm run admin` — tampilkan panduan & daftar command (read-only)
  - `npm run admin:status` — lihat konfigurasi 2 hadiah booth & stok default (read-only)
  - `npm run admin:set-stock legend 5`
  - `npm run admin:set-stock champion 1`
  - `npm run admin:set-score legend 7000`
  - `npm run admin:set-score champion 11000`
  - `npm run admin:set-reward legend "STICKER LIMITED"`
  - `npm run admin:set-reward champion "STICKER JUARA"`
  - `npm run admin:reset-stock` — reset stok hadiah booth (butuh konfirmasi)
  - `npm run admin:reset-claims` — reset riwayat klaim (butuh konfirmasi)
  - `npm run admin:reset-leaderboard` — reset leaderboard (butuh konfirmasi)
- Setelah mengubah file di `js/`, jalankan `npm run build` untuk membuat ulang `dist/` dan `PLASVORA-ECO-RUNNER-satu-file.html`.
- Leaderboard, stok, dan kode klaim tersimpan di `localStorage` browser yang sama. Pakai satu laptop dan satu browser selama pameran.
