// libraries;
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// types;
import { type ModuleOptions } from 'webpack';
import { type BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): ModuleOptions[`rules`] => {
  const { isDev } = options;

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: `ts-loader`,
    exclude: /node_modules/,
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? `style-loader` : MiniCssExtractPlugin.loader,
      `css-loader`,
      `sass-loader`,
    ],
  };

  return [scssLoader, typescriptLoader];
};
