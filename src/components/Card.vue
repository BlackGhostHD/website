<template>
    <router-link :to="link">
        <div class="card">
          <div class="card-header">
              <img :src="require('../assets/projects/'+img)">
          </div>
          <div class="card-body">
              <span class="card-title">{{ title }}</span>
              <div class="card-description">{{ description }}</div>
          </div>
        </div>
    </router-link>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    link: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: #ffffff;
  text-decoration: none;
}

.card {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 280px;
  border-radius: 5px;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2));

  &-header {
    overflow: hidden;

    img {
      width: 200px;
      height: 180px;
      border-radius: 5px;
      transition: transform 1s, filter .5s ease-out;
    }
  }

  &-body {
    position: absolute;
    padding: 10px 10px;
    height: 100px;
    bottom: 10px;
    background-color: var(--color-accent);
    border-radius: 0 0 5px 5px;
    transition: all 0.3s ease-in;
  }

  &:hover &-header img {
    transform: scale(1.5);
  }

  &-title {
    font-size: 20px;
  }

  &-description {
    line-height: 14px;
    margin-top: 8px;
    font-size: 15px;
  }
}
</style>
