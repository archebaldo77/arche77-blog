export type BuildModeType = `development` | `production`;

export interface BuildPathsType {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptionsType {
  mode: BuildModeType;
  paths: BuildPathsType;
}
