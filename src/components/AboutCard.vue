<template>
    <div class="aboutCard">
        <div class="sidebar">
            <div class="sidebar-dot"></div>
            <div class="sidebar-bar"></div>
        </div>
        <div class="mainWrapper">
            <div class="headerWrapper">
                <div class="header-logo">
                  <img :src=img >
                </div>
                <div class="header">
                  <span class="company">{{ company }} </span><br>
                  <span class="position">{{ position }}  </span><br>
                  <span class="details">{{ date }} </span><br>
                  <span class="details">{{ place }} </span>
                </div>
            </div>
            <div class="main" v-html="text">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AboutCard',
  props: {
    position: {
      type: String,
      require: true,
    },
    company: {
      type: String,
      require: true,
    },
    place: {
      type: String,
      require: false,
    },
    text: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: false,
    },
    date: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss">
$sidebar-width : 2px;

.aboutCard {

    display: flex;
    flex-flow: row;
    margin-top: 10px;
    margin-bottom: 19px;
    margin-right: 20px;

    text-align: justify;
    text-align-last: none;

    .sidebar {
        position: relative;
        margin-right: 15px;
        margin-top: 12px;

        &-dot {
            position: relative;
            width: 8px;
            height: 8px;
            top: 12px;
            border-radius: 50%;
            background-color: var(--color-accent);

            &::after {
                position: absolute;
                content: '';
                display: block;
                width: 18px;
                height: 18px;
                top: -5px;
                left: -5px;
                border-radius: 50%;
                border: 2px dashed var(--color-window-separator);
            }
        }

        &-bar {
            position: relative;
            width: $sidebar-width;
            height: 100%;
            left: 3.2px;
            bottom: -15px; // -4px;
            background-color: var(--color-window-separator);
        }

        &::before {
            position: absolute;
            content: '';
            display: block;
            width: $sidebar-width;
            height: 16px; // 12px;
            top: -8px; // -17px;
            left: 3.2px;
            background-color: var(--color-window-separator);
        }

    }

    .mainWrapper {
        position: relative;
        // background-color: royalblue;
        top: 8px;
        margin-left: 8px;
        line-height: 19px;

        .headerWrapper{
          position: relative;
          display: flex;
          flex-flow: row;
          margin-bottom: 15px;

          .header-logo {
            margin-right: 25px;
            width: 50px;

            img {
              margin-top: 5px;
              max-width: 50px;
              max-height: 50px;
            }
          }

          .header {

            .company {
              font-weight: bold;
              font-size: 17px;
            }

            .details {
              color: var(--color-text-muted);
              font-size: 15px;
            }
          }
        }
    }
}

</style>
