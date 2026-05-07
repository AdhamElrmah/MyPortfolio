import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'src/assets/bydrive';
const outputDir = 'src/assets/bydrive-optimized';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.png'));

for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const outputName = file.replace('.png', '.webp');
  const outputPath = path.join(outputDir, outputName);

  const stats = fs.statSync(inputPath);
  const sizeMB = (stats.size / 1024 / 1024).toFixed(2);

  // Resize large full-page screenshots to max 1920px width
  const img = sharp(inputPath);
  const metadata = await img.metadata();

  let pipeline = sharp(inputPath);

  if (metadata.width > 1920) {
    pipeline = pipeline.resize(1920, null, { withoutEnlargement: true });
  }

  await pipeline
    .webp({ quality: 80 })
    .toFile(outputPath);

  const newStats = fs.statSync(outputPath);
  const newSizeMB = (newStats.size / 1024 / 1024).toFixed(2);
  console.log(`${file}: ${sizeMB}MB -> ${outputName}: ${newSizeMB}MB (${Math.round((1 - newStats.size / stats.size) * 100)}% smaller)`);
}

console.log('\nDone! Optimized images saved to:', outputDir);
