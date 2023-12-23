// loaders;
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// types;
import { type RuleSetRule } from "webpack";
import { type BuildOptionsType } from "./types/types";

export const buildLoaders = (options: BuildOptionsType): RuleSetRule[] => {
  const { mode } = options;

  const isDev = mode === `development`;

  const svgLoader = {
    test: /\.svg$/,
    use: [`@svgr/webpack`],
  };

  const assetsLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    type: `asset/resource`,
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? `style-loader` : MiniCssExtractPlugin.loader,
      {
        loader: `css-loader`,
        options: {
          modules: {
            auto: true,
            localIdentName: isDev ? `[path][name]__[local]` : `[hash:base64:8]`,
          },
        },
      },
      `sass-loader`,
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: `ts-loader`,
    exclude: /node_modules/,
  };

  return [svgLoader, assetsLoader, scssLoader, tsLoader];
};
