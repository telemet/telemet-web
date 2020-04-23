<template lang="html">
  <!-- Content -->
  <div class="min-h-screen mx-auto">
    <!-- Hero -->
    <div class="mt-4 w-full h-72 bg-black flex justify-center items-center">
      <div class="font-bold text-6xl text-white -mt-4">דגל שחור</div>
    </div>
    <!-- Grid 3/1 -->
    <div class="px-2 mt-4">
      <div class="flex flex-wrap -mx-4">
        <div class="w-1/3 px-2 my-2">
          <div class="bg-gray-100 h-48"></div>
        </div>
        <div class="w-1/3 px-2 my-2">
          <div class="bg-gray-100 h-48"></div>
        </div>
        <div class="w-1/3 px-2 my-2">
          <div class="bg-gray-100 h-48"></div>
        </div>
        <div class="w-1/3 px-2 my-2">
          <div class="bg-gray-100 h-48"></div>
        </div>
      </div>
    </div>
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
.grid-item {
  @apply bg-gray-400 h-12 px-2 w-1/3;
  /* width: 33.333%; */
}
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
