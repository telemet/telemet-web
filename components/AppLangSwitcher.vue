<template>
  <nuxt-link
    v-if="$store.state.i18n.locale === 'he'"
    :to="switchLocalePath('en')"
    class="py-1 px-2 text-xs font-bold hover:bg-gray-100 rounded-sm"
  >
    <span class="block pt-1">
      {{ $t('lang') }}
    </span>
  </nuxt-link>
  <nuxt-link
    v-else
    :to="switchLocalePath('he')"
    class="py-1 px-2 text-xs font-bold hover:bg-gray-100 rounded-sm"
  >
    <span class="block pt-1">
      {{ $t('lang') }}
    </span>
  </nuxt-link>
</template>

<i18n lang="yaml">
en:
  lang: "עברית"
he:
  lang: "English"
</i18n>
