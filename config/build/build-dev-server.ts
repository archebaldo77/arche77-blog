// types;
import { type Configuration } from 'webpack-dev-server';
import { type BuildOptions } from './types/types';

export const buildDevServer = (options: BuildOptions): Configuration => {
  const { port } = options;

  return {
    port,
    open: true,
    hot: true,
    historyApiFallback: true,
  };
};
