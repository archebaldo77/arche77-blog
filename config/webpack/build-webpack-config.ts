import { buildWebpackPlugins } from './plugins/build-webpack-plugins';
import { buildWebpackLoaders } from './loaders/build-webpack-loaders';
import { buildWebpackResolvers } from './resolvers/build-webpack-resolvers';

import { type Configuration } from 'webpack';
import { type BuildWebpackOptions } from './types/common';

export const buildWebpackConfig = (
  options: BuildWebpackOptions
): Configuration => {
  const { paths } = options;

  return {
    mode: `development`,
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
  };
};
