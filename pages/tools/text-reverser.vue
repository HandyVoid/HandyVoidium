<script setup>
const { t } = useI18n()

useSeoMeta({
  title: () => t("text-reverser.title"),
  description: () => t("text-reverser.meta.description")
})


const localePath = useLocalePath()


String.prototype.reverse = function() {
  return this.split("").reverse().join("")
}


const textToReverse = useState("textToReverse", () => ""),
      reversedText = useState("reversedText", () => "")


function textToReverseInput(event) {
  textToReverse.value = event.target.value
  reversedText.value = event.target.value.reverse()
}

function reversedTextInput(event) {
  reversedText.value = event.target.value
  textToReverse.value = event.target.value.reverse()
}
</script>



<template>
  <main>
    <h1 class="title">{{ t("text-reverser.title") }}</h1>
    

    <div class="input-section">
      <textarea :value="textToReverse" @input="textToReverseInput" :placeholder="t('text-reverser.text-to-reverse.placeholder')"></textarea>
      <textarea :value="reversedText" @input="reversedTextInput" :placeholder="t('text-reverser.reversed-text.placeholder')"></textarea>
    </div>


    <NuxtLink v-if="textToReverse.length > 1 && textToReverse == reversedText" :to="localePath('/tools/palindrome-checker')" class="palindrome-checker-link">
      <p>{{ t("text-reverser.palindrome.is-it") }}</p>
      <p>{{ t("text-reverser.palindrome.check-out") }}</p>
    </NuxtLink>


    <ToolDescription class="description">
      <p>{{ t("text-reverser.description") }}</p>
    </ToolDescription>
  </main>
</template>



<style lang="stylus" scoped>
$page-mx = 1em


main
  display flex
  flex-direction column
  align-items center
  margin 0 $page-mx


.title
  text-decoration underline double cadetblue 2px
  text-underline-offset 3px
  line-height 1.35
  text-align center

.input-section
  display flex
  flex-wrap wrap
  gap 1em
  width 100%
  max-width 77em
  > textarea
    box-sizing border-box
    font-family inherit
    font-size 1.2em
    line-height 1.35
    min-width 12.5em
    width 100%
    max-width 100%
    min-height 2.5em
    height 10em
    background rgba(0, 10, 15, .5)
    padding .5em
    border none
    border-radius 8px
    transition color .3s, box-shadow .2s
    &::placeholder
      color silver
    &:focus
      outline none
    &:focus-visible
      box-shadow 0 0 8px 2px

.palindrome-checker-link
  text-decoration none
  text-align center
  color gainsboro
  background rgba(0, 10, 20, .5)
  padding .5em .75em
  border-radius .75em
  margin-top 1.5em
  transition color .2s, background .2s, box-shadow .2s
  &:hover
    color white
    background rgba(15, 20, 25, .5)
    box-shadow 0 0 4px cadetblue
  &:active
    box-shadow 0 0 6px 2px cadetblue
  > p
    margin 0
    &:first-child
      margin-bottom .5em

.description
  margin-top 2em
</style>