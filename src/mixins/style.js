const saveToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error(error);
  }
};

export default {
  data() {
    return {
      theme: 'dark',
      language: 'en',
      devMode: 'hidden',
    };
  },
  mounted() {
    try {
      const language = localStorage.getItem('language');
      const theme = localStorage.getItem('theme');
      const devMode = localStorage.getItem('devMode');
      this.$_setLanguage(language);
      this.$_setTheme(theme);
      this.$_setDevMode(devMode);
      /* eslint-disable-next-line */
    } catch (ignored) { }
  },
  methods: {
    $_setLanguage(language) {
      const lang = language || 'en';
      this.$i18n.locale = lang;
      document.documentElement.setAttribute('lang', lang);
      saveToLocalStorage('language', lang);
      this.language = lang;
    },
    $_setTheme(theme) {
      const them = theme || 'dark';
      document.documentElement.setAttribute('data-theme', them);
      saveToLocalStorage('theme', them);
      this.theme = them;
    },
    $_setDevMode(devMode) {
      const mode = devMode || 'hidden';
      saveToLocalStorage('devMode', mode);
      this.devMode = mode;
    },
  },
};
