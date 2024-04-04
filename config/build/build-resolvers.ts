// types;
import { type Configuration } from 'webpack';
import { type BuildOptions } from './types/types';

export const buildResolvers = (
  options: BuildOptions,
): Configuration[`resolve`] => {
  const { paths } = options;

  return {
    extensions: [`.tsx`, `.ts`, `.js`, `.json`],
    preferAbsolute: true,
    mainFiles: [`index`],
    modules: [paths.src, `node_modules`],
    alias: {
      '@': paths.src,
    },
  };
};
