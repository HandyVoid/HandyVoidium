<script setup>
const { locale, locales } = useI18n(),
      switchLocalePath = useSwitchLocalePath()
</script>



<template>
  <div class="lang-container">
    <button class="lang-button" :title="locale">
      <Icon name="mdi:language" />
    </button>

    <ul class="lang-list">
      <li v-for="{ code, name } in locales" :key="code" :class="{ 'lang-selected': code == locale }">
        <NuxtLink :to="switchLocalePath(code)" >
          {{ name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>




<style lang="stylus" scoped>
.lang-container
  position relative
  &:not(:hover)
    > .lang-button
      color silver
    > .lang-list
      visibility hidden
      opacity 0

.lang-button
  cursor pointer
  font-size 1.75em
  background none
  color white
  padding .25em
  border none
  transition color .2s

.lang-list
  list-style none
  position absolute
  right -.25em
  background rgba(0, 10, 20, .75)
  transform-origin top right
  padding 0
  box-shadow 0 0 3px cadetblue
  border-radius 6px
  margin 0
  overflow hidden
  transition visibility .2s, opacity .2s
  > li
    &:not(:first-child)
      border-top thin solid darkslategray
    > a
      text-decoration none
      display inline-block
      box-sizing border-box
      width 100%
      color gainsboro
      backdrop-filter blur(4px)
      padding .4em
      transition .15s
      &:hover
        background rgba(40, 50, 60, .75)
    &.lang-selected > a
      color lightseagreen
      &:hover
        background rgba(40, 50, 60, .75)
</style>