// libraries;
import path from 'path';

// helpers;
import { buildWebpackConfig } from './config/build/build-webpack-config';

// types;
import { type BuildPaths } from './config/build/types/config';

const mode = `development`;
const isDev = mode === `development`;

const paths: BuildPaths = {
  entry: path.resolve(__dirname, `src`, `index.ts`),
  dist: path.resolve(__dirname, `dist`),
  html: path.resolve(__dirname, `public`, `index.html`),
};

const config = buildWebpackConfig({ mode, paths, isDev });

export default config;
