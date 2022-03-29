const path = require('path');
const { defineConfig } = require('@vue/cli-service');

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'de',
      fallbackLocale: 'de',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },

  // css: {
  //   loaderOptions: {
  //     sass: {
  //       additionalData: '@import "@/styles/main.scss";',
  //     },
  //   },
  // },

  pwa: {
    name: 'Christian Sommer - Website',
    themeColor: '#275a95',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
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

  transpileDependencies: [
    'vuetify',
  ],
};

module.exports = defineConfig({
  lintOnSave:false,
});
