const runtimeConfig = {
  public: {  // Public Keys
    appName: "HandyVoidium" || process.env.NUXT_PUBLIC_APP_NAME,
    repository: "https://github.com/HandyVoid/HandyVoidium.git",
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
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20,
    },
    registerType: "autoUpdate",
    /* devOptions: {
      enabled: true
    }*/
  }
})
