<script lang="ts" setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true
})

useHead({
  htmlAttrs: head.value.htmlAttrs,
  titleTemplate: titleChunk => `HandyVoid${titleChunk ? ` • ${titleChunk}` : ""}`,
  meta: [
    { name: "application-name", content: "HandyVoid" },
    { name: "theme-color", content: "#0d0837" },
    { name: "apple-mobile-web-app-title", content: "HandyVoid" },
    { name: "msapplication-TileColor", content: "#0d0837" }
  ],
  link: [
    { rel: "mask-icon", href: "/mask-icon.svg", color: "#5bbad5" },
    { rel: "icon", href: "/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.svg" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.svg" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }
  ]
})
</script>



<template>
  <AppHeader />
  <slot />
  <AppFooter />
</template>



<style lang="stylus">
html
  height 100%

body
  height 100%
  margin 0

#__nuxt
  display flex
  flex-direction column
  min-height 100%
</style>