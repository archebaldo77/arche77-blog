// packages;
import path from "path";

// types;
import { type Configuration } from "webpack";

const config: Configuration = {
  mode: `development`,
  entry: path.resolve(__dirname, `src`, `index.ts`),
  output: {
    filename: `main.js`,
    path: path.resolve(__dirname, `build`),
  },
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
    extensions: [`.tsx`, `.ts`, `.js`],
  },
};

export default config;
