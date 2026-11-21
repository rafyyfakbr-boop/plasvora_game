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
      "stock": 5,
      "rank": "ECO LEGEND",
      "prize": "Sticker Limited",
      "fullPrize": "Sticker Limited",
      "badge": "LIMITED STICKER"
    },
    "champion": {
      "minScore": 8000,
      "stock": 1,
      "rank": "ECO CHAMPION",
      "prize": "HADIAH UTAMA BOOTH",
      "fullPrize": "HADIAH UTAMA BOOTH",
      "badge": "HADIAH UTAMA BOOTH"
    }
  }
};
