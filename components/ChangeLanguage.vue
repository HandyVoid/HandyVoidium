<script setup>
const { locale, locales } = useI18n(),
      switchLocalePath = useSwitchLocalePath(),
      //
      showLangList = ref(false)
</script>



<template>
  <div id="lang-container" @blur="showLangList = false">
    <button id="lang-button" @click="showLangList = !showLangList">
      <Icon name="mdi:language" />
    </button>
    <Transition name="lang-list">
      <ul id="lang-list" v-show="showLangList">
        <li v-for="{ code, name } in locales" :key="code">
          <NuxtLink :to="switchLocalePath(code)" >
            {{ name }}
          </NuxtLink>
        </li>
      </ul>
    </Transition>
  </div>
</template>




<style lang="stylus" scoped>
#lang-container
  position relative
  margin-left auto

.lang-list-enter-active, .lang-list-leave-active
  transition opacity .2s
.lang-list-enter-from, .lang-list-leave-to
  opacity 0

#lang-list
  list-style none
  position absolute
  background rgba(0, 10, 20, .75)
  backdrop-filter blur(4px)
  padding 0
  margin-top .5em
  > li > a
    display inline-block
    padding .2em .4em
</style>