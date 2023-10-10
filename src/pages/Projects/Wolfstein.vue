<template>
        <window :name="$t('portal.name.projects')" :width=850 :height=600 close="projects">
          <project-view>
            <h2>The Project</h2>
            <p>
              In the heart of Neumarkt, Germany, the ruins of Wolfstein Castle stand as a testament to
              the passage of time. As part of a project seminar in my senior classes, I was fortunate to
              be part of a team that embarked on an ambitious journey to bring this historical monument
              back to life through the power of technology.
              <br><br>
              Our goal was to create a 3D, walkable model of the castle using Google Cardboard.
              Google Cardboard is a virtual reality (VR) platform developed by Google.
              It's a user-friendly, affordable way to experience the immersive world of VR.
              It allows to transform every smartphone into a VR headset. 
              <br><br>
              In our project, we used these features of Google Cardboard to create an immersive 3D experience
              of Wolfstein Castle. By simply pressing the button on the Cardboard, users could walk around the
              castle and explore it as if they were really there. 
              We divided into two groups: the research team and the development team. 
              The research team was responsible for gathering data and facts about the castle,
              while the development team, which included me, focused on modeling and programming.
            </p>

            <h2>Project Process</h2>
            <p>
              The modeling team used Blender to create several iterations of the castle based
              on its ground plan and descriptions of its former appearance. You can see one of the iterations below:
              <div class="process">
              <VueCompareImage
                  sliderPositionPercentage = "0.05"
                  :rightImage="require('../../assets/projects/wolfstein/images/grundriss_gebaeude.png')"
                  :leftImage="require('../../assets/projects/wolfstein/images/grundriss_turm.png')"
              />
              </div><br>
              Meanwhile, our programming team worked on how to navigate within the Google Cardboard environment,
              which only has one button. We considered teleportation, walking in the direction one is looking at
              the press of the button, or an automatic rail system. Ultimately, we chose the walking option as it
              offered the most freedom.
            </p>

            <h2>The Implementation</h2>
            <p>
              We implemented the experience in Unity and made the Blender model walkable.
              We also decorated some rooms with props for added realism.
              To make the experience more informative, we placed info boxes at various points
              throughout the castle. When clicked, these boxes would provide auditory information
              about that particular area.
            </p>

            <h2>Reality vs. Reconstruction</h2>
            <p>
              Here you can see a comparison between what is left of the castle today and our reconstruction:
              <VueCompareImage
                  :leftImage="require('../../assets/projects/wolfstein/images/wolfsteinVR_reality.jpg')"
                  :rightImage="require('../../assets/projects/wolfstein/images/wolfsteinVR_vr.jpg')"
              />
              ↗️<a href="https://commons.wikimedia.org/wiki/File:Luftbild_Burgruine_Wolfstein.jpg">Image Source</a>
            </p>

            <h2>Final Result</h2>
            <p>
              The result was a fully immersive, 3D experience that allowed users to explore
              Wolfstein Castle as it might have been in its prime. This project not only taught us
              valuable skills in research, 3D modeling, and programming but also gave us a newfound
              appreciation for history and the stories that old ruins like Wolfstein Castle can tell.
            <video loop autoplay>
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
