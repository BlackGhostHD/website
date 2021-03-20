<template>
  <div class="pageWrapper" ref="pageWrapper">
    <topbar v-if="!visible" />
    <portalFrame />
    <img :src="require('../assets/branding.png')" class="branding">
    <slot />
    <float-button :visible="visible" :to="'/desktop'" />
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue';
import PortalFrame from '@/components/PortalFrame.vue';
import FloatButton from '@/components/FloatButton.vue';

export default {
  components: { Topbar, PortalFrame, FloatButton },
  data() {
    return {
      visible: false,
    };
  },
  eventBus: {
    fab(payload) {
      this.visible = !!payload;
    },
  },
};
</script>

<style lang="scss" scoped>
.pageWrapper {
  height: 93%
}

@media (max-width: 540px) {
  .pageWrapper {
    height: 100%;
  }
}

.branding {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 220px;
  height: 200px;
  z-index: 0;

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
}
</style>
