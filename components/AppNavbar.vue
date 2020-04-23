<template>
  <nav
    class="h-10 w-full border-t border-b border-grey-100 hidden md:flex justify-around items-center"
  >
    <nuxt-link :to="localePath('/')" class="w-5 h-5">
      <icon class=" w-5 h-5">
        <icon-logomark />
      </icon>
    </nuxt-link>
    <ul class="w-full text-md list-none flex justify-evenly items-center mx-12">
      <li class="mav-item">{{ $t('natural-law') }}</li>
      <li class="mav-item">{{ $t('5g') }}</li>
      <li class="mav-item">{{ $t('video') }}</li>
      <li class="mav-item">{{ $t('meme') }}</li>
      <li class="mav-item">{{ $t('news') }}</li>
      <li class="mav-item">{{ $t('quotes') }}</li>
      <li class="mav-item">{{ $t('archive') }}</li>
      <li class="mav-item">{{ $t('more') }}</li>
    </ul>
    <app-lang-switcher class="pt-0" />
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
import AppLangSwitcher from '@/components/AppLangSwitcher'
import Icon from '~/components/icons/Icon'
import IconLogomark from '~/components/icons/IconLogomark'

export default {
  components: {
    AppLangSwitcher,
    Icon,
    IconLogomark
    // AppNavbar
  }
}
</script>

<style lang="postcss" scoped>
nav {
  border-bottom-color: black;
}
</style>
