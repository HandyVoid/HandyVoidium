<script lang="ts" setup>
definePageMeta({
  alias: ["/home", "/tool", "/tools"]
})

const { t } = useI18n(),
      localePath = useLocalePath(),
      config = useRuntimeConfig()

useSeoMeta({
  description: t("home.meta.description")
})
</script>



<template>
  <main>
    <hgroup id="title-group">
      <h1>{{ config.public.appName }}</h1>
      <p>{{ t("home.meta.description") }}</p>
    </hgroup>

    <ul id="tool-list">
      <li><NuxtLink :to="localePath('/tools/palindrome-checker')">{{ t("palindrome.title") }}</NuxtLink></li>
    </ul>
  </main>
</template>



<style lang="stylus" scoped>
main
  font-size clamp(1em, 5vw, 1.5em)
  $mx = 1em
  margin 0 $mx 2em $mx

#title-group
  text-align center
  > h1:first-child
    text-decoration underline double 2px
  > p
    line-height 1.25

#tool-list
  list-style none
  display grid
  justify-content center
  padding 0
  margin-top 2em
  > li > a
    display inline-block
    text-decoration none
    text-align center
    color white
    background rgba(0, 5, 15, .6)
    padding .5em .7em
    border-radius 1em
    box-shadow 0 0 4px cadetblue
    transition background .15s, box-shadow .2s
    &:hover
      background rgba(20, 30, 35, .8)
    &:focus
      box-shadow 0 0 2px 3px cadetblue
</style>