<template>
    <div class="portals">
      <portal
          v-for="portal in this.portals"
          :key="portal.text"
          :text="$t(portal.text)"
          :icon="portal.icon"
          :to="portal.to"
      />
    </div>
</template>

<script>
import Portal from '@/components/Portal.vue';

export default {
  name: 'portalFrame',
  components: { Portal },
  data() {
    return {
      portals: [
        {
          text: 'portal.name.aboutMe',
          icon: 'icon_book.svg',
          to: '/',
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
.portals {
  margin: 20px 0 0 15px;
  position: absolute;
}
</style>
