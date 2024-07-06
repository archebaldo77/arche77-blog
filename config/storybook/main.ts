// libraries;
import path from 'path';

// types;
import { type StorybookConfig } from '@storybook/react-webpack5';

// helpers;
const getAbsolutePath = (value: string): string => {
  return path.dirname(require.resolve(path.join(value, `package.json`)));
};
const srcPath = path.resolve(__dirname, `..`, `..`, `src`);

const config: StorybookConfig = {
  stories: [`${srcPath}/**/*.stories.@(ts|tsx)`],
  addons: [
    `@storybook/addon-webpack5-compiler-swc`,
    `@storybook/addon-onboarding`,
    `@storybook/addon-links`,
    `@storybook/addon-essentials`,
    `@storybook/addon-interactions`,
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
  webpackFinal: async (config) => {
    config.resolve!.alias = {
      '@': srcPath,
      react: getAbsolutePath(`react`),
      'react-dom': getAbsolutePath(`react-dom`),
      '@storybook/react-dom-shim': `@storybook/react-dom-shim/dist/react-16`,
    };

    config.module!.rules = config.module?.rules?.map((rule) => {
      if (
        rule !== false &&
        rule !== 0 &&
        rule !== `` &&
        rule !== `...` &&
        rule?.test instanceof RegExp
      ) {
        if ((rule?.test).test(`.svg`)) {
          return {
            ...rule,
            exclude: /\.svg$/i,
          };
        }
      }

      return rule;
    });

    config.module?.rules?.push({
      test: /\.s[ac]ss$/i,
      use: [
        `style-loader`,
        {
          loader: `css-loader`,
          options: {
            modules: {
              auto: true,
              localIdentName: `[path][local]`,
            },
          },
        },
        `sass-loader`,
      ],
    });

    config.module?.rules?.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [`@svgr/webpack`],
    });

    return config;
  },
};
export default config;
