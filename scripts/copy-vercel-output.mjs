import { cp, rm } from "node:fs/promises";

const source = "adorable-azimuth/.vercel/output";
const dest = ".vercel/output";

await rm(dest, { recursive: true, force: true });
await cp(source, dest, { recursive: true });

