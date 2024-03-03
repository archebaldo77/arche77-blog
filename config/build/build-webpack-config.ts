// helpers;
import { buildPlugins } from './build-plugins';
import { buildLoaders } from './build-loaders';
import { buildResolvers } from './build-resolvers';

// types;
import { type Configuration } from 'webpack';
import { type BuildOptions } from './types/types';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { paths, mode } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: `[name].[contenthash:8].js`,
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
};
