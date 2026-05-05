import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const outDir = join(process.cwd(), 'out');
const noJekyll = join(outDir, '.nojekyll');

try {
  await writeFile(noJekyll, '');
  console.log('Created .nojekyll in out/');
} catch (error) {
  console.error('Failed to create .nojekyll:', error);
  process.exit(1);
}
