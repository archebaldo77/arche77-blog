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
      {
        loader: `css-loader`,
        options: {
          modules: {
            auto: true,
            localIdentName: isDev ? `[path][local]` : `[hash:base64:8]`,
          },
        },
      },
      `sass-loader`,
    ],
  };

  return [scssLoader, typescriptLoader];
};
