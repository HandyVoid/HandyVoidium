<script setup>
const { locales } = useI18n(),
      switchLocalePath = useSwitchLocalePath()
</script>



<template>
  <header id="app-header">
    <!-- Logo -->
    <h1>HandyVoid</h1>
    <div>
      <NuxtLink v-for="{ code, name } in locales" :key="code" :to="switchLocalePath(code)">
        {{ name }}
      </NuxtLink>
    </div>
  </header>
</template>



<style lang="stylus">
// #app-header

</style>