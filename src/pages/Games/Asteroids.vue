<template>
    <window name="Game: Asteroids" :width=960 :height=670 close="projects/asteroids">
        <iframe src="https://sommerchristian.de/game/asteroids/" width="960" height="620" class="game" scrolling="no" />
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
  padding: 10px;
  color: var(--color-text);
  border:none;
}
</style>
