// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "@vite-pwa/nuxt"
  ],

  i18n: {
    lazy: true,  // lazy loading
    langDir: "lang",
    defaultLocale: "en",
    // baseUrl
    locales: [
      { code: "en", iso: "en", name: "English", file: "en.yaml", dir: "ltr" },
      { code: "es", iso: "es", name: "Español", file: "es.yaml", dir: "ltr" }
    ],
  },

  pwa: {
    manifest: {
      name: "HandyVoid",
      short_name: "HandyVoid",
      description: "Jack-of-all-trades tools in a single website",
      theme_color: "#0d0837",
      background_color: "#0d0837",
      display: "standalone",
      icons: [
        {
          "src": "/android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
      ]
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20,
    },
    registerType: "autoUpdate",
    /* devOptions: {
      enabled: true
    } */
  }
})
