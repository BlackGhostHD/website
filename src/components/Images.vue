<template>
    <img :src="require('../assets/'+img_src)" :alt="alt">
</template>

<script>
export default {
  name: 'images',
  data() {
    return {
      img_src: '',
    };
  },
  props: {
    alt: {
      type: String,
      require: false,
    },
    src: {
      type: String,
      require: true,
    },
    src_light: {
      type: String,
      require: false,
    },
  },
  mounted() {
    if (this.src_light == null) this.img_src = this.src;
    else if (document.documentElement.getAttribute('data-theme') === 'light') this.img_src = this.src_light;
    else this.img_src = this.src;
  },
};
</script>

<style lang="scss" scoped>
img {
    width: 100%;
}
</style>
