// libs;
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// types;
import { type ModuleOptions } from 'webpack';
import { type BuildOptions } from './types/types';

export const buildLoaders = (options: BuildOptions): ModuleOptions[`rules`] => {
  const { mode } = options;

  const isDev = mode === `development`;

  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  };

  const assetsLoader = {
    test: /\.(png|jpg|gif)$/i,
    type: 'asset/resource',
  };

  const cssLoader = {
    loader: `css-loader`,
    options: {
      modules: {
        auto: true,
        localIdentName: isDev ? `[path][name]__[local]` : `[hash:base64]`,
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? `style-loader` : MiniCssExtractPlugin.loader,
      cssLoader,
      `sass-loader`,
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: `ts-loader`,
    exclude: /node_modules/,
  };

  return [typescriptLoader, scssLoader, svgLoader, assetsLoader];
};
