<script setup>
const { locale, locales } = useI18n(),
      switchLocalePath = useSwitchLocalePath()
</script>



<template>
  <div id="lang-container">
    <button id="lang-button" :title="locale">
      <Icon name="mdi:language" />
    </button>
    
    <ul id="lang-list">
      <li v-for="{ code, name } in locales" :key="code">
        <NuxtLink :to="switchLocalePath(code)" >
          {{ name }}
        </NuxtLink>
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
  background rgba(0, 10, 20, .5)
  backdrop-filter blur(4px)
  transform-origin top right
  padding 0
  border-radius 4px
  box-shadow 0 0 2px white
  margin 0
  transition-property visibility, opacity, scale
  transition-duration .2s
  > li
    &:not(:first-child)
      border-top thin solid darkslategray
    > a
      text-decoration none
      display inline-block
      box-sizing border-box
      width 100%
      color gainsboro
      padding .4em
      transition .15s
      &:hover
        background rgba(50, 70, 90, .5)
</style>