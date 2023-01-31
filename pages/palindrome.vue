<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t("palindrome.title"),
  meta: [
    { name: "description", content: t("palindrome.meta.description") }
  ]
})
</script>



<template>
  <h1>{{ t("palindrome.title") }}</h1>
</template>