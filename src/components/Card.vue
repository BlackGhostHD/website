<template>
    <router-link :to="`projects/${id}`" class="card">
        <div class="card-header">
            <img :src="require(`../assets/projects/${this.id}/card/img.jpg`)">
        </div>
        <div class="category">{{ $t(`pages.projects.category.${this.category}`) }}</div>
        <div class="date" v-if="dateString">{{dateString}}</div>
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
    id: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: false,
    },
    description: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
  },
  computed: {
    dateString() {
      if (!this.date) return '';
      if (isNaN(new Date(this.date))) return 'ONGOING';
      return new Date(this.date).toLocaleDateString('de-DE', {month: 'short', year: 'numeric'});
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  color: #ffffff;
  text-decoration: none;
}

.card {
  background-color: var(--color-window-separator);
  display: inline-block;
  position: relative;
  max-width: 214px;
  height: 255px;
  border-radius: 5px;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2));

  &-header {
    overflow: hidden;
    border-radius: 5px 5px 0 0;  
    height: 140px;  

    img {
      max-width: 214px;
      height: inherit;
      transition: transform 1s, filter .5s ease-out;
    }

  }

    .date {
      position: absolute;
      right: 5px;
      bottom: 122px;
      color: #ffffff;
      font-size: 12px;
      width: fit-content;
      height: 20px;
      border-radius: 5px;
      padding: 4px 4px;
      background-color: var(--color-window-separator);
    }

    .category {
      position: absolute;
      top: 112px;
      left: 5px;
      color: #ffffff;
      font-size: 14px;
      width: fit-content;
      height: 22px;
      background: var(--color-accent);
      border-radius: 5px;
      padding: 4px 4px;
    }

  &-body {
    padding: 10px 10px;
    height: 100px;
    overflow: hidden;
    border-radius: 0 0 5px 5px;
    transition: all 0.3s ease-in;
  }

  &:hover &-header img {
    transform: scale(1.4);
  }

  &-title {
    font-size: 18px;
    display: flex;
    align-items: center;
    height: 19px;
  }

  &-description {
    font-size: 14px;
    line-height: 14px;
    margin-top: 15px;
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
