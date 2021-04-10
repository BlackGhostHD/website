<template>
    <div class="callout" v-if="show">
        {{text}}
        <button class="callout-close" @click="show = false" v-if="collapsible"> x </button>
    </div>
</template>

<script>
export default {
  name: 'callout',
  props: {
    text: {
      type: String,
      require: true,
    },
    collapsible: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style lang="scss" scoped>
    .callout {
        position: relative;
        padding: 10px 30px 10px 10px;
        margin: 10px 0;
        font-size: 14px;
        background-color: var(--color-window-separator);
        box-shadow: 1px 1px 1px rgba(73, 54, 73, 0.2) inset;
        border-radius: 8px;

        &-close {
            position: absolute;
            right: 12px;
            top: 10px;
            font-size: 18px;
            color: var(--color-text-muted);

            &:hover {
                color: var(--color-text);
            }
        }
    }
</style>
