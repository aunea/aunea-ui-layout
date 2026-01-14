import fs from "fs";
import path from "path";

const root = process.cwd();
const src = path.join(root, "src/styles");
const dist = path.join(root, "dist");

copyRecursive(src, dist);

console.log("✔ CSS copied to dist");

function copyRecursive(source, target) {
    if (!fs.existsSync(target)) {
        fs.mkdirSync(target, { recursive: true });
    }

    for (const entry of fs.readdirSync(source)) {
        const srcPath = path.join(source, entry);
        const distPath = path.join(target, entry);

        const stat = fs.statSync(srcPath);

        if (stat.isDirectory()) {
            copyRecursive(srcPath, distPath);
        } else if (entry.endsWith(".css")) {
            fs.copyFileSync(srcPath, distPath);
        }
    }
}
