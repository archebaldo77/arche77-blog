// plugins;
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ProgressPlugin, DefinePlugin } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

// types;
import { type WebpackPluginInstance } from 'webpack';
import { type BuildOptionsType } from './types/types';

export const buildPlugins = (
  options: BuildOptionsType
): WebpackPluginInstance[] => {
  const { paths, mode } = options;

  const isDev = mode === `development`;

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new DefinePlugin({ __IS_DEV__: isDev }),
    new MiniCssExtractPlugin({
      filename: `css/[name].[contenthash:8].css`,
      chunkFilename: `css/[name].[contenthash:8].css`,
    }),
    new ReactRefreshWebpackPlugin(),
  ];
};
