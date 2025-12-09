const runtimeConfig = {
  public: {  // Public Keys
    // nuxt-seo-kit config
    siteUrl: "",
    siteName: "HandyVoidium",
    siteDescription: "Jack-of-all-trades tools in a single platform",
    language: "en",
    //
    titleSeparator: "•",
    //
    repository: "https://github.com/HandyVoid/HandyVoidium.git",
    profiles: {
      GitHub: {
        icon: "line-md:github-twotone",
        link: "https://github.com/HandyVoid"
      }
    },
    contact: {
      email: {
        value: "contact@handyvoid.com",
        get link() {
          return `mailto:${this.value}`
        },
        icon: "line-md:email-twotone-alt"
      }
    },
  }
}


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  compatibilityDate: "2025-12-09",

  modules: [
    "@nuxtjs/i18n",
    "@vite-pwa/nuxt",
    "@nuxt/icon",
    "@nuxtjs/seo",
    "@nuxt/content",
    "nuxt-og-image"
  ],

  runtimeConfig,

  i18n: {
    skipSettingLocaleOnNavigate: true,  // For page transitions
    langDir: "lang",
    defaultLocale: "en",
    baseUrl: runtimeConfig.public.siteUrl,
    locales: [
      { code: "en", iso: "en", name: "English", file: "en.yaml", dir: "ltr" },
      { code: "es", iso: "es", name: "Español", file: "es.yaml", dir: "ltr" }
    ]
  },

  ogImage: {
    fonts: [
      "Comfortaa:400"
    ]
  },

  pwa: {
    manifest: {
      name: runtimeConfig.public.siteName,
      short_name: runtimeConfig.public.siteName,
      description: runtimeConfig.public.siteDescription,
      theme_color: "#152a29",
      background_color: "#152a29",
      display: "standalone",
      id: "/",
      start_url: "/",
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
    devOptions: {
      // enabled: true,
      type: "module"
    }
  }

})