const path = require('path');

// plugins;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProgressPlugin } = require('webpack');

module.exports = {
  mode: `development`,
  entry: path.resolve(__dirname, `src`, `index.js`),
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
};
