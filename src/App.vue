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
      console.log(this);
      return this.$route.meta.layout || defaulLayout;
    },
  },
};
</script>

<style lang="scss"></style>
