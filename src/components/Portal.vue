<template>
    <router-link :to="to" class="portal" v-show="show">
        <img :src="require('../assets/icons/'+icon)" class="icon">
        <div class="text">
            {{text}}
        </div>
    </router-link>
</template>

<script>
import style from '@/mixins/style';

export default {
  name: 'portal',
  mixins: [style],
  props: {
    icon: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    to: {
      type: String,
      require: true,
    },
    mode: {
      type: String,
      default: () => '',
      validator: (value) => ['', 'devMode'].includes(value),
    },
  },
  computed: {
    show() {
      return !(this.mode === 'devMode' && this.$data.devMode !== 'on');
    },
  },
};
</script>

<style lang="scss" scoped>
.portal {
    position: relative;
    display: flex;
    flex-flow: column;
    width: 80px;
    height: 70px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 15px;

    &:hover {
        color: var(--color-accent);
    }

    .icon {
      width: 40px;
      height: 120px;
    }

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
}

a {
    text-decoration: none;
    color: #ffffff;
}

.text {
    position: relative;
    height: 80px;
    margin-top: 6px;
    font-size: 13px;
    text-align: center;
    margin-bottom: 20px;
}

@media (max-width: 540px) {
  .text {
    margin-bottom: 0;
  }
}
</style>
