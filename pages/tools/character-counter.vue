<script setup>
const { t, tm, rt } = useI18n()

useSeoMeta({
  title: t("character-counter.title"),
  description: t("character-counter.meta.description")
})


const characterCounterText = useState("characterCounterText", () => "")


const generalInfo = computed(() => ({
  "character-counter.info.general.characters": characterCounterText.value.length,
  "character-counter.info.general.words": characterCounterText.value.match(/[\p{L}\p{M}\p{N}]+/gu)?.length || 0,
  "character-counter.info.general.sentences": characterCounterText.value.match(/[^\p{Z}\p{C}\p{Po}][^\p{Po}]*/gu)?.length || 0,
  "character-counter.info.general.paragraphs": characterCounterText.value.match(/[^\p{Z}\p{C}][^\p{C}]*/gu)?.length || 0,
}))


const characterInfo = computed(() => ({
  "character-counter.info.character.without-spaces": characterCounterText.value.match(/[^\p{Z}\p{C}]/gu)?.length || 0,
  "character-counter.info.character.letters": characterCounterText.value.match(/[\p{L}\p{M}]/gu)?.length || 0,
  "character-counter.info.character.digits": characterCounterText.value.match(/\p{N}/gu)?.length || 0,
  "character-counter.info.character.special": characterCounterText.value.match(/[\p{S}\p{P}]/gu)?.length || 0,
}))
</script>



<template>
  <main>
    <h1 id="title" v-t="'character-counter.title'"></h1>

    <section id="description">
      <p v-html="t('character-counter.description.definition')"></p>

      <div id="examples">
        <p v-html="t('character-counter.description.examples.title')"></p>
        <ul>
          <li v-for="example, i in tm('character-counter.description.examples.list')" :key="i">{{ rt(example) }}</li>
        </ul>
      </div>

      <p v-html="t('character-counter.description.usage')"></p>

      <ClientOnly>
        <ShareLinkButton />
      </ClientOnly>
    </section>

    <textarea id="character-counter-text" cols="80" rows="10" :value="characterCounterText" @input="event => characterCounterText = event.target.value" :placeholder="t('character-counter.placeholder')" :title="t('character-counter.placeholder')"></textarea>

    
    <section class="info-panel" id="general-info">
      <article v-for="data, key in generalInfo" :key="key">
        <h2 class="info-data">{{ data }}</h2>
        <p class="info-title" v-t="key"></p>
      </article>
    </section>

    <section class="info-panel">
      <article v-for="data, key in characterInfo" :key="key">
        <h2 class="info-data">{{ data }}</h2>
        <p class="info-title" v-t="key"></p>
        <p class="info-percentage"><code></code>{{ Math.round(data / generalInfo["character-counter.info.general.characters"] * 100) || 0 }}%</p>
      </article>
    </section>


    <!-- LETTER DENSITY -->
  </main>
</template>



<style lang="stylus" scoped>
$page-mx = 1em


main
  display flex
  flex-direction column
  align-items center
  margin 0 $page-mx 3em $page-mx


.info-panel
  display flex
  flex-wrap wrap
  align-items center
  justify-content center
  gap 1em
  text-align center
  font-size clamp(.73em, 1.65vw, 1em)
  max-width max-content
  margin 0 auto
  > article
    flex 1
    min-width 11.5em
    background rgba(0, 10, 20, .5)
    padding .5em 1em
    border-radius 12px
    > .info-data
      color mediumaquamarine
      font-family monospace
      font-size 2em
      margin 0
    > .info-title
      font-weight lighter
      margin .2rem 0
    > .info-percentage
      font-family monospace
      color cadetblue
      margin 0
    &:first-child
      box-shadow 0 0 .2em .2em darkcyan


#title
  text-decoration underline double cadetblue 2px
  text-underline-offset 3px
  line-height 1.35

#description
  line-height 1.35
  font-weight lighter
  text-align initial
  color aquamarine
  background rgba(0, 5, 10, .5)
  max-width max-content
  padding 1em
  box-shadow 0 0 3px teal
  $mx = (-($page-mx))
  margin 0 $mx 1.5em $mx
  p
    margin 0
  :deep(mark)
    color paleturquoise
    font-weight bold
    background none
  > :not(:first-child)
    margin-top 1em

#examples > ul
  color turquoise
  padding-left 1.25em
  margin 0
  > li
    margin-top .25em
    &::marker
      color teal

#character-counter-text
  box-sizing border-box
  font-family inherit
  font-size 1.2em
  min-width 10em
  max-width 100%
  min-height 2.5em
  background rgba(0, 10, 15, .5)
  color lightcyan
  padding .5em
  border none
  border-radius 8px
  margin .5em 0
  transition color .3s, box-shadow .2s
  &::placeholder
    color silver
  &:focus
    outline none
  &:focus-visible
    box-shadow 0 0 8px 2px

#general-info
  margin 1em auto
</style>