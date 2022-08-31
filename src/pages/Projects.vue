<template>
        <window :name="$t('portal.name.projects')" :width=850 :height=600>
          <navbar :btnList="groups" @onSelect="this.select" />
          <div class="projectWrapper">
            <div class="projectList">
              <card
                v-for="project in projectList"
                :key="project.title"
                :id="project.id"
                :date="project.date"
                :title="project.title"
                :description="project.description"
                :category="project.category"
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
import data from '@/static/project';
import Navbar from '@/components/Navbar/NavBar.vue';

export default {
  components: {
    Window,
    Card,
    Navbar,
  },
  data() {
    return {
      groups: [
        {
          name: 'pages.projects.category.work',
          category: data.category.WORK,
        },
        {
          name: 'pages.projects.category.projects',
          category: data.category.PROJECTS,
        },
        {
          name: 'pages.projects.category.university',
          category: data.category.UNIVERSITY,
        },
      ],
      selected: [],
      projects: data.projects,
    };
  },
  computed: {
    projectList() {
      const list = this.projects.sort((a, b) => {
        return b.date.localeCompare(a.date)
      });

      if (this.selected.length === 0) return list;
      return list.filter((project) => this.selected.includes(project.category));
    },
  },
  methods: {
    select(selected) {
      this.selected = selected;
    },
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
