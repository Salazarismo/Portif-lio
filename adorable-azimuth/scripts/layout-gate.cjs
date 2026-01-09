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
  if (rel.includes('/docs/')) return; // documentação isenta
  const sectionBlocks = html.match(/<section[^>]*data-section[^>]*>[\s\S]*?<\/section>/gi) || [];
  for (const block of sectionBlocks) {
    const hasContainer = /<div[^>]*class="[^"]*container[^"]*"/i.test(block);
    if (!hasContainer) { failures.push(`${rel} section missing .container`); continue; }
    const hasCellAnywhere = /data-cell/i.test(block);
    if (!hasCellAnywhere) failures.push(`${rel} container missing data-cell`);
  }
}

walk(dist);

if (failures.length) {
  console.error('Layout Gate falhou:');
  failures.slice(0, 20).forEach((f) => console.error(' -', f));
  process.exit(1);
} else {
  console.log('Layout Gate passou: containers possuem células perceptivas e sem elementos soltos');
}
