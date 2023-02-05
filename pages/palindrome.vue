<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  title: t("palindrome.title"),
  description: t("palindrome.meta.description")
})
</script>



<template>
  <main>
    <h1>{{ t("palindrome.title") }}</h1>
  </main>
</template>