<script lang="ts" setup>
const { t } = useI18n(),
      localePath = useLocalePath()

useHead({
  meta: [
    { name: "description", content: t("home.meta.description") }
  ]
})
</script>



<template>
  <h1>HandyVoid</h1>
  <NuxtLink :to="localePath('palindrome')">{{ t("palindrome.title") }}</NuxtLink>
</template>