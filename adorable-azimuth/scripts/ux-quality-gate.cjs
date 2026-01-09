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

  // Sections must declare action
  const sections = [...html.matchAll(/<section[^>]*data-section[^>]*>/gi)];
  for (const s of sections) {
    const open = s[0];
    const hasAction = /data-action="[^"]+"/i.test(open);
    if (!hasAction) failures.push(rel + ' section missing data-action');
  }

  // Project cards must include problem, decision and visible metric
  const cards = [...html.matchAll(/<article[^>]*data-project-card[^>]*>[\s\S]*?<\/article>/gi)];
  for (const m of cards) {
    const block = m[0];
    const hasProblem = /<h3[^>]*>\s*Problema\s*<\/h3>/i.test(block);
    const hasDecision = /<h3[^>]*>\s*Decisão técnica\s*<\/h3>/i.test(block);
    const strongMetric = /<strong[^>]*data-text=\"heading-[^\"]+\"[^>]*>[^<]+<\/strong>/i.test(block);
    if (!hasProblem) failures.push(rel + ' project card missing Problema');
    if (!hasDecision) failures.push(rel + ' project card missing Decisão técnica');
    if (!strongMetric) failures.push(rel + ' project card missing strong metric');
  }

  // Motion must be justified: inline animations only allowed with stateful context
  const anims = [...html.matchAll(/<[^>]*style="[^"]*animation:[^"]*"[^>]*>/gi)];
  for (const a of anims) {
    const tag = a[0];
    const ok = /aria-live="polite"/i.test(tag) || /role="status"/i.test(tag) || /data-reveal/i.test(tag) || /data-skeleton/i.test(tag) || /data-state=/i.test(tag);
    if (!ok) {
      // look around for status context
      const idx = html.indexOf(tag);
      const around = html.slice(Math.max(0, idx - 200), idx + tag.length + 200);
      const okCtx = /aria-live="polite"/i.test(around) || /role="status"/i.test(around) || /data-reveal/i.test(around) || /data-skeleton/i.test(around) || /data-state=/i.test(around);
      if (!okCtx) failures.push(rel + ' unqualified animation without state context');
    }
  }
}

walk(dist);

if (failures.length) {
  console.error('UX Quality Gate falhou:');
  failures.forEach((f) => console.error(' -', f));
  process.exit(1);
} else {
  console.log('UX Quality Gate passou: motion justificada, cards e seções com intenção');
}
