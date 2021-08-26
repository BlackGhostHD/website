<template>
  <button :class="['btn', isActive ? 'active' : '']" @click="this.switch" >
    {{ $t(this.name) }}
  </button>
</template>

<script>
export default {
  name: 'NavButton',
  data() {
    return {
      isActive: this.active,
    };
  },
  props: {
    name: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    switch() {
      this.isActive = !this.isActive;
      this.$emit('onSelect', this.category);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  margin: 0 5px 5px 5px;
  padding: 5px 10px;
  border-radius: 8px;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5));
  transition: all 0.2s;
  color: var(--color-window-separator);
  border: solid 1px var(--color-window-separator);

  &:hover {
    color: #ffffff;
    background-color: var(--color-text-muted);
    border-color: var(--color-text-muted);
  }

  &.active {
    color: #ffffff;
    background-color: var(--color-accent);
    border-color: var(--color-accent);
  }
}
</style>
