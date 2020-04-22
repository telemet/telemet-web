<template>
  <nuxt-link
    v-if="$store.state.i18n.locale === 'he'"
    :to="switchLocalePath('en')"
    >{{ $t('lang') }}</nuxt-link
  >
  <nuxt-link v-else :to="switchLocalePath('he')">{{ $t('lang') }}</nuxt-link>
</template>

<i18n lang="yaml">
en:
  lang: "עברית"
he:
  lang: "English"
</i18n>
