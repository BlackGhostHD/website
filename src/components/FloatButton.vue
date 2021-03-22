<template>
    <router-link class="fab" v-show="visible" :to="to">
        <img :src="require('@/assets/icons/icon_menu.svg')" class="fab-icon">
    </router-link>
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
    bottom: 28px;
    right: 28px;
    width: 50px;
    height: 50px;
    background-color: var(--color-accent);
    opacity: 0.6;
    border-radius: 50%;
    filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.1));
    z-index: 10;
    transition: all 0.5s;

    &-icon {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 25px;
        filter: invert(1);
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
