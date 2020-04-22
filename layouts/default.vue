<template>
  <div :dir="$dir()" class="min-h-screen bg-white antialiased">
    <app-header />
    <nuxt />
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader'
export default {
  components: {
    AppHeader
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
