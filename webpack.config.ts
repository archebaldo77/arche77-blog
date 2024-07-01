// libraries;
import path from 'path';

// helpers;
import { buildWebpackConfig } from './config/build/build-webpack-config';

// types;
import { type BuildPaths, BuildEnv } from './config/build/types/config';

export default (env: BuildEnv) => {
  const mode = env.mode ?? `development`;
  const isDev = mode === `development`;

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, `src`, `index.ts`),
    dist: path.resolve(__dirname, `dist`),
    html: path.resolve(__dirname, `public`, `index.html`),
  };

  const port = env.port ?? 3000;

  return buildWebpackConfig({ mode, paths, port, isDev });
};
