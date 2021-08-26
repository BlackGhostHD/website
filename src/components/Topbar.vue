<template>
    <div class="topbar">
        <div class="logo">
          <router-link :to="'desktop'">
            <img
                :src="require('../assets/logo.png')"
            />
          </router-link>
        </div>
        <div class="message">

        </div>
        <div class="time">
            {{data.time}}
        </div>
    </div>
</template>

<script>

export default {
  name: 'topbar',
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
	color: white;
	background-color: rgba(0, 0, 0, 0.3);
	height: 35px;

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
}

  .logo {
    align-self: center;
    padding-left: 10px;

    img {
      width: 35px;
      margin-top: 4px;
    }
  }

  .time {
    position: absolute;
    right: 0;
    padding: 20px;
    font-size: 18px;
    align-self: center;
  }

  .message {
    position: absolute;
    right: 50%;
    top: 5px;
    transform: translateX(50%);
  }

  .weather {
    position: absolute;
    right: 80px;
    top: 5px;
  }
</style>
