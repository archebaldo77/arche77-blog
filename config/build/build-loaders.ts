// loaders;
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// types;
import { type RuleSetRule } from "webpack";
import { type BuildOptionsType } from "./types/types";

export const buildLoaders = (options: BuildOptionsType): RuleSetRule[] => {
  const { mode } = options;

  const isDev = mode === `development`;

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? `style-loader` : MiniCssExtractPlugin.loader,
      `css-loader`,
      `sass-loader`,
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: `ts-loader`,
    exclude: /node_modules/,
  };

  return [scssLoader, tsLoader];
};
