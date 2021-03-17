<template>
  <div></div>
</template>

<script>

export default {
  name: 'desktopPage',
  mounted() {
    this.$eventBus.$emit('fab', false);
  },
};
</script>
