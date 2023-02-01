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


const { finalizePendingLocaleChange } = useI18n()

async function onBeforeEnter() {
  return await finalizePendingLocaleChange()  // Translate before enter transition
}
</script>



<template>
  <NuxtLayout>
    <NuxtPage :transition="{
      name: 'page',
      mode: 'out-in',
      onBeforeEnter
    }" />
  </NuxtLayout>
</template>



<style lang="stylus">
.page-enter-active, .page-leave-active
  transition all .4s

.page-enter-from, .page-leave-to
  opacity 0
  filter blur(8px)
</style>