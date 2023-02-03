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
body
  margin 0
</style>