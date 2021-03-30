<template>
    <div class="wrapperKarlKlammer" v-show="visible">
        <div class="dialog" v-show="active">
            Hello there.
        </div>
        <div :class="['karlKlammer', active ? 'active' : '']" @click="active = !active">
            <img :src="require('../assets/clippy.png')">
            <div class="eye eye-left"></div>
            <div class="eye eye-right"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'returnOfKarlKlammer',
  data() {
    return {
      active: false,
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    const klammer = document.querySelector('.wrapperKarlKlammer');
    const left = document.querySelector('.eye-left');
    const right = document.querySelector('.eye-right');
    window.addEventListener('mousemove', (evt) => {
      const x = Math.min(Math.max(-(klammer.offsetLeft - evt.pageX) / 120, -6.5), 6.5);
      const y = Math.min(Math.max(-(klammer.offsetTop - evt.pageY) / 120, -6.5), 6.5);
      left.style.transform = `translateY(${y}px) translateX(${x}px)`;
      right.style.transform = `translateY(${y}px) translateX(${x}px)`;
    });
  },
};
</script>

<style lang="scss" scoped>
.wrapperKarlKlammer{
    position: absolute;
    right: 20px;
    bottom: 0px;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5));

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */

    .dialog {
        position: absolute;
        right: 80px;
        top: 0px;
        width: fit-content;
        min-width: 140px;
        max-width: 150px;
        height: fit-content;
        max-height: 120px;
        padding: 10px;
        border-radius: 10px 10px 0 10px;
        background-color: var(--color-window-background);
        // filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5));
    }

    .karlKlammer {
        position: relative;
        height: 55px;
        overflow: hidden;
        transition: all 0.3s;

        &:hover {
            height: 75px;
        }

        &.active {
            height: 140px;
        }

        img {
            width: 75px;
        }

        .eye{
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: black;
            border-radius: 50%;

            &-left {
                top: 26px;
                right: 24px;
            }

            &-right {
                top: 23px;
                right: 52px;
            }
        }
    }
}
</style>
