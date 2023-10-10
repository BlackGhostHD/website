<template>
        <window :name="$t('portal.name.projects')" :width=850 :height=600 close="projects">
          <project-view
            name="Asteroids"
            description="Multiplayer clone of the 1979 Game: Asteroids for Atari"
            assets="asteroids"
            :supportedLanguages="['en']"
          >
            <template v-slot:header>
              <router-link :to="'/games/asteroids'" class="button-launch">Start</router-link>
            </template>

            <h2>How to play</h2>
            <p>
              The game is only playable by keyboard input. Mobile phones are not supported.
              <images
                src="projects/asteroids/images/controls.png"
                src_light="projects/asteroids/images/controlsb.png"
              />
            </p>
            <h2>Project Details</h2>
            <h4>Project objectives</h4>
            <p>
              This was my first JavaScript (JS) project I programmed.
              It should make it easier for me to start my internship at the HPI School-Cloud,
              where JS is used besides other languages.
              <br>
              On the search for a suitable project,
              I finally thought of the idea to create a clone of the 1979 Game: Asteroids
              for Atari. But I didn't only want to create a clone, but also something of my own,
              so I decided to make it a mutliplayer game.
            </p>

          </project-view>
        </window>
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
    .button-launch {
      height: 35px;
      width: 90px;
      position: relative;
      color: #ffffff;
      text-decoration: none;
      padding: 8px 13px 5px 35px;
      margin-right: 10px;
      border: 1.5px solid var(--color-accent);
      border-radius: 8px;
      transition: all 0.8s;
      z-index: 2;

      &::before {
        content:"";
        background-image: url(~@/assets/icons/icon_paperPlane.svg);
        background-size: 14px;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 8px;
        left: 10px;
      }

      &:hover {
        background-color: var(--color-accent);
      }
    }
</style>
