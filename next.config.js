const basePath =
  process.env.NODE_ENV === 'production' ? '/lolo-landing-page/out' : '';

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
