<script lang="ts" setup>
const config = useRuntimeConfig()
</script>



<template>
  <header id="app-header">
    <!-- Logo -->
    <h1>{{ config.public.appName }}</h1>
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