<template>
        <window :name="$t('portal.name.projects')">
          <under-construction />
        </window>
</template>

<script>
import UnderConstruction from '@/components/UnderConstruction.vue';
import Window from '../components/Window.vue';

export default {
  components: { Window, UnderConstruction },
};
</script>

<style lang="scss">

</style>
