<script setup>
const { t, tm, rt } = useI18n()

useSeoMeta({
  title: () => t("character-counter.title"),
  description: () => t("character-counter.meta.description")
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
    <h1 class="title">{{ t("character-counter.title") }}</h1>


    <textarea class="character-counter-text" cols="80" rows="8" :value="characterCounterText" @input="event => characterCounterText = event.target.value" :placeholder="t('character-counter.placeholder')" :title="t('character-counter.placeholder')"></textarea>

    
    <section class="info-panel">
      <div class="info-panel-row">
        <article v-for="data, key in generalInfo" :key="key">
          <h2 class="info-data">{{ data }}</h2>
          <p class="info-title">{{ t(key) }}</p>
        </article>
      </div>

      <div class="info-panel-row">
        <article v-for="data, key in characterInfo" :key="key">
          <h2 class="info-data">{{ data }}</h2>
          <p class="info-title">{{ t(key) }}</p>
          <p class="info-percentage"><code></code>{{ Math.round(data / generalInfo["character-counter.info.general.characters"] * 100) || 0 }}%</p>
        </article>
      </div>
    </section>

    <!-- LETTER DENSITY -->


    <ToolDescription>
      <p>{{ t("character-counter.description.definition") }}</p>

      <div>
        <p>{{ t("character-counter.description.examples.title") }}</p>
        <ul>
          <li v-for="example, i in tm('character-counter.description.examples.list')" :key="i">{{ rt(example) }}</li>
        </ul>
      </div>

      <p>{{ t("character-counter.description.usage") }}</p>
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

.character-counter-text
  box-sizing border-box
  font-family inherit
  font-size 1.2em
  line-height 1.35
  min-width 10em
  max-width 100%
  min-height 2.5em
  background rgba(0, 10, 15, .5)
  color lightcyan
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

.info-panel
  display grid
  gap 1em
  margin-top 1em
  margin-bottom 2em
  > div
    display flex
    flex-wrap wrap
    align-items center
    justify-content center
    gap 1em
    text-align center
    font-size clamp(.73em, 1.65vw, 1em)
    max-width max-content
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
</style>