<script lang="ts" setup>
const config = useRuntimeConfig(),
      localePath = useLocalePath()
</script>



<template>
  <header id="app-header">
    <NuxtLink id="app-header-title" :to="localePath('/')" title="Home">
      <img src="/favicon-32x32.png" width="32" height="32" />
      {{ config.public.appName }}
    </NuxtLink>

    <ChangeLanguage />
  </header>
</template>



<style lang="stylus" scoped>
#app-header
  display flex
  align-items center
  gap 1em
  position sticky
  top 0
  color white
  background rgba(0, 10, 15, .8)
  backdrop-filter blur(4px)
  padding 0 calc((100% - 75em) / 2)
  box-shadow 0 0 2px
  margin 0

#app-header-title
  display flex
  align-items center
  gap .5rem
  font-size 1.25em
  text-decoration none
  color white
  padding .5rem
  transition background .15s
  &:hover
    background rgb(20, 30, 40)
  &:active
    background rgb(30, 40, 50)
</style>