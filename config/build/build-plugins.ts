// plugins;
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
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
    new MiniCssExtractPlugin({
      filename: `css/[name].[contenthash:8].css`,
      chunkFilename: `css/[name].[contenthash:8].css`,
    }),
  ];
};
