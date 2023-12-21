// packages;
import path from "path";

// functions;
import { buildWebpack } from "./config/build/build-webpack";

// types;
import {
  type BuildOptionsType,
  type BuildPathsType,
} from "./config/build/types/types";

const paths: BuildPathsType = {
  html: path.resolve(__dirname, `public`, `index.html`),
  entry: path.resolve(__dirname, `src`, `index.ts`),
  build: path.resolve(__dirname, `build`),
};

const options: BuildOptionsType = {
  mode: `development`,
  paths,
};

const config = buildWebpack(options);

export default config;
