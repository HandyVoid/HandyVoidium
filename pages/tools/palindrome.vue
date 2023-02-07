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
    <!-- What is a palindrome -->
    <textarea id="palindrome-text" cols="80" rows="15" />
    <!-- Output -->
  </main>
</template>



<style lang="stylus" scoped>
main
  text-align center
  margin 0 1em 2em 1em

#palindrome-text
  box-sizing border-box
  font-family inherit
  font-size 1.2em
  max-width 100%
  padding .5em
</style>