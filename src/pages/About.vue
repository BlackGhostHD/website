<template>
        <window :name="$t('portal.name.aboutMe')">
          <div class="aboutWrapper">
            <div class="aboutHeader">
              <div class="side">
                {{ $t('pages.aboutMe.header.intro') }}
                <div class="aboutHeader-name">
                  <span class="surname">Christian</span> Sommer
                </div>
                <p class="aboutHeader-msg" v-html="$t('pages.aboutMe.header.msg')">
                </p>

                <router-link :to="'projects'" class="work">
                  <img :src="require('../assets/icons/icon_exp.svg')">
                  <p class="text">{{ $t('pages.aboutMe.button.callToAction') }}</p>
                </router-link>
              </div>
              <img :src="require('../assets/profil.jpg')" class="aboutHeader-profil">
            </div>
            <br>

            <!-- AboutMe -------------------------------------------------- -->
            <!-- <h2>About Me</h2>
            <p>

            </p> -->
            <div class="spacing"></div>

            <!-- WorkExperience ------------------------------------------- -->
            <h2 v-show="getWorkExperience.length > 0">{{ $t('pages.aboutMe.workExperience.headline') }}</h2>
            <about-card
              v-for="entry in getWorkExperience"
              :key="entry.position"
              :position="entry.position"
              :company="entry.company"
              :date="entry.date"
              :place="entry.place"
              :img="entry.img"
              :text="entry.text"
            />
            <div class="spacing"></div>

            <!-- Education ------------------------------------------------ -->
            <h2 v-show="getEducation.length > 0">{{ $t('pages.aboutMe.education.headline') }}</h2>
            <about-card
              v-for="entry in getEducation"
              :key="entry.position"
              :position="entry.position"
              :company="entry.company"
              :date="entry.date"
              :place="entry.place"
              :img="entry.img"
              :text="entry.text"
            />
            <div class="spacing"></div>

            <!-- quote ------------------------------------------------ -->
            <!-- <div class="quoteWrapper">
              <div class="quote">
                You have to try the impossible to achieve the possible
                <div class="author">
                  Hermann Hesse
                </div>
              </div>
            </div> -->

          </div>
        </window>
</template>

<script>
import Window from '@/components/Window.vue';
import AboutCard from '@/components/AboutCard.vue';
import data from '@/static/data';
import Style from '@/mixins/style';

export default {
  name: 'aboutPage',
  components: { Window, AboutCard },
  mixins: [Style],
  data() {
    return {
      education: data.aboutMe?.education,
      workExperience: data.aboutMe?.workExperience,
    };
  },
  computed: {
    getEducation() {
      return this.education[this.$data.language] || [];
    },
    getWorkExperience() {
      return this.workExperience[this.$data.language] || [];
    },
  },
};
</script>

<style lang="scss">

.aboutWrapper {
  padding: 20px 60px;
}

.aboutHeader {
  display: flex;
  flex-flow: row;
  padding-bottom: 20px;
  // border-bottom: 1px solid var(--color-window-separator);

  &-profil {
    width: 208px;
    height: 208px;
    border-radius: 0 30%;
    margin-left: auto;
    margin-top: 15px;
  }

  .side {
    margin-top: 20px;
    margin-right: 58px;
    margin-left: 30px;
    font-size: 18px;
    font-weight: lighter;

    img {
      filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.472));
    }
  }

  &-name {
    font-size: 30px;
    margin-top: 3px;
    margin-bottom: 20px;

    .surname {
      color: var(--color-accent);
      font-weight: lighter;
    }
  }

  .red {
    color: var(--color-danger);
  }

  .work {
    margin: auto;
    margin-top: 36px;
    position: relative;
    display: flex;
    flex-flow: row;
    text-decoration: none;
    justify-content: center;
    height: 30px;
    width: 175px;
    color: var(--color-text);
    border: 1px solid var(--color-success);
    border-radius: 0 50px 50px 0;
    transition: all 0.4s;

    &:hover {
      color: #ffffff;
      background-color: var(--color-success);
    }

    &:hover img {
      transform: rotate(10deg);
      left: -24px;
      top: -14px;
      width: 48px;
    }

    img {
      position: absolute;
      left: -22px;
      top: -12px;
      width: 44px;
      margin-right: 20px;
      transform: rotate(20deg);
      transition: 0.3s ease-in;
    }

    .text {
      margin: auto 0;
    }
  }
}

@media (max-width: 540px) {
  .aboutHeader {
    flex-flow: column-reverse;

    &-profil {
      margin: auto;
    }

    .side {
      margin-right: 0;
      text-align: center;
    }
  }

  .aboutWrapper {
    padding: 0 25px;
  }
}

.quoteWrapper{
  margin: 25px 0;
  position: relative;

  .quote{
    position: relative;
    width: fit-content;
    margin: auto;
    text-align: center;

      .author {
        position: absolute;
        right: 0;
        color: var(--color-text-muted);

        &::before {
          content: '-';
          color: var(--color-window-separator);
        }
      }

      &::before {
        content: '»';
        color: var(--color-window-separator);
      }

      &::after {
        content: '«';
        color: var(--color-window-separator);
      }
  }
}

.spacing {
    width: 100%;
    height: 25px;
}

</style>
