<script setup>
const { locales } = useI18n(),
      switchLocalePath = useSwitchLocalePath()
</script>



<template>
  <header>
    <h1>Header</h1>
    <NuxtLink v-for="{ code, name } in locales" :key="code" :to="switchLocalePath(code)">
      {{ name }}
    </NuxtLink>
  </header>
</template>