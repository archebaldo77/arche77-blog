import path from 'path';
import { buildWebpackConfig } from './config/webpack/build-webpack-config';
import {
  type BuildWebpackEnvs,
  type BuildWebpackMode,
  type BuildWebpackPaths,
} from './config/webpack/types/common';

const paths: BuildWebpackPaths = {
  entry: path.resolve(__dirname, `src`, `index.tsx`),
  dist: path.resolve(__dirname, `dist`),
  html: path.resolve(__dirname, `public`, `index.html`),
};

export default (env: BuildWebpackEnvs) => {
  const port = env.port || 3000;
  const mode = env.mode || `development`;
  const isDev = mode === `development`;

  return buildWebpackConfig({ paths, mode, isDev, port });
};
