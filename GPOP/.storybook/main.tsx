import module = require("vite/index");

module.exports = {
    stories: ['../src/components/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
    ],
    framework: '@storybook/react',
};