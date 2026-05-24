import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { ulid } from 'ulid';

const dirs = [
  'public/images/portfolio/apartamento-completo-estrutural',
  'public/images/portfolio/global'
];

for (const dir of dirs) {
  const absoluteDir = path.resolve(dir);
  if (!fs.existsSync(absoluteDir)) continue;
  
  const files = fs.readdirSync(absoluteDir);

  for (const file of files) {
    if (!file.match(/\.(jpeg|jpg|png)$/i)) continue;

    const oldPath = path.join(absoluteDir, file);
    const newId = ulid().toLowerCase();
    const newPath = path.join(absoluteDir, `${newId}.webp`);

    console.log(`Converting ${file} -> ${newId}.webp`);
    try {
      execSync(`convert "${oldPath}" -resize "1000x1000>" -quality 90 "${newPath}"`);
      fs.unlinkSync(oldPath); // Delete old file
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
}
console.log('Conversion complete!');
