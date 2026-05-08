import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outputDir = 'src/assets/projects-optimized';
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const files = [
  { input: 'src/assets/3d portfolio.png', output: '3d-portfolio.webp' },
  { input: 'src/assets/carDesign.png', output: 'car-design.webp' },
  { input: 'src/assets/Forkify/Forkify.png', output: 'forkify-main.webp' },
  { input: 'src/assets/Forkify/forkify-architecture-recipe-loading.png', output: 'forkify-architecture.webp' },
  { input: 'src/assets/Forkify/forkify-flowchart-part-1.png', output: 'forkify-flow-1.webp' },
  { input: 'src/assets/Forkify/forkify-flowchart-part-2.png', output: 'forkify-flow-2.webp' },
  { input: 'src/assets/Forkify/forkify-flowchart-part-3.png', output: 'forkify-flow-3.webp' },
];

for (const f of files) {
  const stats = fs.statSync(f.input);
  const sizeMB = (stats.size / 1024 / 1024).toFixed(2);

  let pipeline = sharp(f.input);
  const metadata = await pipeline.metadata();
  if (metadata.width > 1920) {
    pipeline = sharp(f.input).resize(1920, null, { withoutEnlargement: true });
  }
  
  await pipeline.webp({ quality: 82 }).toFile(path.join(outputDir, f.output));
  
  const newStats = fs.statSync(path.join(outputDir, f.output));
  const newMB = (newStats.size / 1024 / 1024).toFixed(2);
  console.log(`${f.output}: ${sizeMB}MB -> ${newMB}MB`);
}

console.log('Done!');
