import path from 'path';

// plugins;
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin, type Configuration } from 'webpack';

const config: Configuration = {
  mode: `development`,
  entry: path.resolve(__dirname, `src`, `index.ts`),
  output: {
    filename: `[name].[contenthash:8].js`,
    path: path.resolve(__dirname, `dist`),
    clean: true,
  },
  plugins: [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `public`, `index.html`),
      minify: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: `ts-loader`,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [`.tsx`, `.ts`, `.js`, `.json`],
  },
};

export default config;
