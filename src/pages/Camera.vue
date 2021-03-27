<template>
        <window name="Camera" :width="350" :height="500">
          <video class="videoStream" autoplay></video>
        </window>
</template>

<script>
import Window from '../components/Window.vue';

export default {
  name: 'CameraPage',
  components: { Window },
  data() {
    return {
      stream: null,
    };
  },
  computed: {
    supportedCamera() {
      return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    },
  },
  mounted() {
    if (this.supportedCamera) {
      const config = {
        video: true,
      };

      const video = document.querySelector('video');

      navigator.mediaDevices.getUserMedia(config).then((stream) => {
        this.stream = stream;
        video.srcObject = stream;
      });
    }
  },
  beforeDestroy() {
    this.stream.getTracks().forEach((track) => {
      if (track.readyState === 'live') {
        track.stop();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.videoStream{
  position: absolute;
  left: 0;
  top: 25px;
  height: fit-content;
  width: 100%;
}
</style>
