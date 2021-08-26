<template>
        <window :name="$t('portal.name.settings')" :width="400" :height="280">
            <div class="contentWrapper">
            <div class="desgin-container">
                <h3 class="header">{{ $t('pages.settings.design') }}: <labels text="BETA" class="label" /></h3>
                <form>
                    <label class="container">
                        <div class="container-name">
                            {{ $t('pages.settings.design.dark') }}
                        </div>
                        <input
                            type="radio"
                            :checked="$data.theme === 'dark'"
                            name="radio"
                            value="dark"
                            v-on:change="themeSwitch"
                        >
                        <span class="checkmark checkmark-dark"></span>
                    </label>
                    <label class="container">
                        <div class="container-name">
                            {{ $t('pages.settings.design.light') }}
                        </div>
                        <input
                            type="radio"
                            :checked="$data.theme === 'light'"
                            name="radio"
                            value="light"
                            v-on:change="themeSwitch"
                        >
                        <span class="checkmark checkmark-light"></span>
                    </label>
                </form>
            </div>
            <div class="language-container">
                <h3 class="header">{{ $t("pages.settings.language") }}:</h3>
                <form>
                    <label class="container">
                        <div class="container-name">
                            {{ $t("pages.settings.language.german") }}
                        </div>
                        <input
                            type="radio"
                            :checked="$data.language == 'de'"
                            name="radio"
                            value="de"
                            v-on:change="languageSwitch"
                        >
                        <span class="checkmark checkmark-de"></span>
                    </label>
                    <label class="container">
                        <div class="container-name">
                            {{ $t("pages.settings.language.english") }}
                        </div>
                        <input
                            type="radio"
                            :checked="$data.language == 'en'"
                            name="radio"
                            value="en"
                            v-on:change="languageSwitch"
                        >
                        <span class="checkmark checkmark-en"></span>
                    </label>
                </form>
            </div>
            <div class="devMode-container" v-if="$data.devMode != 'hidden'">
                <h3 class="header">{{ $t("pages.settings.devMode") }}:</h3>
                <form>
                    <label class="container">
                        <div class="container-name">
                            On
                        </div>
                        <input
                            type="radio"
                            :checked="$data.devMode == 'on'"
                            name="radio"
                            value='on'
                            v-on:change="devModeSwitch"
                        >
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">
                        <div class="container-name">
                            Off
                        </div>
                        <input
                            type="radio"
                            :checked="$data.devMode == 'off'"
                            name="radio"
                            value='off'
                            v-on:change="devModeSwitch"
                        >
                        <span class="checkmark"></span>
                    </label>
                </form>
            </div>
            <!-- <div class="downloadApp">
                <button @click="pwa" v-if="deferredPrompt != null">Download App</button>
            </div> -->
            </div>
        </window>
</template>

<script>
import Window from '@/components/Window.vue';
import Labels from '@/components/Labels.vue';
import Style from '@/mixins/style';

export default {
  components: { Window, Labels },
  mixins: [Style],
  data() {
    return {
      deferredPrompt: true,
    };
  },
  beforeMount() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
    });
  },
  methods: {
    languageSwitch(elem) {
      this.$_setLanguage(elem?.target?.value);
    },
    themeSwitch(elem) {
      this.$_setTheme(elem?.target?.value);
    },
    devModeSwitch(elem) {
      this.$_setDevMode(elem?.target?.value);
    },
    // pwa() {
    //   this.deferredPrompt.prompt();
    // },
  },
};
</script>

<style lang="scss" scoped>
.contentWrapper {
    padding: 0 10px;
}
.label {
    top: -2px;
    right: 8px;
}
.language-container {
    margin-top: 20px;
}
.devMode-container {
    margin-top: 20px;
}
.header{
    margin: 0 0 20px 0;
}
form {
    display: flex;
    flex-flow: wrap;
    padding-left: 20px;
}
.container {
    display: flex;
    position: relative;
    padding-left: 50px;
    margin-bottom: 30px;
    cursor: pointer;
    font-size: 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    &-name {
        margin-top: 7px;
        margin-right: 40px;
        width: 60px;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        box-shadow: 6px 6px 10px hsla(300,15%,25%,0.3) inset;

        &-de {
            background-image: url(~@/assets/icons/icon_de.svg);
        }

        &-en {
            background-image: url(~@/assets/icons/icon_en.svg);
            background-size: 35px;
        }

        &-dark {
            background-color: rgb(33, 33, 34);
            box-shadow: 4px 4px 8px rgba(163, 163, 163, 0.294) inset;
        }

        &-light {
            background-color: rgb(221, 221, 221);
        }

        &:after {
            content: "";
            position: absolute;
            border: 2px solid var(--color-accent);
            display: none;
            top: -4px;
            right: -4px;
            width: 43px;
            height: 43px;
            border-radius: 50%;
        }
    }
}

.container input:checked ~ .checkmark:after {
    display: block;
}

.downloadApp {
    position: absolute;
    padding: 2px 5px;
    text-align: center;
    width: fit-content;
    left: 50%;
    transform: translateX(-60%);
    transition: all 0.3s;

    &:hover {
        color: var(--color-accent);
    }
}
</style>
