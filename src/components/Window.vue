<template>
    <vue-draggable-resizable
        :drag-handle="'.windowHeader'"
        class="window"
        class-name="test"
        :parent="true"
        :w="w" :h="h"
        :x="x" :y="y"
        ref="test"
    >
        <window-header :name=name />
        <div class="content" @click='onClickButton'>
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
    };
  },
  props: {
    name: {
      type: String,
      require: true,
    },
    width: {
      type: Number,
      default: 800,
    },
    height: {
      type: Number,
      default: 500,
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
      if (width < this.width || height < this.height) {
        this.w = width;
        this.h = height;
      } else {
        this.x = window.innerWidth / 2 - (this.width / 2);
        this.y = window.innerHeight / 2 - (this.height / 2) - 50;
        this.w = this.width;
        this.h = this.height;
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

    .content {
        padding: 15px;
        height: 93.7%;
        overflow: auto;
    }
}
</style>
