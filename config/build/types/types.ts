export type BuildModeType = `development` | `production`;

export interface BuildPathsType {
  entry: string;
  build: string;
  src: string;
  html: string;
}

export interface BuildOptionsType {
  mode: BuildModeType;
  paths: BuildPathsType;
  port: number;
}

export interface EnvVariablesType {
  mode: BuildModeType;
  port: number;
}
