<script lang="ts" setup>
const config = useRuntimeConfig(),
      localePath = useLocalePath(),
      { t } = useI18n(),
      route = useRoute(),
      pageTitle = computed(() => typeof route.meta.title === "string" ? (t(route.meta.title) || route.meta.title) : "")
</script>



<template>
  <header id="app-header">
    <nav>
      <ol id="app-header-breadcumb">
        <li>
          <NuxtLink id="app-header-title" :to="localePath('/')" :title="config.public.appName">
            <img src="/favicon-32x32.png" width="32" height="32" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="breadcumb-item" :to="route.fullPath">
            {{ pageTitle || config.public.appName }}
          </NuxtLink>
        </li>
      </ol>
    </nav>

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

#app-header-breadcumb
  list-style none
  display flex
  align-items center
  gap .25em
  padding 0
  margin 0
  > li:not(:first-child)::before
    content ">"
    color lightslategray
    margin-right .5em

.breadcumb-enter-active, .breadcumb-leave-active
  transition opacity .15s ease-out
.breadcumb-enter-from, .breadcumb-leave-to
  opacity 0

.breadcumb-item
  text-decoration none
  color lightgray
  transition color .2s, box-shadow .2s
  &:hover
    text-decoration underline
  &:active
    color white
    text-shadow 0 0 4px

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
    background rgb(20, 30, 50)
  &:active
    background rgb(40, 60, 80)
</style>