<script lang="ts" setup>
const config = useRuntimeConfig(),
      localePath = useLocalePath()
</script>



<template>
  <header id="app-header">
    <NuxtLink id="app-header-title" :to="localePath('/')">
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
  gap 1em
  color white
  background rgb(0, 10, 20)
  margin 0

#app-header-title
  display flex
  align-items center
  gap .5rem
  font-size 1.5em
  text-decoration none
  color white
  padding .5em
  transition background .15s
  &:hover
    background rgb(20, 30, 50)
  &:active
    background rgb(40, 60, 80)
</style>