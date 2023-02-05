<script lang="ts" setup>
const config = useRuntimeConfig()
</script>



<template>
  <header id="app-header">
    <NuxtLink to="/" id="app-header-title">
      <img src="/favicon-32x32.png" width="32" height="32" />
      <span>{{ config.public.appName }}</span>
    </NuxtLink>

    <ChangeLanguage />
  </header>
</template>



<style lang="stylus" scoped>
#app-header
  display flex
  align-items center
  justify-content space-between
  color white
  background black
  padding 1em 2em
  margin 0

#app-header-title
  display flex
  align-items center
  gap .5rem
  font-size 1.5em
  text-decoration none
  color white
</style>