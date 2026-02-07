import type { Preview } from "@storybook/react";

import "../src/styles/index.css";

export const globalTypes = {
    theme: {
        name: "Theme",
        defaultValue: "light",
        toolbar: {
            icon: "circlehollow",
            items: [
                { value: "light", title: "Light" },
                { value: "dark", title: "Dark" }
            ],
            showName: true
        }
    },

    viewportSize: {
        name: "Viewport",
        description: "Screen size preview",
        defaultValue: "desktop",
        toolbar: {
            icon: "browser",
            showName: true,
            items: [
                { value: "mobile-portrait", title: "Mobile · Portrait" },
                { value: "mobile-landscape", title: "Mobile · Landscape" },

                { value: "tablet-portrait", title: "Tablet · Portrait" },
                { value: "tablet-landscape", title: "Tablet · Landscape" },

                { value: "desktop", title: "Desktop" },
                { value: "desktop-wide", title: "Desktop · Wide" },
                { value: "ultrawide", title: "Ultrawide" }
            ]
        }
    }
};

const VIEWPORTS: Record<
    string,
    { width: number | "100%"; height: number | "100%" }
> = {
    "mobile-portrait": { width: 375, height: 667 },
    "mobile-landscape": { width: 667, height: 375 },

    "tablet-portrait": { width: 834, height: 1112 },
    "tablet-landscape": { width: 1112, height: 834 },

    desktop: { width: 1280, height: 800 },
    "desktop-wide": { width: 1440, height: 900 },

    ultrawide: { width: 2560, height: 900 }
};

const preview: Preview = {
    parameters: {
        layout: "fullscreen",
        backgrounds: { disable: true },
        viewport: { disable: true }
    },

    decorators: [
        (Story, context) => {
            const theme = context.globals.theme || "light";
            const viewportKey = context.globals.viewportSize || "desktop";
            const viewport = VIEWPORTS[viewportKey];

            return (
                <div
                    className="app-root"
                    data-theme={theme}
                    style={{
                        width: viewport.width,
                        height: viewport.height,
                        overflow: "hidden",
                        margin: "0 auto"
                    }}
                >
                    <Story />
                </div>
            );
        }
    ]
};

export default preview;
