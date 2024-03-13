// libs;
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { type Configuration, ProgressPlugin, DefinePlugin } from 'webpack';

// types;
import { type BuildOptions } from './types/types';

export const buildPlugins = (
  options: BuildOptions
): Configuration[`plugins`] => {
  const { paths, mode } = options;

  const isDev = mode === `development`;

  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: `css/[name].[contenthash:8].css`,
      chunkFilename: `css/chunks/[name].[contenthash:8].css`,
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new ReactRefreshWebpackPlugin(),
  ];
};
