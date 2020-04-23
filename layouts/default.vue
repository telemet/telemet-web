<template>
  <!-- :dir="$dir()" -->
  <div
    class="max-w-screen-xl px-0 md:px-8 lg:px-10 mx-auto min-h-screen bg-white"
  >
    <app-header />
    <section class="mx-auto">
      <nuxt class="px-6 md:px-0" />
    </section>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
export default {
  components: {
    AppHeader
  },
  computed: {
    currentLanguage() {
      return this.$store.state.i18n.locale
    }
  },
  head() {
    return {
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
</style>
