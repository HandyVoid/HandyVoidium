<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  title: t("palindrome.title"),
  description: t("palindrome.meta.description")
})


const text = ref(""),
      characters = computed(() => text.value.toLowerCase().match(/[\p{L}\p{M}\p{N}]/gu)),
      isPalindrome = computed(() => characters.value?.join("") === characters.value?.reverse().join(""))
</script>



<template>
  <main>
    <hgroup>
      <h1 id="title">{{ t("palindrome.title") }}</h1>
      <p id="palindrome-definition">{{ t("palindrome.definition") }}</p>
    </hgroup>

    <textarea id="palindrome-text" cols="80" rows="10" v-model.trim="text" :placeholder="t('palindrome.placeholder')"></textarea>

    <p v-if="!characters?.length" class="output"><Icon name="system-uicons:write" />{{ t("palindrome.output.type") }}</p>
    <p v-else-if="isPalindrome" class="output palindrome"><Icon name="icon-park-twotone:correct" />{{ t("palindrome.output.palindrome") }}</p>
    <p v-else class="output not-palindrome"><Icon name="fluent-emoji-high-contrast:cross-mark" />{{ t("palindrome.output.not palindrome") }}</p>
  </main>
</template>



<style lang="stylus" scoped>
main
  text-align center
  $mx = 1em
  margin 0 $mx 2em $mx

#title
  margin-bottom 0

#palindrome-definition
  text-align justify
  line-height 1.25
  max-width max-content
  $mx = auto
  margin 1em $mx 1.5em $mx

#palindrome-text
  box-sizing border-box
  font-family inherit
  font-size 1.2em
  min-width 10em
  max-width 100%
  min-height 2.5em
  color v-bind("!characters?.length ? 'darkgray' : isPalindrome ? 'green' : 'crimson'")
  padding .5em
  border thin solid
  border-radius 8px
  transition-property color, box-shadow
  transition-duration .2s
  &::placeholder
    color silver
  &:focus
    outline none
  &:focus-visible
    box-shadow 0 0 8px

.output
  font-weight bold
  font-size clamp(1em, 5vw, 1.25em)
  line-height 1.5
  &.palindrome
    color green
  &.not-palindrome
    color crimson
  > svg
    vertical-align text-top
    margin 0 .4em
</style>