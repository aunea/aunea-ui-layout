import fs from "fs";
import path from "path";

const root = process.cwd();

const stylesSrc = path.join(root, "src/styles");
const assetsSrc = path.join(root, "src/assets");

const dist = path.join(root, "dist");
const stylesDist = path.join(dist, "styles");
const assetsDist = path.join(dist, "assets");

copyRecursive(stylesSrc, stylesDist, file => file.endsWith(".css"));
copyRecursive(assetsSrc, assetsDist, file => !file.endsWith('.ts'));

console.log("✔ CSS and assets copied to dist");

/**
 * @param {string} source
 * @param {string} target
 * @param {(file: string) => boolean} filter
 */
function copyRecursive(source, target, filter = () => true) {
    if (!fs.existsSync(source)) return;

    if (!fs.existsSync(target)) {
        fs.mkdirSync(target, { recursive: true });
    }

    for (const entry of fs.readdirSync(source)) {
        const srcPath = path.join(source, entry);
        const distPath = path.join(target, entry);

        const stat = fs.statSync(srcPath);

        if (stat.isDirectory()) {
            copyRecursive(srcPath, distPath, filter);
        } else if (filter(entry)) {
            fs.copyFileSync(srcPath, distPath);
        }
    }
}
