<script lang="ts" setup>
definePageMeta({
  alias: ["/home", "/tool", "/tools"]
})

const { t } = useI18n(),
      localePath = useLocalePath(),
      config = useRuntimeConfig()

useSeoMeta({
  description: t("home.meta.description")
})
</script>



<template>
  <main>
    <hgroup>
      <h1>{{ config.public.appName }}</h1>
      <p>{{ t("home.meta.description") }}</p>
    </hgroup>

    <ul>
      <li><NuxtLink :to="localePath('/tools/palindrome')">{{ t("palindrome.title") }}</NuxtLink></li>
    </ul>
  </main>
</template>



<style lang="stylus" scoped>
main
  margin 0 1em
</style>