<script setup lang="ts">
const { finalizePendingLocaleChange } = useI18n()


async function onBeforeEnter() {
  await finalizePendingLocaleChange()
}
</script>



<template>
  <VitePwaManifest />
  
  <NuxtLayout>
    <SeoKit />
    <NuxtLoadingIndicator />
    <NuxtPage :transition="{
      name: 'page',
      mode: 'out-in',
      onBeforeEnter
    }" />
  </NuxtLayout>
</template>



<style lang="stylus">
.page-enter-active, .page-leave-active
  transition .2s

.page-enter-from, .page-leave-to
  opacity 0
  filter blur(1px)
</style>