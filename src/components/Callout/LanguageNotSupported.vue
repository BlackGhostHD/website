<template>
          <callout :text="$t('component.callout.languageNotSupported')" v-if="!languageSupported" />
</template>

<script>
import Callout from '@/components/Callout/Callout.vue';

export default {
  name: 'calloutLanguageNotSupported',
  components: { Callout },
  data() {
    return {
      languageSupported: true,
    };
  },
  props: {
    supportedLanguages: {
      type: Array,
      default: (() => []),
    },
  },
  mounted() {
    this.languageSupported = this.supportedLanguages.includes(this.$i18n.locale);
  },
};
</script>

<style lang="scss">

</style>
