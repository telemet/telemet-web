<template lang="html">
  <!-- Content -->
  <div class="min-h-screen mx-auto">
    <!-- Hero -->
    <div
      class="mt-4 w-full h-96 bg-red-500 flex justify-center items-center overflow-hidden"
    ></div>

    <!-- <div class="bg-brand-400 relativepb-2/3">
      <img
        class="absolute h-full w-full object-cover"
        src="~/assets/images/telemet/telemet-poster.jpg"
      />
    </div> -->
  </div>
</template>

<script>
// import Icon from '~/components/icons/Icon'

export default {
  name: 'Home',
  components: {
    // Icon
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

<style lang="postcss">
/*  {
  padding-bottom: 66.66666%;
} */
/* html {
  font-size: 14px;
}

@screen md {
  html {
    font-size: 16px;
  }
}

@screen lg {
  html {
    font-size: 18px;
  }
} */
</style>
