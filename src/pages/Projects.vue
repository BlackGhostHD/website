<template>
        <window :name="$t('portal.name.projects')" :width=850 :height=600>
          <div class="projectWrapper">
            <div class="projectList">
              <card
                v-for="project in projects"
                :key="project.title"
                :title="project.title"
                :description="project.description"
                :img="project.img"
                :link="project.link"
              />
            </div>
          </div>
        </window>
</template>

<script>
import Card from '@/components/Card.vue';
import Window from '@/components/Window.vue';

export default {
  components: {
    Window,
    Card,
  },
  data() {
    return {
      projects: [
        {
          title: 'Asteroids',
          description: 'Multiplayer clone of the 1979 Game: Asteroids for Atari',
          img: 'asteroids/card/img.png',
          link: '/projects/asteroids',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.projectWrapper {
  width: 100%;
  position: relative;
}

.projectList {
  max-width: 674px;
  display: block;
  position: relative;
  margin: auto;
}

@media (max-width: 700px) {
  .projectList {
    max-width: 450px;
  }
}

@media (max-width: 540px) {
  .projectList {
    max-width: 100%;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
  }
}

.card {
  margin: 5px;
}
</style>
