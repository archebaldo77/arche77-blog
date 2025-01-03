import { buildWebpackPlugins } from './plugins/build-webpack-plugins';
import { buildWebpackLoaders } from './loaders/build-webpack-loaders';
import { buildWebpackResolvers } from './resolvers/build-webpack-resolvers';
import { buildWebpackDevServer } from './dev-server/build-webpack-dev-server';

import { type Configuration } from 'webpack';
import { type BuildWebpackOptions } from './types/common';

export const buildWebpackConfig = (
  options: BuildWebpackOptions
): Configuration => {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: `[name].[contenthash].js`,
      path: paths.dist,
      clean: true,
    },
    plugins: buildWebpackPlugins(options),
    module: {
      rules: buildWebpackLoaders(),
    },
    resolve: buildWebpackResolvers(),
    devServer: isDev ? buildWebpackDevServer(options) : undefined,
    devtool: isDev ? `inline-source-map` : undefined,
  };
};
