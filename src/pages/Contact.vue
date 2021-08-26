<template>
        <window :name="$t('portal.name.contactMe')" :width="300" :height="450">
            <div :class="['contactWrapper', scan ? 'scan' : '']">
                <div class="profil">
                    <div class="status"></div>
                    <img :src="require('../assets/profil.jpg')" >
                </div>
                <div class="profil-name">
                    Christian <br>
                    <span class="name">Sommer</span>
                </div>
                <div class="qr"></div>
                <button class="email back" @click="scan = false">
                    <img :src="require('../assets/icons/icon_arrow.svg')" >
                </button>
                <div class="foo">
                    <div class="socialMedia">
                        <a
                            v-for="sm in socialMedia"
                            :key="sm.icon"
                            :href="sm.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            :class="['icon', `icon-${sm.icon}`]"
                        ></a>
                        <button
                            href="#"
                            class="icon icon-scan"
                            @click="scan = true"
                        ></button>
                    </div>
                    <a class="email" href="mailto:mail@sommerchristian.de">
                        <img :src="require('../assets/icons/icon_mail.svg')" >
                    </a>
                    <span class="email-address" @click="copyEmail">
                        {{ $t('pages.contact.copyEmailAddress') }}
                    </span>
                </div>
            </div>
        </window>
</template>

<script>
import Window from '../components/Window.vue';

export default {
  name: 'contactPage',
  components: { Window },
  data() {
    return {
      socialMedia: [
        {
          icon: 'github',
          link: 'https://github.com/BlackGhostHD',
        },
        {
          icon: 'linkedin',
          link: 'https://www.linkedin.com/in/christian-sommer-596585177/',
        },
        {
          icon: 'instagram',
          link: 'https://www.instagram.com/sommer.pics/',
        },
      ],
      scan: false,
    };
  },
  methods: {
    copyEmail() {
      const tempInput = document.createElement('input');
      tempInput.value = 'mail@sommerchristian.de';
      document.body.appendChild(tempInput);
      tempInput.select();
      const successful = document.execCommand('copy');
      if (successful) {
        this.$eventBus.$emit('clippyMsg', this.$t('pages.contact.emailAddressCopyed'));
      }
      document.body.removeChild(tempInput);
    },
  },
};
</script>

<style lang="scss" scoped>
.contactWrapper {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
}

.profil {
    position: relative;
    height: 100px;
    width: 100px;
    margin: 20px 0 40px 0;
    transition: 0.4s;

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */

    .status{
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 6px solid var(--color-window-background);
        background-color: var(--color-success);
    }

    img{
        width: inherit;
        height: inherit;
        border-radius: 50%;
        border: 1px solid transparent;
    }
}

.profil-name {
    width: 100%;
    font-size: 26px;
    text-align: center;
    line-height: 18px;

    .name{
        font-size: 20px;
    }
}

.socialMedia {
    display: flex;
    align-self: center;
    margin: 15px 0;

    .icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 10px;
        background-size: cover;
        filter: opacity(0.7);
        transition: all 0.4s;

        &:hover {
            filter: opacity(1);
        }

        &-github {
         background-image: url('../assets/icons/icon_github.svg');
        }

        &-linkedin {
         background-image: url('../assets/icons/icon_linkedin.svg');
        }

        &-instagram {
         background-image: url('../assets/icons/icon_instagram.svg');
        }

        &-discord {
         background-image: url('../assets/icons/icon_discord.svg');
        }

        &-scan {
         background-image: url('../assets/icons/icon_qr.svg');
        }
    }
}

.email {
    height: 35px;
    width: 80%;
    border-radius: 20px;
    background-color: var(--color-success);
    display: flex;
    margin: 0 auto;
    justify-content: center;
    transition: 0.4s;

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */

    &:hover {
       background-color: var(--color-success-dark);
    }

    img{
        display: flex;
        justify-content: center;
        padding: 3px;
        width: 45px;
    }
}

.email-address {
    position: relative;
    width: fit-content;
    margin: auto;
    margin-top: 3px;
    margin-bottom: -28px;
    font-size: 13px;
    color: var(--color-text-muted);
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        color: var(--color-accent);
    }
}

.foo {
    position: absolute;
    bottom: 50px;
    display: flex;
    justify-content: center;
    flex-flow: column;
    width: 100%;
}

.qr {
    position: absolute;
    top: 50%;
    transform: translateY(-33%);
    width: 180px;
    height: 180px;
    background-image: url('../assets/icons/icon_qrCode.svg');
    background-size: cover;
    opacity: 0;
    transition: 0.4s;

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
}

.back {
    visibility: hidden;
    position: absolute;
    bottom: 39px;
    width: 35px;

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 30px;
        filter: invert(1);
    }
}

[data-theme="light"] {
    .icon {
        filter: invert(1) opacity(0.4);

        &:hover {
            filter: invert(1) opacity(1);
        }
    }

    .qr {
        filter: invert(1);
    }
}

.scan {
    display: flex;
    flex-flow: row;

    .profil {
        width: 70px;
        height: 70px;
        margin: 20px 15px;

        .status {
            width: 20px;
            height: 20px;
            border: 5px solid var(--color-window-background);
        }
    }

    .profil-name {
        width: 120px;
        padding-top: 4px;
        margin: auto;
        font-size: 22px;
        text-align: left;

        .name {
            font-size: 18px;
        }
    }

    .foo {
        display: none;
    }

    .back {
        visibility: visible;
    }

    .qr {
        opacity: 1;
    }
}
</style>
