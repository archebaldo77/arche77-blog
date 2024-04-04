// helpers;
import { buildTypescriptLoader } from './loaders/build-typescript-loader';
import { buildSccsLoader } from './loaders/build-scss-loader';
import { buildSvgLoader } from './loaders/build-svg-loader';
import { buildAssetsLoader } from './loaders/build-assets-loader';

// types;
import { type ModuleOptions } from 'webpack';
import { type BuildOptions } from './types/types';

export const buildLoaders = (options: BuildOptions): ModuleOptions[`rules`] => {
  const { mode } = options;

  const isDev = mode === `development`;

  return [
    buildTypescriptLoader(isDev),
    buildSccsLoader(isDev),
    buildSvgLoader(),
    buildAssetsLoader(),
  ];
};
