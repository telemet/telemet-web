<!-- <template lang="html">
  <div
    class="main bg-gray-100 min-h-screen flex flex-col md:flex-row justify-center items-center text-center mx-auto"
  ></div>
</template> -->

<template>
  <div class="border w-max max-w-md py-2">
    <div class="flex justify-between py-2">
      <h1 class="text-center text-xl font-bold ml-5">
        {{ $t('tasks') }}
      </h1>
      <div>
        <div class="flex justify-center mr-2">
          <nuxt-link
            :to="switchLocalePath('he')"
            class="border rounded-l-md pl-4 pr-2 bg-gray-100 text-gray-700 text-sm font-bold shadow"
            >HE</nuxt-link
          >
          <nuxt-link
            :to="switchLocalePath('en')"
            class="border rounded-r-md pr-4 pl-2 bg-blue-600 text-gray-200 text-sm font-bold shadow"
            >EN</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <ul class="w-full max-w-sm list-disc list-inside">
        <li class="mt-2">
          <span>
            {{ $t('write_unit_tests') }}
          </span>
          <span
            class="text-sm text-gray-100 bg-green-400 px-2 border rounded-lg float-right"
          >
            {{ $t('completed') }}
          </span>
        </li>
        <li class="mt-2">
          <span>
            {{ $t('buy_almond_milk') }}
          </span>
          <span
            class="text-sm text-gray-100 bg-red-400 px-2 border rounded-lg float-right"
          >
            {{ $t('important') }}
          </span>
        </li>
        <li class="mt-2">
          <span>
            {{ $t('feed_the_cats') }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<i18n lang="yaml">
en:
  tasks: "Tasks"
  write_unit_tests: "write unit tests"
  buy_almond_milk: "buy almond milk"
  feed_the_cats: "feed the cats"
  write_documentation: "write documentation"
  in_progress: "In progress..."
  completed: "Completed!"
  important: "Important!"
he:
  tasks: "מטלות"
  write_unit_tests: "לכתוב בדיקות יחידה"
  buy_almond_milk: "לקנות חלב שקדים"
  feed_the_cats: "להאכיל את החתולים"
  write_documentation: "לכתוב תיעוד"
  in_progress: "בתהליך"
  completed: "בוצע!"
  important: "חשוב!"
</i18n>

<script>
// import Icon from '~/components/icons/Icon'
// import IconCalc from '~/components/icons/brand/IconCalc'
// import IconClock from '~/components/icons/brand/IconClock'
// import IconCompass from '~/components/icons/brand/IconCompass'
// import IconCircle from '~/components/icons/brand/IconCircle'
// import IconLogotype from '~/components/icons/brand/IconLogotype'
// import IconUfe from '~/components/icons/brand/IconUfe'
// import BaseLogomark from '~/components/icons/brand/BaseLogomark'

export default {
  components: {
    // Icon,
    // IconCalc,
    // IconClock,
    // IconCompass,
    // IconCircle,
    // IconLogotype,
    // IconUfe,
    // BaseLogomark
  },
  data() {
    return {
      title: 'ראשי',
      description: 'דף הבית של טלאֱמֶת',
      poster: 'https://telemet.org/images/telemet-meta-poster.jpg'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        // Open Graph / Facebook
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.$nuxt.$route.path
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'טלאֱמֶת | ' + this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.poster
        },
        // Twitter
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: this.$nuxt.$route.path
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'טלאֱמֶת | ' + this.title
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: this.poster
        }
      ]
    }
  }
}
</script>

<style lang="postcss"></style>
