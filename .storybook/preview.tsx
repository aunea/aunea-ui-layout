import type { Preview, Decorator } from '@storybook/react';
import "../dist/assistant.css"
import "../dist/assistant-frame.css"
import "../dist/button.css"
import "../dist/card.css"
import "../dist/gradients.css"
import "../dist/main-menu.css"
import "../dist/reset.css"
import "../dist/theme.css"
import "../dist/theme-toggle.css"
import "../dist/tokens.css"

const withTheme: Decorator = (Story: Decorator, context: Preview) => {
    const theme = context.globals.theme || 'light';

    return (
        <div
            className="app-background"
            data-theme={theme}
            style={{ minHeight: '100vh' }}
        >
            <Story />
        </div>
    );
};

const preview: Preview = {
    decorators: [withTheme],
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                icon: 'mirror',
                items: [
                    { value: 'light', title: 'Light' },
                    { value: 'dark', title: 'Dark' },
                ],
                showName: true,
            },
        },
    },
    parameters: {
        layout: 'centered',
    },
};

export default preview;
