<script setup>
const { t } = useI18n({
  useScope: "local"
})

useHead({
  meta: [
    { name: "description", content: () => t("meta.description") }
  ]
})
</script>



<template>
  <h1>Test</h1>
</template>



<i18n lang="yaml">
en:
  meta:
    description: "Jack-of-all-trades tools in a single website"

es:
  meta:
    description: "Navaja suiza de herramientas hecha página"
</i18n>