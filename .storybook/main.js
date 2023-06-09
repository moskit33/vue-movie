module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  features: {
    postcss: false
  },
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}

// stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
//   addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
//   features: {
//     postcss: false
//   },
//   core: { builder: 'webpack5' }