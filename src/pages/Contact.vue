<template>
        <window :name="$t('portal.name.contactMe')" :width="300" :height="450">
            <div class="contactWrapper">
                <div class="profil">
                    <div class="status"></div>
                    <img :src="require('../assets/profil.jpg')" >
                </div>
                <div class="profil-name">
                    Christian <br>
                    <span class="name">Sommer</span>
                </div>
                <div class="foo">
                    <div class="socialMedia">
                        <a
                            href="https://github.com/BlackGhostHD"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="icon icon-github"
                        ></a>
                        <a
                            href="https://www.linkedin.com/in/christian-sommer-596585177/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="icon icon-linkedin"
                        ></a>
                        <a
                            href="https://discordapp.com/users/191154617084542976"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="icon icon-discord"
                        ></a>
                        <a
                            href="https://www.instagram.com/sommer.pics/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="icon icon-instagram"
                        ></a>
                    </div>
                    <a class="email" href="mailto:csommer44@gmail.com">
                        <img :src="require('../assets/icons/icon_mail.svg')" >
                    </a>
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
        width: 100px;
        height: 100px;
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
    margin: 20px 0;

    .icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 10px;
        filter: opacity(0.7);
        transition: 0.4s;

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
    }
}

[data-theme="light"] {
    .icon {
        filter: invert(1) opacity(0.4);

        &:hover {
            filter: invert(1) opacity(1);
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

    &:hover {
       background-color: var(--color-success);
    }

    img{
        display: flex;
        justify-content: center;
        padding: 3px;
        width: 45px;
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
</style>
