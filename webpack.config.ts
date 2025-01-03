import path from 'path';
import { buildWebpackConfig } from './config/webpack/build-webpack-config';
import {
  type BuildWebpackMode,
  type BuildWebpackPaths,
} from './config/webpack/types/common';

const paths: BuildWebpackPaths = {
  entry: path.resolve(__dirname, `src`, `index.ts`),
  dist: path.resolve(__dirname, `dist`),
  html: path.resolve(__dirname, `public`, `index.html`),
};

const mode: BuildWebpackMode = `development`;
const isDev = mode === `development`;

export default buildWebpackConfig({ paths, mode, isDev });
