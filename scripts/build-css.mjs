import fs from 'fs';
import path from 'path';

const root = process.cwd();
const src = path.join(root, 'src/styles');
const dist = path.join(root, 'dist');

if (!fs.existsSync(dist)) fs.mkdirSync(dist);

for (const file of fs.readdirSync(src)) {
    fs.copyFileSync(
        path.join(src, file),
        path.join(dist, file)
    );
}

console.log('✔︎ CSS copied to dist');
