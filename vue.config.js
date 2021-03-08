const path = require('path');

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'de',
      fallbackLocale: 'de',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/main.scss";',
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        '@assets': path.join(__dirname, 'src/assets'),
        '@components': path.join(__dirname, 'src/components'),
        '@gql': path.join(__dirname, 'src/graphql/query'),
        '@graphql': path.join(__dirname, 'src/graphql/query'),
        '@layouts': path.join(__dirname, 'src/layouts'),
      },
    },
  },
};
