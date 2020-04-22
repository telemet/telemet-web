<template>
  <!-- :dir="$dir()" -->
  <div class="min-h-screen bg-white">
    <app-header />
    <nuxt />
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader'
export default {
  components: {
    AppHeader
  },
  // data() {
  //   return {
  //     lang: this.$store.state.i18n.locale
  //   }
  // },
  computed: {
    currentLanguage() {
      return this.$store.state.i18n.locale
    }
  },
  head() {
    return {
      // bodyAttrs: {
      //   class: this.modalOpen ? 'm-open' : 'm-close'
      // },
      htmlAttrs: {
        class: this.currentLanguage,
        lang: this.currentLanguage,
        dir: this.$dir()
      }
    }
  }
}
</script>
<style lang="postcss">
/* body {
  font-size: calc(14px + (24 - 14) * ((100vw - 320px) / (1920 - 320)));
  @apply bg-brand-100 antialiased;
} */
/* .t-container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
} */
</style>
