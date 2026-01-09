const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const srcDir = path.join(root, 'src');
const allowedTsxRoot = path.join('src', 'islands').replace(/\\/g, '/');

let violations = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile()) checkFile(full);
  }
}

function checkFile(file) {
  if (!file.endsWith('.tsx')) return;
  const rel = path.relative(root, file).replace(/\\/g, '/');
  if (!(rel === allowedTsxRoot || rel.startsWith(allowedTsxRoot + '/'))) {
    violations.push(rel);
  }
}

walk(srcDir);

if (violations.length) {
  console.error('Islands Gate falhou. .tsx fora de src/islands/:');
  for (const v of violations) console.error(' -', v);
  process.exit(1);
} else {
  console.log('Islands Gate passou: nenhum .tsx fora de src/islands/');
}
