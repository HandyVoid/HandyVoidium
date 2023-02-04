<script lang="ts" setup>
const { t } = useI18n(),
      localePath = useLocalePath(),
      config = useRuntimeConfig()

useHead({
  meta: [
    { name: "description", content: t("home.meta.description") }
  ]
})
</script>



<template>
  <main>
    <h1>{{ config.public.appName }}</h1>
    <NuxtLink :to="localePath('palindrome')">{{ t("palindrome.title") }}</NuxtLink>
  </main>
</template>