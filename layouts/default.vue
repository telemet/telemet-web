<template>
  <!-- :dir="$dir()" -->
  <div
    class="min-h-screen bg-red-500 flex flex-col justify-between items-center"
  >
    <!-- <app-header /> -->
    <div class="flex-1"></div>
    <div class="flex-1 text-center">
      <span class="text-8xl font-black text-white">שעת חירום</span>
      <!-- <nuxt class="px-6 md:px-0" /> -->
    </div>
    <div class="flex-2 mb-8 px-8 text-lg text-center font-bold">
      עקב ״משבר הקורונה״ אנו נערכים גם ״לנורמלי החדש״ ונכנסים לתקנות שעת חירום,
      משלנו. <br />פרטים בקרוב
      <a
        href="https://t.me/telemetISR"
        title="קבוצת טלאמת בטלגרם"
        class="text-white hover:text-black"
        target="_blank"
        >בטלגרם</a
      >
      <a
        href="https://www.facebook.com/groups/telemetISR/"
        title="קבוצת טלאמת בפייסבוק"
        class="text-white hover:text-black"
        target="_blank"
        >ובפייסבוק</a
      ><br />
      <AppLogotype class="m-0 p-0 absolute left-0 top-0" />
    </div>
  </div>
</template>

<script>
import AppLogotype from '@/components/AppLogotype'
// import AppHeader from '@/components/AppHeader'
export default {
  components: {
    AppLogotype
    // AppHeader
  },
  // computed: {
  //   currentLanguage() {
  //     return this.$store.state.i18n.locale
  //   }
  // },
  head() {
    return {
      // htmlAttrs: {
      //   class: this.currentLanguage,
      //   lang: this.currentLanguage,
      //   dir: this.$dir()
      // }
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
