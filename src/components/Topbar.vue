<template>
    <div class="topbar">
        <div class="logo">
          <router-link :to="'desktop'">
            <img
                :src="require('../assets/logo.png')"
                height="40px"
            />
          </router-link>
        </div>
        <div class="time">
            {{data.time}}
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      interval: null,
      data: {
        time: '--:--',
      },
    };
  },
  mounted() {
    this.updateData();
    this.interval = setInterval(() => {
      this.updateData();
    }, 1000);
  },
  destroyed() {
    clearInterval(this.interval);
  },
  methods: {
    updateData() {
      const time = new Date();
      // eslint-disable-next-line max-len
      this.data.time = `${time.getHours() <= 9 ? '0' : ''}${time.getHours()}:${time.getMinutes() <= 9 ? '0' : ''}${time.getMinutes()}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.topbar {
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.3);
  height: 50px;

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
}

  .logo {
    align-self: center;
    padding-left: 10px;
  }

  .time {
    position: absolute;
    right: 0;
    padding: 20px;
    font-size: 18px;
    align-self: center;
    color: white;
  }
</style>
