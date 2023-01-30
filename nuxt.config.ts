// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n"
  ],

  i18n: {
    lazy: true,
    langDir: "lang",
    defaultLocale: "en",
    locales: [
      { code: "en", iso: "en", name: "English", file: "en.yaml", dir: "ltr" },
      { code: "es", iso: "es", name: "Español", file: "es.yaml", dir: "ltr" }
    ],
  }
})
