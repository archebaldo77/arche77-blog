// packages;
import path from "path";

// plugins;
import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin } from "webpack";

// types;
import { type Configuration } from "webpack";

const config: Configuration = {
  mode: `development`,
  entry: path.resolve(__dirname, `src`, `index.ts`),
  output: {
    filename: `[name].[contenthash:8].js`,
    path: path.resolve(__dirname, `build`),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `public`, `index.html`),
    }),
    new ProgressPlugin(),
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
