<template>
    <window name="Test" :width=992 :height=683 close="projects/asteroids">
        <iframe src="https://sommerchristian.de/games/asteroids/" width="960" height="620" class="game" scrolling="no" />
    </window>
</template>

<script>
import Window from '@/components/Window.vue';

export default {
  components: { Window },
  mounted() {
    this.$eventBus.$emit('fab', false);
  },
};
</script>

<style lang="scss">
.game {
  color: var(--color-text);
  border:none;
}
</style>
