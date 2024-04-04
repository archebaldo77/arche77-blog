import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildSccsLoader = (isDev: boolean) => {
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

  return scssLoader;
};
