import HtmlWebpackPlugin from 'html-webpack-plugin';
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
  ];
};
