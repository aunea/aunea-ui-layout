import StyleDictionary from "style-dictionary";
import fs from "fs";
import path from "path";

const src = path.resolve("src/styles/index.css");
const dest = path.resolve("dist/index.css");

fs.mkdirSync("dist", { recursive: true });
fs.copyFileSync(src, dest);

console.log("✔ CSS copied to dist/index.css");

const sd = new StyleDictionary({
    source: ["src/design-system/tokens/tokens.json"],
    platforms: {
        css: {
            transformGroup: "css",
            buildPath: "src/styles/base",
            files: [
                {
                    destination: "tokens.css",
                    format: "css/variables",
                    options: {
                        selector: ":root"
                    }
                }
            ]
        }
    }
});

sd.buildAllPlatforms();
