// libraries;
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

// types;
import { type ModuleOptions } from 'webpack';
import { type BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): ModuleOptions[`rules`] => {
  const { isDev } = options;

  const typescriptLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: `ts-loader`,
      options: {
        getCustomTransformers: () => ({
          before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
        }),
        transpileOnly: isDev,
      },
    },
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

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [`@svgr/webpack`],
  };

  const assetsLoader = {
    test: /\.(png|jpg|gif)$/i,
    type: 'asset/resource',
  };

  return [assetsLoader, svgLoader, scssLoader, typescriptLoader];
};
