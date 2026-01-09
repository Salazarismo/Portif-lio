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
  const sections = [...html.matchAll(/<section[^>]*data-section[^>]*>[\s\S]*?<\/section>/gi)];
  for (const s of sections) {
    const chunk = s[0];
    const h2s = chunk.match(/<h2[\s>][\s\S]*?<\/h2>/gi) || [];
    if (h2s.length !== 1) failures.push(rel + ' section must contain exactly one h2');
    const ctas = chunk.match(/<(?:a|button)[^>]*data-cta[^>]*>/gi) || [];
    if (ctas.length > 1) failures.push(rel + ' section has more than one CTA');
    const hasObjective = /data-objective="[^"]+"/i.test(chunk);
    const hasAction = /data-action="[^"]+"/i.test(chunk);
    const hasCompletion = /data-completion="[^"]+"/i.test(chunk);
    if (!hasObjective) failures.push(rel + ' section missing data-objective');
    if (!hasAction) failures.push(rel + ' section missing data-action');
    if (!hasCompletion) failures.push(rel + ' section missing data-completion');
  }
}

walk(dist);

if (failures.length) {
  console.error('Sections Gate falhou:');
  failures.forEach((f) => console.error(' -', f));
  process.exit(1);
} else {
  console.log('Sections Gate passou: cada seção tem um h2 e no máximo 1 CTA');
}
