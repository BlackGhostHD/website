<template>
    <div :class="['portals', visible ? 'visible' : '']">
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
      visible: false,
      portals: [
        {
          text: 'portal.name.aboutMe',
          icon: 'icon_book.svg',
          to: '/',
        },
        {
          text: 'portal.name.contactMe',
          icon: 'icon_contact.svg',
          to: '/contact',
        },
        {
          text: 'portal.name.projects',
          icon: 'icon_exp.svg',
          to: '/projects',
        },
        {
          text: 'portal.name.terminal',
          icon: 'icon_terminal.svg',
          to: '/terminal',
        },
        {
          text: 'portal.name.settings',
          icon: 'icon_setting.svg',
          to: '/settings',
        },
      ],
    };
  },
  created() {
    setTimeout(() => {
      this.visible = true;
    }, 200);
  },
};
</script>

<style lang="scss" scoped>
.portals {
  margin: 20px 0 0 15px;
  width: 280px;
  position: absolute;
  display: flex;
  flex-flow: column;
  opacity: 0;
  transition: all 0.3s;

  &.visible {
    opacity: 1;
  }
}

@media (max-width: 540px) {
  .portals {
    padding: 44px 20px 20px 20px;
    flex-flow: row;
    flex-wrap: wrap;
    margin: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, 0.082);
    box-shadow: 6px 6px 10px rgba(69, 101, 206, 0.3) inset;
    border-radius: 10px;
  }
}
</style>
