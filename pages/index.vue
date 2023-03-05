<script lang="ts" setup>
definePageMeta({
  alias: ["/home", "/tool", "/tools"]
})


const { t } = useI18n(),
      localePath = useLocalePath(),
      config = useRuntimeConfig()


useSeoMeta({
  description: t("index.meta.description")
})


const tools = getListOfToolsPaths()
</script>



<template>
  <main>
    <hgroup class="title-group">
      <h1>{{ config.public.siteName }}</h1>
      <p>{{ t("index.meta.description") }}</p>
    </hgroup>


    <section class="description">
      <p v-html="t('index.description.summary')"></p>

      <p v-html="t('index.description.useful')"></p>

      <p v-html="t('index.description.simple')"></p>

      <p v-html="t('index.description.contribute')"></p>

      <div class="description-actions">
        <NuxtLink :to="config.public.repository" target="_blank" class="repository"><Icon name="line-md:github-twotone" />{{ t("repository") }}</NuxtLink>
        <ClientOnly>
          <ShareLinkButton />
        </ClientOnly>
      </div>
    </section>


    <ul class="tool-list">
      <li v-for="tool, i in tools" :key="i"><NuxtLink :to="localePath(`/tools/${tool}`)">{{ t(`${tool}.title`) }}</NuxtLink></li>
    </ul>
  </main>
</template>



<style lang="stylus" scoped>
$page-mx = 1em


main
  display grid
  justify-content center
  margin 0 $page-mx 3em $page-mx


.title-group
  text-align center
  > h1:first-child
    font-size clamp(2em, 11vw, 3em)
    text-decoration underline double cadetblue 2px
    text-underline-offset 3px
    margin-bottom 0
  > p
    line-height 1.35
    color rgb(220, 245, 245)
    font-weight lighter
    font-size .85em

.description
  font-weight lighter
  line-height 1.35
  color paleturquoise
  background rgba(0, 10, 20, .5)
  max-width 75em
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
  gap .5em .75em
  margin-top 1em

.repository
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

.tool-list
  list-style none
  display grid
  justify-content center
  gap .5em
  font-size clamp(1em, 5.5vw, 1.5em)
  padding 0
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