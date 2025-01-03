import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin, type Configuration } from 'webpack';

const config: Configuration = {
  mode: `development`,
  entry: path.resolve(__dirname, `src`, `index.ts`),
  output: {
    filename: `[name].[contenthash].js`,
    path: path.resolve(__dirname, `dist`),
    clean: true,
  },
  plugins: [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `public`, `index.html`),
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
    extensions: [`.tsx`, `.ts`, `.jsx`, `.js`, `.json`],
  },
};

export default config;
