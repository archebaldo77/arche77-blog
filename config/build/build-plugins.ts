// plugins;
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { type Configuration, ProgressPlugin } from 'webpack';

// types;
import { type BuildOptions } from './types/types';

export const buildPlugins = (
  options: BuildOptions
): Configuration[`plugins`] => {
  const { paths } = options;

  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];
};
