// functions;
import { buildPlugins } from "./build-plugins";
import { buildLoaders } from "./build-loaders";
import { buildResolvers } from "./build-resolvers";
import { buildDevServer } from "./build-dev-server";

// types;
import { type Configuration } from "webpack";
import { type BuildOptionsType } from "./types/types";

export const buildWebpack = (options: BuildOptionsType): Configuration => {
  const { mode, paths } = options;

  const isDev = mode === `development`;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: `[name].[contenthash:8].js`,
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? `inline-source-map` : undefined,
  };
};
