<script setup>
const { locale, locales } = useI18n(),
      switchLocalePath = useSwitchLocalePath()
</script>



<template>
  <div id="lang-container">
    <button id="lang-button">
      <Icon name="mdi:language" />
    </button>
    <ul id="lang-list">
      <li v-for="{ code, name } in locales" :key="code">
        <NuxtLink :to="switchLocalePath(code)" >
          {{ name }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink>Contribute</NuxtLink>
      </li>
    </ul>
  </div>
</template>




<style lang="stylus" scoped>
#lang-container
  position relative
  margin-left auto
  &:not(:hover) > #lang-list
    visibility hidden
    opacity 0
    scale .95

#lang-button
  cursor pointer

#lang-list
  list-style none
  position absolute
  right 0
  background rgba(0, 10, 20, .75)
  backdrop-filter blur(4px)
  transform-origin top right
  padding 0
  margin 0
  transition-property visibility, opacity, scale
  transition-duration .2s
  > li > a
    display inline-block
    padding .2em .4em
</style>