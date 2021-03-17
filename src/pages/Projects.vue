<template>
    <div class="wrap">
        <window :name="$t('portal.name.projects')" width="850" height="600">
          <card
            title="Asteroids"
            description="Multiplayer clone of the 1979 Game: Asteroids for Atari"
            img="asteroids/card/img.png"
            link="/projects/asteroids"
          />
        </window>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
import Window from '@/components/Window.vue';

export default {
  components: {
    Window,
    Card,
  },
};
</script>

<style lang="scss">
.wrap {
  height: inherit;
}

.game {
  color: var(--color-text);
  border:none;
}
</style>
