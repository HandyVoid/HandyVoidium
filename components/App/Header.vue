<script lang="ts" setup>
const { t } = useI18n(),
      config = useRuntimeConfig(),
      localePath = useLocalePath()
</script>



<template>
  <header class="app-header">
    <NuxtLink class="app-header-title" :to="localePath('/')" title="Home">
      <img src="/icon.svg" alt="logo" width="32" height="32" />
      <span>{{ config.public.siteName }}</span>
    </NuxtLink>


    <ul class="right-panel">
      <li>
        <NuxtLink target="_blank" :title="t('repository')" class="repository" :to="config.public.repository">
          <Icon name="line-md:github-twotone" />
        </NuxtLink>
      </li>

      <li>
        <ChangeLanguage />
      </li>
    </ul>
  </header>
</template>



<style lang="stylus" scoped>
.app-header
  display flex
  align-items center
  gap 1em
  position sticky
  top 0
  z-index 1
  color white
  background rgba(0, 10, 15, .8)
  backdrop-filter blur(4px)
  padding 0 calc((100% - 70em) / 2)
  box-shadow 0 0 2px
  margin 0

.app-header-title
  display flex
  align-items center
  gap .5em
  font-size 1.25em
  text-decoration none
  color white
  padding .5rem
  transition background .15s
  &:hover
    background rgb(20, 30, 40)
  &:active
    background rgb(30, 40, 50)

.right-panel
  list-style none
  display flex
  align-items center
  gap .5em
  padding 0
  $my = 0
  margin $my .5em $my auto

.repository
  font-size 1.75em
  color silver
  transition color .2s, filter .2s
  &:hover
    color white
  &:active
    filter drop-shadow(0 0)


@media(max-width: 350px)
  .app-header-title > span
    display none
</style>