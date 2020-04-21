<template lang="html">
  <div
    class="main bg-gray-100 min-h-screen flex flex-col md:flex-row justify-center items-center text-center mx-auto"
  ></div>
</template>

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
