import { type Configuration } from 'webpack';

export const buildWebpackResolvers = (): Configuration[`resolve`] => {
  return {
    extensions: [`.tsx`, `.ts`, `.jsx`, `.js`, `.json`],
  };
};
