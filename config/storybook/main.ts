import path from 'path';

import { webpackFinal } from './storybook-webpack-final';

import type { StorybookConfig } from '@storybook/react-webpack5';

const srcPath = path.resolve(__dirname, `../..`, `src`);

const config: StorybookConfig = {
  stories: [`${srcPath}/**/*.stories.@(js|jsx|mjs|ts|tsx)`],
  addons: [
    `@storybook/addon-webpack5-compiler-swc`,
    `@storybook/addon-essentials`,
  ],
  framework: {
    name: `@storybook/react-webpack5`,
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: `automatic`,
        },
      },
    },
  }),
  webpackFinal,
};

export default config;
