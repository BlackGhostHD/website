<template>
        <window :name="$t('portal.name.projects')" :width=850 :height=600 close="projects">
          <project-view>
            <h2>Project Process</h2>
            <p>
              <div class="process">
              <VueCompareImage 
                  sliderPositionPercentage = "0.05"
                  :rightImage="require('../../assets/projects/wolfstein/images/grundriss_gebaeude.png')" 
                  :leftImage="require('../../assets/projects/wolfstein/images/grundriss_turm.png')" 
              />
              </div>
            </p>

            <h2>Reality vs. Reconstruction</h2>
            <p>
              <VueCompareImage 
                  :leftImage="require('../../assets/projects/wolfstein/images/wolfsteinVR_reality.jpg')" 
                  :rightImage="require('../../assets/projects/wolfstein/images/wolfsteinVR_vr.jpg')" 
              />
            </p>

            <h2>Final Result</h2>
            <p>
            Here you can see the final version in a topdown view:
            <video autoplay loop>
                <source src="../../assets/projects/wolfstein/images/WolfsteinFlug.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            </p>

          </project-view>
        </window>
</template>

<script>
import Window from '@/components/Window.vue';
import ProjectView from '@/components/ProjectView.vue';
import Images from '@/components/Images.vue';
import VueCompareImage from 'vue-compare-image';

export default {
  components: {
    Window,
    ProjectView,
    Images,
    VueCompareImage,
  },
};
</script>
<style lang="scss">
.process{
  width: 450px;
  display: flex;
  margin: auto;
}
</style>
