// Build: menggabungkan js/*.js (ES module) dan Three.js menjadi satu file klasik
// dist/plasvora-eco-runner.js agar game bisa dibuka dengan klik ganda (file://) tanpa server.
// Juga membuat PLASVORA-ECO-RUNNER-satu-file.html (CSS + JS tertanam).
import { build, context } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const watch = process.argv.includes('--watch');
mkdirSync('dist', { recursive: true });

function makeSingle() {
  let html = readFileSync('index.html', 'utf8');
  const css = readFileSync('css/style.css', 'utf8');
  const js = readFileSync('dist/plasvora-eco-runner.js', 'utf8').replace(/<\/script/gi, '<\\/script');
  html = html.replace('<link rel="stylesheet" href="css/style.css">', () => '<style>\n' + css + '\n</style>');
  html = html.replace('<script src="dist/plasvora-eco-runner.js"></script>', () => '<script>\n' + js + '\n</script>');
  writeFileSync('PLASVORA-ECO-RUNNER-satu-file.html', html);
}

const opts = {
  entryPoints: ['js/main.js'],
  bundle: true,
  format: 'iife',
  minify: true,
  target: ['es2019'],
  outfile: 'dist/plasvora-eco-runner.js',
  logLevel: 'info',
  plugins: [{ name: 'single', setup(b) { b.onEnd(() => makeSingle()); } }]
};

if (watch) { const ctx = await context(opts); await ctx.watch(); console.log('watching...'); }
else await build(opts);
