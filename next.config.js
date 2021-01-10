const isProd = (process.env.NODE_ENV || 'production') === 'production';

module.exports = {
  // target: 'serverless',
  // exportPathMap: () => ({
  //   '/': { page: '/' },
  // }),
  i18n: {
    locales: ['es', 'ca'],
    defaultLocale: 'es',
  },
};
