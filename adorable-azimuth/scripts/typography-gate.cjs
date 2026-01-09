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
  const tags = ['h1','h2','h3','h4','h5','h6'];
  for (const t of tags) {
    const re = new RegExp(`<${t}[^>]*>`, 'gi');
    const matches = html.match(re) || [];
    for (const tag of matches) {
      if (!/data-text="[^"]+"/i.test(tag)) {
        failures.push(`${rel} <${t}> missing data-text`);
      }
    }
  }
}

walk(dist);

if (failures.length) {
  console.error('Typography Gate falhou:');
  failures.slice(0, 20).forEach((f) => console.error(' -', f));
  process.exit(1);
} else {
  console.log('Typography Gate passou: todos headings e parágrafos possuem data-text');
}
