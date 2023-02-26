const runtimeConfig = {
  public: {  // Public Keys
    appName: "HandyVoidium",
    repository: "https://github.com/HandyVoid/HandyVoidium.git",
    contactMail: "contact@handyvoid.com",
    baseUrl: ""
  }
}


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "@vite-pwa/nuxt",
    "nuxt-icon"
  ],

  runtimeConfig,

  i18n: {
    skipSettingLocaleOnNavigate: true,  // For page transitions
    lazy: true,  // lazy loading
    langDir: "lang",
    defaultLocale: "en",
    baseUrl: runtimeConfig.public.baseUrl,
    locales: [
      { code: "en", iso: "en", name: "English", file: "en.yaml", dir: "ltr" },
      { code: "es", iso: "es", name: "Español", file: "es.yaml", dir: "ltr" }
    ],
  },

  pwa: {
    manifest: {
      name: runtimeConfig.public.appName,
      short_name: runtimeConfig.public.appName,
      description: "Jack-of-all-trades tools in a single website",
      theme_color: "#0d0837",
      background_color: "#0d0837",
      display: "standalone",
      icons: [
        {
          src: "/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "/mask-icon.svg",
          sizes: "any",
          type: "image/svg+xml",
          purpose: "any maskable"
        }
      ]
    },
    workbox: {
      navigateFallback: "/"
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20,
    },
    registerType: "autoUpdate",
    devOptions: {
      // enabled: true,
      type: "module"
    }
  }
})