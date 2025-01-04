import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ProgressPlugin } from 'webpack';

import { type Configuration } from 'webpack';
import { type BuildWebpackOptions } from '../types/common';

export const buildWebpackPlugins = (
  options: BuildWebpackOptions
): Configuration[`plugins`] => {
  const { paths } = options;

  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: `css/[name].[contenthash:8].css`,
      chunkFilename: `css/[name].[contenthash:8].css`,
    }),
  ];
};
