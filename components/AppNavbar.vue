<template>
  <nav class="w-full border-t border-b py-1">
    <ul class="list-none flex justify-evenly items-center">
      <li class="mav-item">{{ $t('item') }}</li>
      <li class="mav-item">{{ $t('item') }}</li>
      <li class="mav-item">{{ $t('item') }}</li>
      <li class="mav-item">{{ $t('item') }}</li>
      <li class="mav-item">
        <nuxt-link
          v-if="$store.state.i18n.locale === 'he'"
          :to="switchLocalePath('en')"
          >{{ $t('lang') }}</nuxt-link
        >
        <nuxt-link v-else :to="switchLocalePath('he')">{{
          $t('lang')
        }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<i18n lang="yaml">
en:
  lang: "עברית"
  item: "Item"
he:
  lang: "English"
  item: "פריט"
</i18n>

<script>
// import AppLogotype from '@/components/AppLogotype'
// import AppNavbar from '@/components/AppNavbar'

export default {
  components: {
    // AppLogotype,
    // AppNavbar
  }
}
</script>
