// packages;
import path from "path";

// functions;
import { buildWebpack } from "./config/build/build-webpack";

// types;
import {
  type EnvVariablesType,
  type BuildOptionsType,
  type BuildPathsType,
} from "./config/build/types/types";

export default (env: EnvVariablesType) => {
  const paths: BuildPathsType = {
    html: path.resolve(__dirname, `public`, `index.html`),
    entry: path.resolve(__dirname, `src`, `index.ts`),
    build: path.resolve(__dirname, `build`),
  };

  const options: BuildOptionsType = {
    mode: env.mode ?? `development`,
    paths,
    port: env.port ?? 3000,
  };

  const config = buildWebpack(options);

  return config;
};
