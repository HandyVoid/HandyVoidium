<script setup>
const { t, tm, rt } = useI18n()

useSeoMeta({
  title: () => t("character-counter.title"),
  description: () => t("character-counter.meta.description")
})


const characterCounterText = useState("characterCounterText", () => "")


const generalInfo = computed(() => ({
  "character-counter.info.general.characters": characterCounterText.value,
  "character-counter.info.general.words": characterCounterText.value.match(/[\p{L}\p{M}\p{N}]+/gu),
  "character-counter.info.general.sentences": characterCounterText.value.match(/[^\p{Z}\p{C}\p{Po}][^\p{Po}]*/gu),
  "character-counter.info.general.paragraphs": characterCounterText.value.match(/[^\p{Z}\p{C}][^\p{C}]*/gu),
}))


const characterInfo = computed(() => ({
  "character-counter.info.character.without-spaces": characterCounterText.value.match(/[^\p{Z}\p{C}]/gu),
  "character-counter.info.character.letters": characterCounterText.value.match(/[\p{L}\p{M}]/gu),
  "character-counter.info.character.digits": characterCounterText.value.match(/\p{N}/gu),
  "character-counter.info.character.special": characterCounterText.value.match(/[\p{S}\p{P}]/gu),
}))


const letterCount = computed(() => characterInfo.value["character-counter.info.character.letters"]?.reduce((count, letter) => {

  letter = letter.toUpperCase()
  count[letter] = (count[letter] || 0) + 1

  return count

}, {}))
</script>



<template>
  <main>
    <h1 class="title">{{ t("character-counter.title") }}</h1>


    <section class="character-counter-section">

      <div>
        <textarea class="character-counter-text" rows="8" :value="characterCounterText" @input="event => characterCounterText = event.target.value" :placeholder="t('character-counter.placeholder')" :title="t('character-counter.placeholder')"></textarea>
        <div class="info-panel">
          <div class="info-panel-row">
            <article v-for="data, key in generalInfo" :key="key">
              <h2 class="info-data">{{ data?.length || 0 }}</h2>
              <p class="info-title">{{ t(key) }}</p>
            </article>
          </div>
          <div class="info-panel-row">
            <article v-for="data, key in characterInfo" :key="key">
              <h2 class="info-data">{{ data?.length || 0 }}</h2>
              <p class="info-title">{{ t(key) }}</p>
              <p class="info-percentage"><code></code>{{ Math.round((data?.length || 0) / generalInfo["character-counter.info.general.characters"].length * 100) || 0 }}%</p>
            </article>
          </div>
        </div>
      </div>

      <table class="letter-density">
        <caption>{{ t("letter-density") }}</caption>
        <TransitionGroup name="list" tag="tbody">
          <tr v-for="value, key in letterCount" :key="key" :title="value">
            <th>{{ key }}</th>
            <td>{{ Math.round(100 * (value / characterInfo["character-counter.info.character.letters"].length)) }}%</td>
          </tr>
        </TransitionGroup>
      </table>

    </section>


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


.list-move, .list-enter-active, .list-leave-active
  transition .25s
.list-leave-active
  position absolute
  right 0
  left 0
.list-enter-from, .list-leave-to
  opacity 0
  scale .8


.title
  text-decoration underline double cadetblue 2px
  text-underline-offset 3px
  line-height 1.35
  text-align center

.character-counter-section
  display flex
  flex-wrap wrap
  justify-content center
  gap 1.5em
  position relative
  max-width 100%
  margin-bottom 2em

.character-counter-text
  box-sizing border-box
  font-family inherit
  font-size 1.2em
  line-height 1.35
  min-width 10em
  width 100%
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
  justify-content center
  gap 1em
  margin-top 1em
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

.letter-density
  flex 1
  display grid
  align-content start
  background rgba(0, 10, 20, .4)
  max-height 27.25em
  padding .75em .6em
  border-radius 8px
  box-shadow 0 0 3px cadetblue
  overflow auto
  scrollbar-width thin
  > caption
    font-weight bolder
    text-decoration underline 1px cadetblue
    text-underline-offset 2px
  > :deep(tbody)
    position relative  // IMPORTANT FOR TRANSITIONS
    margin-top .25em
    > tr
      display flex
      justify-content space-between
      background rgb(35, 60, 65)
      border-radius 6px
      padding .15em .25em
      margin-top .35em
      &:first-child
        background rgb(40, 100, 80)
      > th
        font-weight bold
      > td
        font-weight lighter
</style>