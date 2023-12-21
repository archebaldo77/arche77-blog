// plugins;
import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin } from "webpack";

// types;
import { type WebpackPluginInstance } from "webpack";
import { type BuildOptionsType } from "./types/types";

export const buildPlugins = (
  options: BuildOptionsType
): WebpackPluginInstance[] => {
  const { paths } = options;

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
  ];
};
