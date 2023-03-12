import { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables"


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
  modules: [
    "@nuxtjs/i18n",
    "@vite-pwa/nuxt",
    "nuxt-icon",
    "@nuxt/content"
  ],

  extends: [
    "nuxt-seo-kit"
  ],

  app: {
    head: {
      titleTemplate: "%s %titleSeparator %siteName"
    }
  },

  runtimeConfig,

  content: {
    defaultLocale: runtimeConfig.public.language
  },

  i18n: {
    skipSettingLocaleOnNavigate: true,  // For page transitions
    lazy: true,  // lazy loading
    langDir: "lang",
    defaultLocale: runtimeConfig.public.language,
    baseUrl: runtimeConfig.public.siteUrl,
    vueI18n: {
      fallbackLocale: runtimeConfig.public.language
    },
    locales: [
      { code: "en", iso: "en", name: "English", file: "en.yaml", dir: "ltr" },
      { code: "es", iso: "es", name: "Español", file: "es.yaml", dir: "ltr" }
    ]
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