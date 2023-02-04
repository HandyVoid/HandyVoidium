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
    { property: "theme-color", content: "#000a14" }
  ],
  link: [
    { rel: "icon", href: "/favicon.ico" },
    // { rel: "mask-icon", href: "/mask-icon.svg", color: "#FFFFFF" }
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