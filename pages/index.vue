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

    <section id="description">
      <p v-html="t('home.description.summary')"></p>
      <p v-html="t('home.description.contribute')"></p>
      <p><NuxtLink :to="config.public.repository" target="_blank" id="repository"><Icon name="line-md:github-twotone" />{{ t("repository") }}</NuxtLink></p>
    </section>

    <ul id="tool-list">
      <li v-for="tool, i in tools" :key="i"><NuxtLink :to="localePath(`/tools/${tool}`)" v-t="`${tool}.title`"></NuxtLink></li>
    </ul>
  </main>
</template>



<style lang="stylus" scoped>
$page-mx = 1em


main
  display grid
  justify-content center
  margin 0 $page-mx 2em $page-mx


#title-group
  text-align center
  > h1:first-child
    font-size clamp(2em, 11vw, 3em)
    text-decoration underline double cadetblue 2px
    text-underline-offset 3px
    margin-bottom 0
  > p
    line-height 1.35
    margin-top .75em

#description
  font-weight lighter
  line-height 1.35
  color paleturquoise
  background rgba(0, 10, 20, .75)
  padding 1em
  box-shadow 0 0 3px teal
  margin 0 (-($page-mx))
  > p
    margin 0
    &:not(:first-child)
      margin-top .75em

#repository
  text-decoration none
  color cadetblue
  font-weight bold
  transition color .15s, text-shadow .2s
  > .icon
    vertical-align sub
    font-size 1.5em
    margin-right .2em
  &:hover
    color lightseagreen
  &:active
    text-shadow 0 0 6px mediumaquamarine

#tool-list
  list-style none
  display grid
  justify-content center
  gap .5em
  font-size clamp(1em, 5.5vw, 1.5em)
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