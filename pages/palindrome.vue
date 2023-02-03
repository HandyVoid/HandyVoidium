<script lang="ts" setup>
const { t } = useI18n()

useHead({
  title: t("palindrome.title"),
  meta: [
    { name: "description", content: t("palindrome.meta.description") }
  ]
})
</script>



<template>
  <main>
    <h1>{{ t("palindrome.title") }}</h1>
  </main>
</template>