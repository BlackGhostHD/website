<template>
  <div class="pageWrapper" ref="pageWrapper">
    <topbar />
    <div class="portals">
      <portal
          v-for="portal in this.portals"
          :key="portal.text"
          :text="$t(portal.text)"
          :icon="portal.icon"
          :to="portal.to"
      />
    </div>
    <img :src="require('../assets/branding.png')" class="branding">
    <slot />
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue';
import Portal from '@/components/Portal.vue';

export default {
  components: { Topbar, Portal },
  data() {
    return {
      portals: [
        {
          text: 'portal.name.aboutMe',
          icon: 'icon_book.svg',
          to: 'about',
        },
        {
          text: 'portal.name.contactMe',
          icon: 'icon_contact.svg',
          to: 'contact',
        },
        {
          text: 'portal.name.projects',
          icon: 'icon_exp.svg',
          to: 'projects',
        },
        {
          text: 'portal.name.terminal',
          icon: 'icon_terminal.svg',
          to: 'terminal',
        },
        {
          text: 'portal.name.settings',
          icon: 'icon_setting.svg',
          to: 'settings',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.pageWrapper {
  height: 93%
}

.portals {
  margin: 20px 0 0 15px;
  position: absolute;
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
