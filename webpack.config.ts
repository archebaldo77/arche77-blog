import path from 'path';

// plugins;
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin } from 'webpack';

// types;
import { type Configuration } from 'webpack';

const config: Configuration = {
  mode: `development`,
  entry: path.resolve(__dirname, `src`, `index.tsx`),
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `dist`),
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
    extensions: [`.tsx`, `.ts`, `.js`, `.json`],
  },
};

export default config;
