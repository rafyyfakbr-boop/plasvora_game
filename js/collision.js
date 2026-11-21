// collision.js - tabrakan kotak 2D (sumbu x dan y). Kotak berbentuk {x, y, hw, hh}: pusat dan setengah ukuran.

export function overlap(a, b) {
  return Math.abs(a.x - b.x) < a.hw + b.hw && Math.abs(a.y - b.y) < a.hh + b.hh;
}

// Kotak tabrakan rintangan sedikit lebih kecil dari gambarnya agar terasa adil.
export function obstacleBox(o, out) {
  const d = o.def;
  out.x = o.x + d.hitDx; out.y = d.hitY; out.hw = d.hitW / 2; out.hh = d.hitH / 2;
  return out;
}

// Kotak untuk mengambil item (lebih longgar dari kotak tabrakan)
export function grabBox(p, out) {
  if (p.sliding) { out.x = p.x; out.y = 0.5; out.hw = 0.9; out.hh = 0.65; }
  else { out.x = p.x; out.y = p.y + 0.95; out.hw = 0.75; out.hh = 1.05; }
  return out;
}

export function bodyBox(p, out) {
  if (p.sliding) { out.x = p.x; out.y = 0.4; out.hw = 0.62; out.hh = 0.4; }
  else { out.x = p.x; out.y = p.y + 0.82; out.hw = 0.34; out.hh = 0.82; }
  return out;
}
