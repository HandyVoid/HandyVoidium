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
    <hgroup id="header-group">
      <h1>{{ t("palindrome.title") }}</h1>
      <p>{{ t("palindrome.definition.line-1") }}</p>
      <p>{{ t("palindrome.definition.line-2") }}</p>
    </hgroup>

    <textarea id="palindrome-text" cols="80" rows="10" v-model.trim="text" :placeholder="t('palindrome.placeholder')"></textarea>

    <Transition name="output" mode="out-in">
      <p v-if="!characters?.length" class="output"><Icon name="system-uicons:write" />{{ t("palindrome.output.type") }}</p>
      <p v-else-if="isPalindrome" class="output palindrome"><Icon name="icon-park-twotone:correct" />{{ t("palindrome.output.palindrome") }}</p>
      <p v-else class="output not-palindrome"><Icon name="fluent-emoji-high-contrast:cross-mark" />{{ t("palindrome.output.not palindrome") }}</p>
    </Transition>
  </main>
</template>



<style lang="stylus" scoped>
main
  text-align center
  $mx = 1em
  margin 0 $mx 1em $mx


.output-enter-active, .output-leave-active
  transition .15s
.output-enter-from, .output-leave-to
  opacity 0
  filter blur(1px)
  scale .95


#header-group
  display grid
  gap .5em
  > h1:first-child
    margin-bottom .5rem
  > p
    line-height 1.25
    color gainsboro
    margin 0

#palindrome-text
  box-sizing border-box
  font-family inherit
  font-size 1.2em
  min-width 10em
  max-width 100%
  min-height 2.5em
  background rgba(0, 10, 15, .5)
  color v-bind("!characters?.length ? 'gainsboro' : isPalindrome ? 'mediumspringgreen' : 'crimson'")
  padding .5em
  border thin solid
  border-radius 8px
  margin-top 1.75rem
  transition color .3s, box-shadow .2s
  &::placeholder
    color silver
  &:focus
    outline none
  &:focus-visible
    box-shadow 0 0 8px 2px

.output
  font-weight bold
  font-size clamp(1em, 5vw, 1.25em)
  line-height 1.5
  &.palindrome
    color mediumspringgreen
  &.not-palindrome
    color crimson
  > svg
    vertical-align text-top
    margin 0 .4em
</style>