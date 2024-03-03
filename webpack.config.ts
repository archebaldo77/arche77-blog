// libs;
import path from 'path';

// helpers;
import { buildWebpackConfig } from './config/build/build-webpack-config';

// types;
import type { Configuration } from 'webpack';
import type { BuildPaths, BuildEnv } from './config/build/types/types';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, `src`, `index.tsx`),
  output: path.resolve(__dirname, `dist`),
  html: path.resolve(__dirname, `public`, `index.html`),
};

export default (env: BuildEnv): Configuration => {
  const { mode = `development`, port = 3000 } = env;

  return buildWebpackConfig({ paths, mode, port });
};
