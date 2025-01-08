import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ProgressPlugin, DefinePlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { type Configuration } from 'webpack';
import { type BuildWebpackOptions } from '../types/common';

export const buildWebpackPlugins = (
  options: BuildWebpackOptions,
): Configuration[`plugins`] => {
  const { paths, isDev } = options;

  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: `css/[name].[contenthash:8].css`,
      chunkFilename: `css/[name].[contenthash:8].css`,
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ];
};
