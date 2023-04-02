<script setup>
definePageMeta({
  alias: ["/home", "/tool", "/tools"]
})


const { t, tm, rt } = useI18n(),
      localePath = useLocalePath(),
      config = useRuntimeConfig()


useSeoMeta({
  title: null,
  description: () => t("index.meta.description")
})


const tools = getListOfToolsPaths()
</script>



<template>
  <main>
    <hgroup class="title-group">
      <h1>{{ config.public.siteName }}</h1>
      <p>{{ t("index.meta.description") }}</p>
    </hgroup>


    <section class="description-section">
      <p v-for="text, i in tm('index.description')" :key="i" v-html="rt(text)"></p>

      <div class="description-actions">
        <NuxtLink :to="localePath('/contribute')"><Icon name="fa-solid:hands-helping" />{{ t('contribute') }}</NuxtLink>
        <NuxtLink :to="config.public.repository" target="_blank"><Icon name="line-md:github-twotone" />{{ t("repository") }}<Icon name="line-md:external-link" class="external-link-icon" /></NuxtLink>
        <ActionShareLink />
      </div>
    </section>


    <section>
      <h2 class="tools-title">
        <Icon name="fluent:window-dev-tools-24-filled" />{{ t("tools") }}
      </h2>

      <ul class="tool-list">
        <li v-for="tool, i in tools" :key="i"><NuxtLink :to="localePath(`/tools/${tool}`)">{{ t(`${tool}.title`) }}</NuxtLink></li>
      </ul>
    </section>

  </main>
</template>



<style lang="stylus" scoped>
$page-mx = 1em


main
  display grid
  justify-content center
  margin 0 $page-mx 3.5em $page-mx

.title-group
  text-align center
  > h1:first-child
    font-size clamp(2em, 11vw, 3em)
    text-decoration underline double cadetblue 2px
    text-underline-offset 3px
    margin-top .5em
    margin-bottom 0
  > p
    line-height 1.35
    color rgb(220, 245, 245)
    font-weight lighter
    font-size .85em

.description-section
  font-weight lighter
  line-height 1.5
  color powderblue
  background rgba(0, 10, 20, .5)
  max-width 65em
  padding 1em
  box-shadow 0 0 3px teal
  margin .5em (-($page-mx))
  > p
    margin 0
    &:not(:first-child)
      margin-top .75em

.description-actions
  display flex
  flex-wrap wrap
  align-items center
  justify-content space-around
  gap .75em 1em
  margin-top 1em
  > a
    text-decoration none
    color cadetblue
    font-weight bold
    transition color .15s, text-shadow .2s
    &:hover
      text-decoration underline
      color lightseagreen
    &:active
      text-shadow 0 0 3px
      color rgb(50, 200, 180)
    > .icon
      vertical-align sub
      &:first-child
        font-size 1.5em
        margin-right .2em

.external-link-icon
  font-size 1.25em
  margin-left .4em

.tools-title
  text-align center
  color azure
  font-size clamp(1.5em, 9vw, 2em)
  text-decoration underline darkcyan 2px
  text-underline-offset 4px
  margin-bottom .6em
  > .icon
    color lightblue
    vertical-align text-top
    margin-right .3em

.tool-list
  list-style none
  display grid
  justify-content center
  gap .5em
  font-size clamp(1em, 5.5vw, 1.5em)
  padding 0
  margin 0
  > li > a
    display inline-block
    text-decoration none
    text-align center
    color lightcyan
    background rgba(0, 5, 10, .6)
    width 100%
    box-sizing border-box
    padding .5em .7em
    border-radius 1em
    box-shadow 0 0 4px cadetblue
    transition color .15s, background .15s, box-shadow .2s
    &:hover
      color azure
      background rgba(20, 30, 40, .8)
    &:focus
      box-shadow 0 0 2px 3px cadetblue
</style>