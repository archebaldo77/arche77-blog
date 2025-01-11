import path from 'path';

import { type Configuration } from 'webpack';

export const webpackFinal = (config: Configuration) => {
  const srcPath = path.resolve(__dirname, `../..`, `src`);

  const cssLoader = {
    loader: `css-loader`,
    options: {
      modules: {
        auto: true,
        namedExport: false,
        exportLocalsConvention: `camel-case`,
        localIdentName: `[path][name]__[local]--[hash:base64:5]`,
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [`style-loader`, cssLoader, `sass-loader`],
  };

  if (config && config.module?.rules) {
    const svgRule = config?.module?.rules.find((rule) => {
      if (
        typeof rule !== `string` &&
        rule !== false &&
        rule !== 0 &&
        rule?.test instanceof RegExp
      ) {
        return rule.test.test(`.svg`);
      }
    });

    if (
      typeof svgRule !== `string` &&
      svgRule !== false &&
      svgRule !== 0 &&
      svgRule
    ) {
      svgRule.exclude = /\.svg$/;
    }
  }

  return {
    ...config,
    resolve: {
      alias: {
        ...config.resolve?.alias,
        '@': srcPath,
      },
      extensions: [`.tsx`, `.ts`, `.jsx`, `.js`, `.json`],
    },
    module: {
      rules: [
        ...(config.module?.rules || []),
        scssLoader,
        {
          test: /\.svg$/,
          use: [`@svgr/webpack`],
        },
      ],
    },
  };
};
