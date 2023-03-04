<script setup>
const { t, tm, rt } = useI18n()

useSeoMeta({
  title: t("palindrome-checker.title"),
  description: t("palindrome-checker.meta.description")
})


const palindromeText = useState("palindromeText", () => ""),
      characters = computed(() => palindromeText.value.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").match(/[\p{L}\p{M}\p{N}]/gu)),
      isPalindrome = computed(() => characters.value?.join("") === characters.value?.reverse().join(""))
</script>



<template>
  <main>
    <h1 class="title">{{ t("palindrome-checker.title") }}</h1>
    

    <textarea class="palindrome-text" cols="116" rows="10" :value="palindromeText" @input="event => palindromeText = event.target.value" :placeholder="t('palindrome-checker.placeholder')"></textarea>

    <Transition name="output" mode="out-in">
      <p v-if="!characters?.length" class="output"><Icon name="system-uicons:write" />{{ t("palindrome-checker.output.type") }}</p>
      <p v-else-if="isPalindrome" class="output palindrome"><Icon name="icon-park-twotone:correct" />{{ t("palindrome-checker.output.palindrome") }}</p>
      <p v-else class="output not-palindrome"><Icon name="fluent-emoji-high-contrast:cross-mark" />{{ t("palindrome-checker.output.not palindrome") }}</p>
    </Transition>


    <section class="description">
      <p v-html="t('palindrome-checker.description.definition')"></p>

      <div class="examples">
        <p v-html="t('palindrome-checker.description.examples.title')"></p>
        <ul>
          <li v-for="examples, key in tm('palindrome-checker.description.examples.list')" :key="key">
            <mark>{{ key }}</mark>
            <ul>
              <li v-for="example, i in examples" :key="i">{{ rt(example) }}</li>
            </ul>
          </li>
        </ul>
      </div>

      <p v-html="t('palindrome-checker.description.facts')"></p>

      <p v-html="t('palindrome-checker.description.conclusion')"></p>

      <p v-html="t('palindrome-checker.description.summary')"></p>

      <ClientOnly>
        <ShareLinkButton />
      </ClientOnly>
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

.description
  line-height 1.35
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

.examples > ul
  color turquoise
  padding-left 1.25em
  margin 0
  > li
    margin-top .4em
    &::marker
      color teal
    > ul
      padding-left 1.25em

.palindrome-text
  box-sizing border-box
  font-family inherit
  font-size 1.2em
  line-height 1.25
  min-width 10em
  max-width 100%
  min-height 2.5em
  background rgba(0, 10, 15, .5)
  color v-bind("!characters?.length ? 'gainsboro' : isPalindrome ? 'mediumspringgreen' : 'rgb(255, 40, 80)'")
  padding .5em
  border thin solid
  border-radius 8px
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
  text-align center
  &.palindrome
    color mediumspringgreen
  &.not-palindrome
    color rgb(255, 40, 80)
  > .icon
    vertical-align text-top
    margin 0 .4em

.output-enter-active, .output-leave-active
  transition .15s
.output-enter-from, .output-leave-to
  opacity 0
  filter blur(1px)
</style>