// types;
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";
import { type BuildOptionsType } from "./types/types";

export const buildDevServer = (
  options: BuildOptionsType
): DevServerConfiguration => {
  const { port } = options;

  return {
    port,
    open: true,
    hot: true,
  };
};
