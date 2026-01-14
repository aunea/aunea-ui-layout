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
    }
};

const preview: Preview = {
    parameters: {
        layout: "fullscreen",
        backgrounds: { disable: true }
    },

    decorators: [
        (Story, context) => {
            const theme = context.globals.theme || "light";

            return (
                <div
                    className="app-root"
                    data-theme={theme}
                    style={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    }}
                >
                    <Story />
                </div>
            );
        }
    ]

};

export default preview;
