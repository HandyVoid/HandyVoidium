<script lang="ts" setup>
const config = useRuntimeConfig()

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true
})


useHead({
  htmlAttrs: head.value.htmlAttrs,
  link: [
    { rel: "mask-icon", href: "/mask-icon.svg", color: "#5bbad5" },
    { rel: "icon", href: "/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }
  ]
})


function titleTemplate(titleChunk?: string) {
  return `${titleChunk ? `${titleChunk} • ` : ""}${config.public.appName}`
}


useSeoMeta({
  titleTemplate,
  applicationName: config.public.appName,
  themeColor: "#0d0837",
  //
  appleMobileWebAppTitle: config.public.appName,
  msapplicationTileColor: "#0d0837"
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

body
  height 100%
  margin 0

#__nuxt
  display flex
  flex-direction column
  min-height 100%
  font-family Comfortaa, Verdana, sans-serif
  background rgb(10, 20, 30) linear-gradient(135deg, rgb(40, 60, 70), rgb(10, 20, 30))
  color aliceblue
</style>