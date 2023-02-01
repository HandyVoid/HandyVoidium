// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n"
  ],

  i18n: {
    skipSettingLocaleOnNavigate: true,  // skip locale on navigation to fix transitions (https://v8.i18n.nuxtjs.org/guide/lang-switcher#wait-for-page-transition)
    lazy: true,  // lazy loading
    langDir: "lang",
    defaultLocale: "en",
    locales: [
      { code: "en", iso: "en", name: "English", file: "en.yaml", dir: "ltr" },
      { code: "es", iso: "es", name: "Español", file: "es.yaml", dir: "ltr" }
    ],
  }
})
