import fs from 'fs';
import path from 'path';

const root = process.cwd();

const input = path.join(root, 'src/styles/index.css');
const outputDir = path.join(root, 'dist');
const output = path.join(outputDir, 'styles.css');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const css = fs.readFileSync(input, 'utf8');

fs.writeFileSync(output, css);

console.log('✔︎ dist/styles.css generated');
