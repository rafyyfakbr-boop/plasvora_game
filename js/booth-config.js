// booth-config.js - konfigurasi rank progress dan 2 tier hadiah fisik booth (ECO LEGEND & ECO CHAMPION).
// Dapat diubah secara manual oleh panitia melalui Admin Manual Mode (npm run admin:*).
export const BOOTH_CONFIG = {
  "revisions": {
    "stock": 3,
    "claims": 2,
    "leaderboard": 2
  },
  "ranks": {
    "hero": {
      "minScore": 1000,
      "rank": "ECO HERO"
    },
    "guardian": {
      "minScore": 2500,
      "rank": "ECO GUARDIAN"
    }
  },
  "rewards": {
    "legend": {
      "minScore": 7000,
      "stock": 5,
      "rank": "ECO LEGEND",
      "prize": "STICKER LIMITED",
      "fullPrize": "STICKER LIMITED",
      "badge": "LIMITED"
    },
    "champion": {
      "minScore": 11000,
      "stock": 1,
      "rank": "ECO CHAMPION",
      "prize": "STIKER JUARA",
      "fullPrize": "STIKER JUARA",
      "badge": "STIKER JUARA"
    }
  }
};
