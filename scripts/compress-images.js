const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMG_DIR = path.join(__dirname, '../public/img');

// Limits maximum width of images to 1600px to save space while maintaining high definition on large screens.
const MAX_WIDTH = 1600;

async function compressImages() {
  if (!fs.existsSync(IMG_DIR)) {
    console.error(`Directory not found: ${IMG_DIR}`);
    return;
  }

  const files = fs.readdirSync(IMG_DIR);
  console.log(`Found ${files.length} files in ${IMG_DIR}`);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
      continue;
    }

    const filePath = path.join(IMG_DIR, file);
    const tempPath = path.join(IMG_DIR, `temp_${file}`);

    const stats = fs.statSync(filePath);
    const originalSizeKB = (stats.size / 1024).toFixed(2);

    try {
      console.log(`Processing: ${file} (${originalSizeKB} KB)...`);

      // Initialize sharp with image path
      const image = sharp(filePath);
      const metadata = await image.metadata();

      let pipeline = sharp(filePath);

      // Resize if wider than MAX_WIDTH
      if (metadata.width && metadata.width > MAX_WIDTH) {
        console.log(`  Resizing from ${metadata.width}px to ${MAX_WIDTH}px width`);
        pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
      }

      // Compress based on extension
      if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: 80, progressive: true, mozjpeg: true });
      } else if (ext === '.png') {
        pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
      }

      // Write to temp file first
      await pipeline.toFile(tempPath);

      // Verify size and replace original if temp is smaller
      const tempStats = fs.statSync(tempPath);
      const tempSizeKB = (tempStats.size / 1024).toFixed(2);

      if (tempStats.size < stats.size) {
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        const savings = (100 - (tempStats.size / stats.size) * 100).toFixed(1);
        console.log(`  Successfully compressed: ${originalSizeKB} KB -> ${tempSizeKB} KB (-${savings}%)`);
      } else {
        fs.unlinkSync(tempPath);
        console.log(`  Original is already smaller than compressed. Kept original.`);
      }

    } catch (err) {
      console.error(`  Error processing ${file}:`, err.message);
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
      }
    }
  }

  console.log('Image compression completed!');
}

compressImages();
