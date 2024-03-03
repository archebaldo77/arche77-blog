export type BuildMode = `development` | `production`;

export interface BuildEnv {
  mode?: BuildMode;
}

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
}
