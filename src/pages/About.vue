<template>
        <window :name="$t('portal.name.aboutMe')" :width="750">
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

          </div>
        </window>
</template>

<script>
import Window from '../components/Window.vue';

export default {
  components: { Window },
};
</script>

<style lang="scss">
.aboutWrapper {
  padding: 0 50px;
}

.aboutHeader {
  display: flex;
  flex-flow: row;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-window-separator);

  &-profil {
    width: 200px;
    height: 208px;
    border-radius: 0 30%;
  }

  .side {
    margin-top: 20px;
    margin-right: 58px;
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
</style>
