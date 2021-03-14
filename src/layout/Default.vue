<template>
  <div class="pageWrapper" ref="pageWrapper">
    <topbar />
    <portalFrame />
    <img :src="require('../assets/branding.png')" class="branding">
    <slot />
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue';
import PortalFrame from '@/components/PortalFrame.vue';

export default {
  components: { Topbar, PortalFrame },
};
</script>

<style lang="scss" scoped>
.pageWrapper {
  height: 93%
}

.branding {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 220px;
  height: 200px;

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
}
</style>
