// Source: https://medium.com/@lior_36166/multilingual-bidirectional-rtl-websites-with-tailwind-and-nuxt-bca6ccd2494d

export default function({app}, inject) {
  const dir = () =>
    app.i18n.locales.find((x) => x.code === app.i18n.locale)?.dir
  inject('dir', dir)
}
