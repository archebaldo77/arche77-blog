import { type Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { type BuildWebpackOptions } from '../types/common';

export const buildWebpackDevServer = (
  options: BuildWebpackOptions
): DevServerConfiguration => {
  const { port } = options;

  return {
    open: true,
    port,
    historyApiFallback: true,
    hot: true,
  };
};
