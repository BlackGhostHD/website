<template>
        <window :name="$t('portal.name.settings')" :width="400" :height="280">
            <div class="contentWrapper">
            <div class="desgin-container">
                <h3 class="header">{{ $t('pages.settings.design') }}:</h3>
                <form>
                    <label class="container">
                        <div class="container-name">
                            {{ $t('pages.settings.design.dark') }}
                        </div>
                        <input type="radio" checked="checked" name="radio">
                        <span class="checkmark checkmark-dark"></span>
                    </label>
                    <label class="container">
                        <div class="container-name">
                            {{ $t('pages.settings.design.light') }}
                        </div>
                        <input type="radio" name="radio">
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
                        <input type="radio" :checked="$i18n.locale == 'de'" name="radio" value="de"
                        v-on:change="languageSwitch">
                        <span class="checkmark checkmark-de"></span>
                    </label>
                    <label class="container">
                        <div class="container-name">
                            {{ $t("pages.settings.language.english") }}
                        </div>
                        <input type="radio" :checked="$i18n.locale == 'en'" name="radio" value="en"
                        v-on:change="languageSwitch">
                        <span class="checkmark checkmark-en"></span>
                    </label>
                </form>
            </div>
            </div>
        </window>
</template>

<script>
import Window from '../components/Window.vue';

export default {
  components: { Window },
  methods: {
    languageSwitch(elem) {
      this.$i18n.locale = elem?.target?.value || '';
    },
  },
};
</script>

<style lang="scss" scoped>
.contentWrapper {
    padding: 0 10px;
}

.language-container {
    margin-top: 20px;
}
.header{
    margin: 0 0 20px 0;
}
form {
    display: flex;
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

        &-de {
            background-image: url(~@/assets/icons/icon_de.svg);
        }

        &-en {
            background-image: url(~@/assets/icons/icon_en.svg);
            background-size: 35px;
        }

        &-dark {
            background-color: rgb(33, 33, 34);
        }

        &-light {
            background-color: rgb(243, 243, 243);
        }

        &:after {
            content: "";
            position: absolute;
            border: 2px solid #F2AE42;
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

        .container input:checked ~ .container-name {
            color: red;
        }
</style>
