<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
const defaulLayout = 'defaultLayout';

export default {
  name: 'App',
  components: {},
  data() {
    return {};
  },
  computed: {
    layout() {
      return this.$route.meta.layout || defaulLayout;
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = `Christian Sommer ${to.meta.title || ''}`;
      },
    },
  },
};
</script>

<style lang="scss">
@font-face {
    font-family: 'FantasqueSansMono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(~@/assets/fonts/FantasqueSansMono-Regular.woff) format('woff');
}

html,body { height: 100%; margin: 0px; padding: 0px; overflow: hidden; }

#app {
  font-family: 'FantasqueSansMono';
  // background-image: url('~@/assets/background.jpg');
  background-color: #3881d5;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 100vh;
  color: white;
}

:root {
  --color-primary: #FFFFFF;
  --color-secondary: #F2AE42;
  --color-background: #273238;

  --color-danger: #DC4545;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-button {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-thumb {
  background: #485b65;
  border-radius: 54px;
  border: 0.5em solid rgba(0, 0, 0, 0);
}
::-webkit-scrollbar-thumb:hover {
  background: #5c737f;
}
::-webkit-scrollbar-thumb:active {
  background: #5c737f;
}
::-webkit-scrollbar-track {
  background: #272b2f;
  border-radius: 70px;
}
::-webkit-scrollbar-corner {
  background: transparent;
}

</style>
