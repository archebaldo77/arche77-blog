// helpers;
import { buildPlugins } from './build-plugins';
import { buildLoaders } from './build-loaders';
import { buildResolvers } from './build-resolvers';
import { buildDevServer } from './build-dev-server';

// types;
import { type Configuration } from 'webpack';
import { type BuildOptions } from './types/types';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { paths, mode } = options;

  const isDev = mode === `development`;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: `js/[name].[contenthash:8].js`,
      chunkFilename: `js/chunks/[name].[contenthash:8].js`,
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: isDev ? `inline-source-map` : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
