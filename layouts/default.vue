<script lang="ts" setup>
const config = useRuntimeConfig()

const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true
})


useHead({
  htmlAttrs: head.value.htmlAttrs,
  link: [
    { rel: "mask-icon", href: "/mask-icon.svg", color: "#2f4745" },
    { rel: "icon", href: "/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }
  ]
})


useSeoMeta({
  colorScheme: "dark light",
  applicationName: config.public.siteName,
  themeColor: "#152a29",
  //
  appleMobileWebAppTitle: config.public.siteName,
  msapplicationTileColor: "#152a29"
})
</script>



<template>
  <AppHeader />
  <slot />
  <AppFooter />
</template>



<style lang="stylus">
@font-face
  font-family Comfortaa
  font-style normal
  font-display swap
  src url("~/assets/Comfortaa-VariableFont_wght.ttf") format("opentype")

html
  height 100%
  scroll-behavior smooth

body
  height 100%
  margin 0

#__nuxt
  display flex
  flex-direction column
  min-height 100%
  font-family Comfortaa, Verdana, sans-serif
  background rgb(30, 40, 50) linear-gradient(135deg, rgb(40, 60, 70), rgb(20, 30, 40))
  color aliceblue
</style>