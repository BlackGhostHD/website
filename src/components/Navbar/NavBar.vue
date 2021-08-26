<template>
  <div class="navBar">
    <btn
      v-for="btn in btnList"
      :name="btn.name"
      :category="btn.category"
      :key="btn.name"
      @onSelect="select"
    />
  </div>
</template>

<script>
import btn from './Btn.vue';

export default {
  name: 'labels',
  components: { btn },
  data() {
    return {
      selected: [],
    };
  },
  props: {
    btnList: {
      type: Array,
      require: true,
    },
  },
  methods: {
    select(name) {
      if (this.selected.includes(name)) {
        this.selected = this.selected.filter((n) => n !== name);
      } else {
        this.selected.push(name);
      }
      this.$emit('onSelect', this.selected);
    },
  },
};
</script>

<style lang="scss" scoped>
.navBar {
  width: 100%;
  margin: 4px 0 8px 0;
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  place-content: center;
}

</style>
