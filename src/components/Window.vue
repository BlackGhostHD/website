<template>
    <vue-draggable-resizable
        :drag-handle="'.windowHeader'"
        class="window"
        :parent="true"
        :w="w" :h="h"
        :x="x" :y="y"
    >
        <window-header :name=name :close="close" />
        <div class="content" @click='onClickButton' id="content">
            <slot/>
        </div>
    </vue-draggable-resizable>
</template>

<script>
import WindowHeader from './WindowHeader.vue';

export default {
  components: { WindowHeader },
  name: 'window',
  data() {
    return {
      w: this.width,
      h: this.height,
      x: 0,
      y: 0,
      fullscreen: false,
    };
  },
  props: {
    name: {
      type: String,
      require: true,
    },
    width: {
      type: Number,
      default: 850,
    },
    height: {
      type: Number,
      default: 600,
    },
    close: {
      type: String,
      require: false,
    },
  },
  mounted() {
    this.calcSize(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', () => {
      this.calcSize(window.innerWidth, window.innerHeight);
    });
  },
  methods: {
    onClickButton() {
      this.$emit('click');
    },
    calcSize(width, height) {
      if (width < this.width || height < this.height || this.fullscreen) {
        this.w = width;
        this.h = height;
        this.x = 0;
        this.y = 0;
        this.$eventBus.$emit('fab', true);
      } else {
        this.x = window.innerWidth / 2 - (this.width / 2);
        this.y = window.innerHeight / 2 - (this.height / 2) - 25;
        this.w = this.width;
        this.h = this.height;
        this.$eventBus.$emit('fab', false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.window{
    position: absolute;
    background-color: var(--color-window-background);
    border-radius: 8px;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5));
    z-index: 10;

    .content {
        padding: 15px;
        height: 93.7%;
        overflow: auto;
    }
}
</style>
