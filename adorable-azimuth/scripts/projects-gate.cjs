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
  const cardBlocks = [...html.matchAll(/<article[^>]*data-project-card[^>]*>[\s\S]*?<\/article>/gi)];
  if (!cardBlocks.length) return;
  for (const m of cardBlocks) {
    const block = m[0];
    const openTag = block.match(/<article[^>]*>/i)?.[0] || '';
    const metricAttr = openTag.match(/data-metric=\"([^\"]*)\"/i);
    if (!metricAttr || !metricAttr[1] || !metricAttr[1].trim()) failures.push(rel + ' project card missing metric value');
    const hasProblem = /<h3[^>]*>\s*Problema\s*<\/h3>/i.test(block);
    const hasDecision = /<h3[^>]*>\s*Decisão técnica\s*<\/h3>/i.test(block);
    const hasResult = /<h3[^>]*>\s*Resultado mensurável\s*<\/h3>/i.test(block);
    if (!hasProblem) failures.push(rel + ' project card missing Problema section');
    if (!hasDecision) failures.push(rel + ' project card missing Decisão técnica section');
    if (!hasResult) failures.push(rel + ' project card missing Resultado mensurável section');
    const strongMetric = /<strong[^>]*data-text=\"heading-[^\"]+\"[^>]*>[^<]+<\/strong>/i.test(block);
    const badgeMetric = /data-intent=\"badge\"[^>]*data-state=\"metric\"/i.test(block);
    if (!strongMetric && !badgeMetric) failures.push(rel + ' project card metric not visually strong');
  }
}

walk(dist);

if (failures.length) {
  console.error('Projects Gate falhou:');
  failures.forEach((f) => console.error(' -', f));
  process.exit(1);
} else {
  console.log('Projects Gate passou: cards com problema, decisão e métrica visual forte');
}
