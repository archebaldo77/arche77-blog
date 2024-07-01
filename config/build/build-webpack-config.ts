// helpers;
import { buildPlugins } from './build-plugins';
import { buildLoaders } from './build-loaders';
import { buildResolvers } from './build-resolvers';
import { buildDevServer } from './build-dev-server';

// types;
import { type Configuration } from 'webpack';
import { type BuildOptions } from './types/config';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: `[name].[contenthash:8].js`,
      path: paths.dist,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devServer: buildDevServer(options),
    devtool: `inline-source-map`,
  };
};
