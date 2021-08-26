<template>
    <vue-draggable-resizable
        :drag-handle="'.fab'"
        class="fab"
        v-show="visible"
    >
    <router-link :to="to">
        <img :src="require('@/assets/icons/icon_home.svg')" class="fab-icon">
    </router-link>
    </vue-draggable-resizable>
</template>

<script>
export default {
  name: 'floatButton',
  props: {
    to: {
      type: String,
      require: true,
    },
    visible: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.fab {
    position: absolute;
    bottom: 26px;
    right: 26px;
    width: 50px !important;
    height: 50px !important;
    background-color: #ff9d0094;
    // opacity: 0.6;
    border-radius: 50%;
    filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.1));
    z-index: 1000;
    transition: all 0.5s;
    touch-action: none;

    &-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-47%, -50%);
        width: 25px;
        opacity: 0.8;
    }

    &:hover {
        background-color: var(--color-accent-dark);
        opacity: 1;
        filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.6));
    }

    &:focus {
        box-shadow: 0px 0px 0px 3px var(--color-accent);
        outline: none !important;
    }
}
</style>
