<script setup>
const { locale, locales } = useI18n(),
      switchLocalePath = useSwitchLocalePath(),
      //
      showLangList = useState("showLangList", () => false)
</script>



<template>
  <div class="lang-container" @focusout="showLangList = false">
    <button class="lang-button" :title="locale.toUpperCase()" @click="showLangList = !showLangList" :aria-expanded="showLangList">
      <Icon name="mdi:language" />
    </button>

    <Transition name="lang">
      <ul class="lang-list" v-show="showLangList" @focusin="showLangList = true" @click="showLangList = false">
        <li v-for="{ code, name } in locales" :key="code">
          <NuxtLink :to="switchLocalePath(code)">
            {{ name }}
          </NuxtLink>
        </li>
      </ul>
    </Transition>
  </div>
</template>




<style lang="stylus" scoped>
.lang-container
  position relative

.lang-enter-active, .lang-leave-active
  transition .2s
.lang-enter-from, .lang-leave-to
  opacity 0
  translate 0 -.5em

.lang-button
  cursor pointer
  font-size 1.75em
  background none
  color silver
  padding .25em
  border none
  transition color .2s, filter .2s
  &:hover, &:active
    color white
  &:active
    filter drop-shadow(0 0 3px)
  &[aria-expanded="true"]
    color white
    filter drop-shadow(0 0 5px)

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
  transition visibility .2s, opacity .2s, translate .2s
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
      &.router-link-active
        color lightseagreen
        &:hover
          background rgba(40, 50, 60, .75)
</style>