<template>
    <div class="wrap">
        <window :name="$t('portal.name.projects')" width="850" height="600" close="projects">
          <project-view />
        </window>
    </div>
</template>

<script>
import Window from '@/components/Window.vue';
import ProjectView from '@/components/ProjectView.vue';

export default {
  components: {
    Window,
    ProjectView,
  },
};
</script>

<style lang="scss">
</style>
