<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  title: t("character-counter.title"),
  description: t("character-counter.meta.description")
})


const characterCounterText = useState(() => "")


const generalInfo = computed(() => ({
  [t("character-counter.info.general.characters")]: characterCounterText.value.length,
  [t("character-counter.info.general.words")]: characterCounterText.value.match(/[\p{L}\p{M}\p{N}]+/gu)?.length || 0,
  [t("character-counter.info.general.sentences")]: characterCounterText.value.match(/[^¡¿.?!\p{Z}]+/gu)?.length || 0,
  [t("character-counter.info.general.paragraphs")]: characterCounterText.value.match(/.+/g)?.length || 0,
}))


const characterInfo = computed(() => ({
  [t("character-counter.info.character.without-spaces")]: characterCounterText.value.match(/[^\p{Z}\p{C}]/gu)?.length || 0,
  [t("character-counter.info.character.letters")]: characterCounterText.value.match(/[\p{L}\p{M}]/gu)?.length || 0,
  [t("character-counter.info.character.digits")]: characterCounterText.value.match(/\p{N}/gu)?.length || 0,
  [t("character-counter.info.character.special")]: characterCounterText.value.match(/[\p{S}\p{P}]/gu)?.length || 0,
}))
</script>



<template>
  <main>
    <h1>{{ t("character-counter.title") }}</h1>

    <textarea id="character-counter-text" cols="80" rows="10" v-model="characterCounterText" :placeholder="t('character-counter.placeholder')" :title="t('character-counter.placeholder')"></textarea>

    
    <section class="info-panel" id="general-info">
      <article v-for="data, key in generalInfo">
        <h2 class="info-data">{{ data }}</h2>
        <p class="info-title">{{ key }}</p>
      </article>
    </section>

    <section class="info-panel">
      <article v-for="data, key in characterInfo">
        <h2 class="info-data">{{ data }}</h2>
        <p class="info-title">{{ key }}</p>
        <p class="info-percentage"><code></code>{{ Math.round(data / generalInfo[t("character-counter.info.general.characters")] * 100) || 0 }}%</p>
      </article>
    </section>


    <!-- LETTER DENSITY -->
  </main>
</template>



<style lang="stylus" scoped>
main
  text-align center
  $mx = 1em
  margin 0 $mx 2em $mx


.info-panel
  display flex
  flex-wrap wrap
  align-items center
  justify-content center
  gap 1em
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


#character-counter-text
  box-sizing border-box
  font-family inherit
  font-size 1.2em
  min-width 10em
  max-width 100%
  min-height 2.5em
  background rgba(0, 10, 15, .5)
  color aquamarine
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

#general-info
  margin 1em auto
</style>