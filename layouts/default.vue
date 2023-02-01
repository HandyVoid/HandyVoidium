<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true
})

useHead({
  htmlAttrs: head.value.htmlAttrs,
  titleTemplate: titleChunk => `HandyVoid${titleChunk ? ` • ${titleChunk}` : ""}`
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