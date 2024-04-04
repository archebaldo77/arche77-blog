export const buildAssetsLoader = () => {
  return {
    test: /\.(png|jpg|gif)$/i,
    type: 'asset/resource',
  };
};
