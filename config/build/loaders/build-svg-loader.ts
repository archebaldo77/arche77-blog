export const buildSvgLoader = () => {
  return {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  };
};
