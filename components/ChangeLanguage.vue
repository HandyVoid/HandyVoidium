<script setup>
const { locale, locales } = useI18n(),
      switchLocalePath = useSwitchLocalePath()
</script>



<template>
  <div>
    <!-- Input Search Language -->
    <NuxtLink v-for="{ code, name } in locales" :key="code" :to="switchLocalePath(code)">
      {{ name }}
    </NuxtLink>
  </div>
</template>