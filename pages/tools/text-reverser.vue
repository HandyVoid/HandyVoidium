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


    <NuxtLink v-if="textToReverse.length > 1 && textToReverse == reversedText" :to="localePath('/tools/palindrome-checker')">
      <p>{{ t("text-reverser.palindrome.is-it") }}</p>
      <p>{{ t("text-reverser.palindrome.check-out") }}</p>
    </NuxtLink>


    <section class="description">
      <p>{{ t('text-reverser.description') }}</p>

      <ActionShareLink />
    </section>
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
  max-width 100em
  margin-bottom 1.5em
  > textarea
    box-sizing border-box
    font-family inherit
    font-size 1.2em
    line-height 1.35
    min-width 12.5em
    width 100%
    max-width 100%
    min-height 2.5em
    height 15em
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

.description
  line-height 1.5
  font-weight lighter
  color aquamarine
  background rgba(0, 5, 10, .5)
  $px = 1em
  padding 1em $px 2em $px
  box-shadow 0 0 3px teal
  $mx = -($page-mx)
  margin .5em $mx 0 $mx
  p
    margin 0
  :deep(mark)
    color paleturquoise
    font-weight bold
    background none
  > :not(:first-child)
    margin-top 1em
</style>