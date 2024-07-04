// libraries;
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin, DefinePlugin, type Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

// types;
import { type BuildOptions } from './types/config';

export const buildPlugins = (
  options: BuildOptions
): Configuration[`plugins`] => {
  const { paths, isDev } = options;

  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
      minify: !isDev,
    }),
    new MiniCssExtractPlugin({
      filename: `css/[name].[contenthash:8].css`,
      chunkFilename: `css/[name].[contenthash:8].css`,
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new ReactRefreshWebpackPlugin(),
  ];
};
