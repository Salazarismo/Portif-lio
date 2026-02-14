import { rm } from "node:fs/promises";

try {
  await rm(".vercel/output", { recursive: true, force: true });
} catch {
  process.exitCode = 0;
}

