const fs = require('fs');
const path = require('path');

const dist = path.resolve(__dirname, '..', 'dist');
let failures = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && full.endsWith('.html')) checkHtml(full);
  }
}

function checkHtml(file) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(path.resolve(__dirname, '..'), file).replace(/\\/g, '/');
  if (!rel.endsWith('index.html')) return;
  const hasPreloadHero = /<link[^>]*rel="preload"[^>]*as="image"/i.test(html);
  if (!hasPreloadHero) failures.push(rel + ' missing hero image preload');
  const heroBlock = html.match(/<section[^>]*aria-labelledby="hero-title"[\s\S]*?<\/section>/i);
  if (heroBlock) {
    const blk = heroBlock[0];
    const eager = /<img[^>]*loading="eager"/i.test(blk);
    const high = /<img[^>]*fetchpriority="high"/i.test(blk);
    if (!eager) failures.push(rel + ' hero missing loading="eager"');
    if (!high) failures.push(rel + ' hero missing fetchpriority="high"');
  }
  const hasPrm = /prefers-reduced-motion:\s*reduce/i.test(html);
  if (!hasPrm) failures.push(rel + ' missing prefers-reduced-motion gate');
}

walk(dist);

if (failures.length) {
  console.error('Perf Gate falhou:');
  failures.forEach((f) => console.error(' -', f));
  process.exit(1);
} else {
  console.log('Perf Gate passou: LCP otimizado e motion gate presente');
}
