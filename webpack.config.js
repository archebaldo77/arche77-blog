const path = require('path');

// plugins;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProgressPlugin } = require('webpack');

module.exports = {
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
