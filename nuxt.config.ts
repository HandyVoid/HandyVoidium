const runtimeConfig = {
  public: {  // Public Keys
    // nuxt-seo-kit config
    siteUrl: "",
    siteName: "HandyVoidium",
    siteDescription: "Jack-of-all-trades tools in a single platform",
    language: "en",
    //
    repository: "https://github.com/HandyVoid/HandyVoidium.git",
    profiles: {
      GitHub: {
        icon: "line-md:github-twotone",
        link: "https://github.com/HandyVoid"
      }
    },
    contact: {
      email: "contact@handyvoid.com"
    },
  }
}


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "@vite-pwa/nuxt",
    "nuxt-icon"
  ],

  extends: [
    "nuxt-seo-kit"
  ],

  runtimeConfig,

  i18n: {
    skipSettingLocaleOnNavigate: true,  // For page transitions
    lazy: true,  // lazy loading
    langDir: "lang",
    defaultLocale: runtimeConfig.public.language,
    baseUrl: runtimeConfig.public.siteUrl,
    locales: [
      { code: "en", iso: "en", name: "English", file: "en.yaml", dir: "ltr" },
      { code: "es", iso: "es", name: "Español", file: "es.yaml", dir: "ltr" }
    ],
  },

  linkChecker: {
    failOn404: true
  },

  pwa: {
    manifest: {
      name: runtimeConfig.public.siteName,
      short_name: runtimeConfig.public.siteName,
      description: runtimeConfig.public.siteDescription,
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