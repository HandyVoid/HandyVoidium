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


const router = useRouter()

const tools = router.options.routes.flatMap(({ path }) => {
  const toolsPath = "/tools/"
  return path.startsWith(toolsPath) ? path.replace(toolsPath, "") : []
})
</script>



<template>
  <main>
    <hgroup id="title-group">
      <h1>{{ config.public.appName }}</h1>
      <p v-t="'home.meta.description'"></p>
    </hgroup>

    <ul id="tool-list">
      <li v-for="tool in tools"><NuxtLink :to="localePath(`/tools/${tool}`)" v-t="`${tool}.title`"></NuxtLink></li>
    </ul>
  </main>
</template>



<style lang="stylus" scoped>
main
  font-size clamp(1em, 5.5vw, 1.5em)
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
  gap .5em
  padding 0
  margin-top 1.5em
  > li > a
    display inline-block
    text-decoration none
    text-align center
    color white
    background rgba(0, 5, 15, .6)
    width 100%
    box-sizing border-box
    padding .5em .7em
    border-radius 1em
    box-shadow 0 0 4px cadetblue
    transition background .15s, box-shadow .2s
    &:hover
      background rgba(20, 30, 35, .8)
    &:focus
      box-shadow 0 0 2px 3px cadetblue
</style>