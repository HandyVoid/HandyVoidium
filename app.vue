<script setup lang="ts">
const { locale, t, finalizePendingLocaleChange } = useI18n()


async function onBeforeEnter() {
  await finalizePendingLocaleChange()
}
</script>



<template>
  <VitePwaManifest />
  

  <NuxtLayout>
    <SeoKit :site-description="t('index.meta.description')" :language="locale" />

    <OgImageStatic component="MyOgImage" />

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