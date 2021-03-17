<template>
    <div class="wrap">
        <window :name="$t('portal.name.projects')" :width=850 :height=600 close="projects">
          <project-view
            name="Asteroids"
            description="Multiplayer clone of the 1979 Game: Asteroids for Atari"
            assets="asteroids"
            supportedLanguages="['en']"
          >
            <template v-slot:header>
              <router-link :to="'/games/asteroids'" class="button-launch">Start</router-link>
            </template>

            <h2>How to play</h2>
            <hr>
            <p>
              The game is only playable by keyboard input. Mobile phones are not supported.
              <images
                src="projects/asteroids/images/controls.png"
                src_light="projects/asteroids/images/controlsb.png"
              />
            </p>
            <h2>Project Details</h2>
            <hr>

            <p>
              ...tbd
            </p>
          </project-view>
        </window>
    </div>
</template>

<script>
import Window from '@/components/Window.vue';
import ProjectView from '@/components/ProjectView.vue';
import Images from '@/components/Images.vue';

export default {
  components: {
    Window,
    ProjectView,
    Images,
  },
};
</script>

<style lang="scss">
</style>
