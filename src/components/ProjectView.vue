<template>
  <div class="projectView" ref="projectView">
    <div class="projectView-background">
    </div>
    <div class="projectView-header">
      <div :class="['projectView-back', top ? 'top' : '']">
      </div>
        <div :class="['innerWrapper', top ? 'top' : '']">
          <router-link :to="'/projects'">
            <img src="../assets/icons/icon_arrow.svg" width="20">
          </router-link>
          <div class="name">
            Asteroids
          </div>
        </div>
      <div class="projectView-name">
        Asteroids
      </div>
      <div class="projectView-description">
        Multiplayer clone of the 1979 Game: Asteroids for Atari
      </div>
      <router-link :to="'/games/asteroids'" class="button-launch">Start</router-link>
    </div>
    <div class="projectView-body">
      <language-not-supported :supportedLanguages="['en']" />
      <h2>How to play</h2>
      <hr>
      <images src="projects/asteroids/images/controls.png" src_light="projects/asteroids/images/controlsb.png" />
      <h2>Project Details</h2>
      <hr>
      <p>
        <!-- eslint-disable-next-line -->
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   
      </p>
    </div>
  </div>
</template>

<script>
import LanguageNotSupported from './Callout/LanguageNotSupported.vue';
import Images from './Images.vue';

export default {
  name: 'projectView',
  components: { LanguageNotSupported, Images },
  data() {
    return {
      top: true,
    };
  },
  mounted() {
    document.querySelector('#content').addEventListener('scroll', this.scroll);
  },
  methods: {
    scroll(elem) {
      this.top = elem?.target.scrollTop <= 130;
    },
  },
};
</script>

<style lang="scss" scoped>
.projectView {
  max-width: 1000px;
  padding: 10px 20px;
  margin: auto;

  &-header {
    height: 150px;
    padding-left: 20px;
    border-bottom: 1px solid var(--color-window-separator);

    .button-launch {
      position: relative;
      color: #ffffff;
      text-decoration: none;
      padding: 5px 13px 5px 35px;
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
        top: 5px;
        left: 10px;
      }

      &:hover {
        background-color: var(--color-accent);
      }
    }
  }

  &-back {
    position: absolute;
    width: 100%;
    height: 40px;
    left: 0;
    top: 25px;
    background-color: #232325;
    filter: drop-shadow(0px 4px 1px rgba(0, 0, 0, 0.1));
    transition: all 0.8s;
    z-index: -1;

    &.top {
      background-color: transparent;
    }
  }

  .innerWrapper {
      position: absolute;
      display: flex;
      flex-flow: row;
      top: 35px;
      left: 17px;
      z-index: 100;

    a {
      filter: invert(1) opacity(0.75);
      transition: all 0.2s;
    }

    a:hover {
      filter: invert(1) opacity(1);
    }

    .name {
      margin-top: 1.5px;
      padding-left: 20px;
      color: #ffffff;
      transition: all 0.2s;
    }

    &.top .name {
      opacity: 0;
    }
  }

  &-background {
    position: absolute;
    background-image: url('../assets/projects/asteroids/images/background.png');
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
    width: 100%;
    height: 175px;
    top: 25px;
    left: 0;
    z-index: -5;
  }

  &-name {
    position: relative;
    padding-top: 20px;
    color: #ffffff;
    font-size: 30px;
    z-index: 2;
  }

  &-description {
    position: relative;
    color: var(--color-text-muted);
    letter-spacing: 0.02rem;
    margin-bottom: 20px;
    z-index: 2;
  }

  &-body {
    position: relative;
    padding: 20px 20px;
    background-color: var(--color-window-background);
    border-radius: 10px;
    z-index: -2;

    hr {
      margin-top: 5px;
      margin-bottom: 10px;
      border-color: var(--color-window-separator);
    }
  }
}

@media (max-width: 540px) {
  .projectView {
    padding: 0;
  }
}
</style>
