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
    <h1>{{ config.public.appName }}</h1>
    <NuxtLink :to="localePath('/tools/palindrome')">{{ t("palindrome.title") }}</NuxtLink>
  </main>
</template>