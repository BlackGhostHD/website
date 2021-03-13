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
      this.$router.push('/');
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

    .resizable-content {
        height: 100%;
        width: 100%;
        background-color: aqua;
    }

.circle{
    position: absolute;
    background: #DC4545;
    border-radius: 50%;
    margin-top: 2px;
    width: 10px;
    height: 10px;
    cursor: pointer;
}

.name {
    color: #7B7B7B;
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
    background-color: #273238;
    cursor: move;
    border-bottom: 1px solid #7070703b;
}
</style>
