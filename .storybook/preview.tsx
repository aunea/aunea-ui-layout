import type { Preview, Decorator } from '@storybook/react';
import '../dist/index.css';

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
