<template>
  <div class="projectView" ref="projectView">
    <div
      class="projectView-background"
      :style="{ 'background-image': `url(${backgroundImage})` }"
    />
    <div class="projectView-header">
      <div :class="['projectView-back', top ? 'top' : '']">
      </div>
        <div :class="['innerWrapper', top ? 'top' : '']">
          <router-link :to="'/projects'">
            <img src="../assets/icons/icon_arrow.svg" width="20">
          </router-link>
          <div class="name">
            {{ name }}
          </div>
        </div>
    </div>
    <div class="projectView-body">
      <div class="details">
        <div class="projectView-name">
          {{ name }}
        </div>
        <div class="projectView-description">
          {{ description }}
        </div>
        <slot name="header" />
        <language-not-supported :supportedLanguages="supportedLanguages" />
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import LanguageNotSupported from './Callout/LanguageNotSupported.vue';
import data from '../static/project';

export default {
  name: 'projectView',
  components: { LanguageNotSupported },
  data() {
    return {
      top: true,
      name: '',
      description: '',
      assets: '',
      supportedLanguages: [],
    };
  },
  beforeMount() {
    const id = this.$route.name;
    const project = data.projects.find((el) => el.id === id);
    if(project) {
      this.name = project.title;
      this.description = project.description;
      this.assets = id;
      this.supportedLanguages = project.languages;
    }
  },
  mounted() {
    document.querySelector('#content').addEventListener('scroll', this.scroll);
  },
  computed: {
    backgroundImage() {
      /* eslint-disable-next-line */
      return require(`../assets/projects/${this.assets}/images/background.png`);
    },
  },
  methods: {
    scroll(elem) {
      this.top = elem?.target.scrollTop <= 350;
    },
  },
};
</script>

<style lang="scss" scoped>
.projectView {
  max-width: 1000px;

  &-header {
    height: 360px;
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
    z-index: 2;

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
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
    width: 100%;
    height: 400px;
    border-radius: 0 0 8px 8px;
    top: 25px;
    left: 0;
    z-index: -5;
  }

  .details {
    min-height: 178px;
    margin-bottom: 60px;
    border-bottom: 1px solid var(--color-window-separator);
  }

  &-name {
    position: relative;
    padding-top: 20px;
    color: #ffffff;
    font-size: 30px;
  }

  &-description {
    position: relative;
    color: #e7e7e7;
    letter-spacing: 0.02rem;
    margin-bottom: 20px;
  }

  &-body {
    position: relative;
    width: 849px;
    left: -20px;
    padding: 10px 50px;
    background-color: var(--color-window-background);

    p {
      margin-bottom: 30px;
    }

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

    &-header {
      margin-bottom: 10px;
    }

    .innerWrapper{
      left: 11px;
    }
  }
}
</style>
