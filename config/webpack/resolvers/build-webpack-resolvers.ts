import { type Configuration } from 'webpack';
import { type BuildWebpackOptions } from '../types/common';

export const buildWebpackResolvers = (
  options: BuildWebpackOptions,
): Configuration[`resolve`] => {
  const { paths } = options;

  return {
    alias: {
      '@': paths.src,
    },
    extensions: [`.tsx`, `.ts`, `.jsx`, `.js`, `.json`],
  };
};
