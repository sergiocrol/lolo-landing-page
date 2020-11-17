module.exports = {
  basePath: '/lolo-landing-page/out',
  assetPrefix: '/lolo-landing-page/out/',
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
