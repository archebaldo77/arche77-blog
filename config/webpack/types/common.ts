export type BuildWebpackMode = `development` | `production`;

export interface BuildWebpackPaths {
  entry: string;
  dist: string;
  html: string;
}

export interface BuildWebpackEnvs {
  port: number;
  mode: BuildWebpackMode;
}

export interface BuildWebpackOptions {
  mode: BuildWebpackMode;
  paths: BuildWebpackPaths;
  isDev: boolean;
  port: number;
}
