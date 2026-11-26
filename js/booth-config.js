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
      "minScore": 5000,
      "stock": 10,
      "rank": "ECO LEGEND",
      "prize": "1 STICKER",
      "fullPrize": "1 STICKER",
      "badge": "1 STICKER"
    },
    "champion": {
      "minScore": 8000,
      "stock": 6,
      "rank": "ECO CHAMPION",
      "prize": "2 STICKER",
      "fullPrize": "2 STICKER",
      "badge": "2 STICKER"
    }
  }
};
