import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");
const i18nRoot = path.join(projectRoot, "src", "i18n");

const SOURCE_LOCALE = "pt-br";
const TARGET_LOCALE = "en";

async function readJson(filePath) {
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw);
}

function sortedKeys(obj) {
  return Object.keys(obj ?? {}).sort();
}

function diffKeys(a, b) {
  const bSet = new Set(b);
  return a.filter((k) => !bSet.has(k));
}

async function main() {
  const sourceDir = path.join(i18nRoot, SOURCE_LOCALE);
  const targetDir = path.join(i18nRoot, TARGET_LOCALE);

  const sourceFiles = (await readdir(sourceDir)).filter((f) => f.endsWith(".json")).sort();

  let hasErrors = false;

  for (const file of sourceFiles) {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    let sourceJson;
    let targetJson;

    try {
      sourceJson = await readJson(sourcePath);
    } catch (e) {
      hasErrors = true;
      console.error(`i18n: failed to read ${SOURCE_LOCALE}/${file}: ${e?.message ?? e}`);
      continue;
    }

    try {
      targetJson = await readJson(targetPath);
    } catch (e) {
      hasErrors = true;
      console.error(`i18n: missing or invalid ${TARGET_LOCALE}/${file}`);
      continue;
    }

    const sourceKeys = sortedKeys(sourceJson);
    const targetKeys = sortedKeys(targetJson);

    const missingInTarget = diffKeys(sourceKeys, targetKeys);
    const extraInTarget = diffKeys(targetKeys, sourceKeys);

    if (missingInTarget.length || extraInTarget.length) {
      hasErrors = true;
      console.error(`i18n: key mismatch in ${file}`);
      if (missingInTarget.length) {
        console.error(`  missing in ${TARGET_LOCALE}: ${missingInTarget.join(", ")}`);
      }
      if (extraInTarget.length) {
        console.error(`  extra in ${TARGET_LOCALE}: ${extraInTarget.join(", ")}`);
      }
    }
  }

  if (hasErrors) process.exit(1);
  console.log("i18n: OK");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

