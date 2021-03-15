<template>
    <div class="windowHeader">
        <div class="circle" @click="onClose"/>
        <div class="name">
            {{name}}
        </div>
            <hollow-dots-spinner class="loading"
                v-show="loading"
                :animation-duration="1500"
                :dot-size="5"
                :dots-num="3"
                color="#F2AE42"
            />
    </div>
</template>

<script>

import { HollowDotsSpinner } from 'epic-spinners';

export default {
  name: 'windowHeader',
  components: {
    HollowDotsSpinner,
  },
  data() {
    return {
      loading: false,
    };
  },
  mounted() {
    this.$eventBus.$emit('loadingWindow', false);
  },
  props: {
    name: {
      type: String,
      require: true,
    },
  },
  methods: {
    onClose() {
      // eslint-disable-next-line no-unused-expressions
      // window.history.length > 2 ? this.$router.go(-1) : this.$router.push('/');
      this.$router.push('/desktop');
    },
  },
  eventBus: {
    loadingWindow(payload) {
      this.loading = !!payload;
    },
  },
};
</script>

<style lang="scss" scoped>
.circle{
    position: absolute;
    background: var(--color-danger);
    border-radius: 50%;
    margin-top: 0.6px;
    width: 13px;
    height: 13px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: var(--color-danger-dark);
    }
}

.name {
    color: var(--color-text-muted);
    text-align: center;
}

.loading {
    position: absolute;
    right: 5px;
    top: 9px;
}

.windowHeader {
    padding: 5px;
    height: 25px;
    background-color: var(--color-window-background);
    cursor: move;
    border-bottom: 1px solid var(--color-window-separator);
}
</style>
