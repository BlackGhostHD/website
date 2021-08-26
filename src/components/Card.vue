<template>
    <router-link :to="link" class="card">
        <div class="card-header">
            <img :src="require('../assets/projects/'+img)">
            <div class="category">{{ $t(`pages.projects.category.${this.category}`) }}</div>
        </div>
        <div class="card-body">
            <span class="card-title">{{ title }}</span>
            <div class="card-description">{{ description }}</div>
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
    category: {
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
  max-width: 250px;
  height: 280px;
  border-radius: 5px;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2));

  &-header {
    overflow: hidden;

    img {
      max-width: 350px;
      height: 180px;
      border-radius: 5px;
      transition: transform 1s, filter .5s ease-out;
    }

    .category {
      color: #ffffff;
      position: absolute;
      top: 142px;
      right: 8px;
      font-size: 12px;
      background: var(--color-accent);
      border-radius: 5px;
      padding: 4px 4px 2px 6px;
    }
  }

  &-body {
    position: absolute;
    padding: 10px 10px;
    height: 100px;
    bottom: 10px;
    overflow: hidden;
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

@media (max-width: 540px) {
  .card {
    width: 100%;

    &-header {
      img {
        width: 100%;
      }
    }
  }
}
</style>
