<template>
  <nav
    class="py-01 w-full border-t border-b border-grey-100 flex justify-around"
  >
    <ul class="pt-01 pb-1 w-full text-md list-none flex justify-evenly">
      <li class="mav-item">{{ $t('natural-law') }}</li>
      <li class="mav-item">{{ $t('5g') }}</li>
      <li class="mav-item">{{ $t('video') }}</li>
      <li class="mav-item">{{ $t('meme') }}</li>
      <li class="mav-item">{{ $t('news') }}</li>
      <li class="mav-item">{{ $t('quotes') }}</li>
      <li class="mav-item">{{ $t('archive') }}</li>
      <li class="mav-item">{{ $t('more') }}</li>
    </ul>
    <app-language-switcher class="pt-01" />
  </nav>
</template>

<i18n lang="yaml">
en:
  "5g": "5G"
  natural-law: "Natural Law"
  video: "Video"
  news: "News"
  meme: "Meme"
  quotes: "Quotes"
  archive: "Archive"
  more: "More"
he:
  "5g": "דור-5"
  natural-law: "יסודות האמת"
  video: "וידאו"
  news: "חדשות"
  meme: "מיימז"
  quotes: "ציטוטים"
  archive: "ארכיון"
  more: "עוד"
</i18n>

<script>
import AppLanguageSwitcher from '@/components/AppLanguageSwitcher'
// import AppNavbar from '@/components/AppNavbar'

export default {
  components: {
    AppLanguageSwitcher
    // AppNavbar
  }
}
</script>

<style lang="postcss" scoped>
nav {
  border-bottom-color: black;
}
</style>
