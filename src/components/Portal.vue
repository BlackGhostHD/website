<template>
    <router-link :to="to" class="portal">
        <img :src="require('../assets/icons/'+icon)" height="40px" class="icon">
        <div class="text">
            {{text}}
        </div>
    </router-link>
</template>

<script>
export default {
  name: 'portal',
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
  },
  methods: {
    click() {
      console.log('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.portal {
    width: 80px;
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
        color: var(--color-accent);
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
    margin-top: 6px;
    font-size: 13px;
    text-align: center;
}
</style>
