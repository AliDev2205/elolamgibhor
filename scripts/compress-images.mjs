import sharp from "sharp";
import { rename, unlink } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imgDir = path.join(__dirname, "..", "public", "img");

async function compressLogo() {
  const input = path.join(imgDir, "logo.png");
  const tmp = path.join(imgDir, "logo.tmp.png");
  await sharp(input)
    .resize(900, null, { withoutEnlargement: true })
    .png({ quality: 85, compressionLevel: 9, palette: true })
    .toFile(tmp);
  await unlink(input);
  await rename(tmp, input);
}

async function compressFounder() {
  const input = path.join(imgDir, "fondateur.jpg");
  const tmp = path.join(imgDir, "fondateur.tmp.jpg");
  await sharp(input)
    .resize(1400, null, { withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(tmp);
  await unlink(input);
  await rename(tmp, input);
}

await compressLogo();
await compressFounder();
console.log("Images compressed.");
