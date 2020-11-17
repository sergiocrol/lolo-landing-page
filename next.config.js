module.exports = {
  basePath: '/lolo-landing-page',
  assetPrefix: '/lolo-landing-page/',
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
