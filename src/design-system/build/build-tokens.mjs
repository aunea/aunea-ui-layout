import StyleDictionary from "style-dictionary";

const sd = new StyleDictionary({
    source: ["src/design-system/tokens/tokens.json"],
    platforms: {
        css: {
            transformGroup: "css",
            buildPath: "src/styles/",
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
