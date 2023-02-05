<script lang="ts" setup>
const config = useRuntimeConfig()
</script>



<template>
  <header id="app-header">
    <NuxtLink to="/" id="app-header-title">
      <img src="/mask-icon.svg" />
      <span>{{ config.public.appName }}</span>
    </NuxtLink>
    <ChangeLanguage />
  </header>
</template>



<style lang="stylus" scoped>
#app-header
  color white
  background black
  padding .5em
  margin 0
</style>