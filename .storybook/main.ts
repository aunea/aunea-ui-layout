const config = {
    stories: [
        '../src/**/*.mdx',
        '../src/**/*.stories.@(ts|tsx)',
    ],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
};

export default config;
