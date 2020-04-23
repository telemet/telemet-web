export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: 'טלאֱמֶת | %s',
    title: 'טלאֱמֶת',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description
      },
      // Open Graph / Facebook
      {property: 'og:type', content: 'website'},
      {hid: 'og:url', property: 'og:url', content: 'https://telemet.org'},
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'טלאֱמֶת'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: process.env.npm_package_description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://telemet.org/images/telemet-meta-poster.jpg'
      },
      // Twitter
      {
        his: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: 'https://telemet.org'
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'טלאֱמֶת'
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: process.env.npm_package_description
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://telemet.org/images/telemet-meta-poster.jpg'
      }
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{src: '~plugins/i18n.js'}],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/analytics-module
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-139918597-1'
        //  For testing analytics in dev mode
        // debug: {
        //   enabled: true,
        //   sendHitTask: true
        // }
      }
    ]
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css'
    // purgeCSSInDev: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', 'nuxt-i18n', 'nuxt-webfontloader'],
  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        dir: 'ltr'
      },
      {
        name: 'עברית',
        code: 'he',
        iso: 'he-IL',
        file: 'he-IL.js',
        dir: 'rtl'
      }
    ],
    langDir: 'lang/',
    lazy: true,
    defaultLocale: 'he',
    vueI18nLoader: true,
    vueI18n: {fallbackLocale: 'he'},
    vuex: {
      moduleName: 'i18n',
      syncLocale: true
      // syncMessages: true
    }
  },
  webfontloader: {
    google: {
      families: ['Assistant:400,700'] // Loads Lato font with weights 400 and 700
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
