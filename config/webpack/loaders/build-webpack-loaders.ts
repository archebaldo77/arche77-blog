import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { type ModuleOptions } from 'webpack';
import { type BuildWebpackOptions } from '../types/common';

export const buildWebpackLoaders = (
  options: BuildWebpackOptions,
): ModuleOptions[`rules`] => {
  const { isDev } = options;

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: `ts-loader`,
    exclude: /node_modules/,
  };

  const cssLoader = {
    loader: 'css-loader',
    options: {
      modules: {
        auto: true,
        namedExport: false,
        exportLocalsConvention: `camel-case`,
        localIdentName: isDev
          ? `[path][name]__[local]--[hash:base64:5]`
          : `[hash:base64:5]`,
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? `style-loader` : MiniCssExtractPlugin.loader,
      cssLoader,
      `sass-loader`,
    ],
  };

  const svgLoader = {
    test: /\.svg$/i,
    use: [`@svgr/webpack`],
  };

  const assetsLoader = {
    test: /\.(png|jpg|jpeg)$/i,
    type: 'asset/resource',
  };

  return [typescriptLoader, scssLoader, svgLoader, assetsLoader];
};
