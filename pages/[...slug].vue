<script lang="ts" setup>
const { t } = useI18n()
</script>



<template>
  <main>
    <ContentDoc>

      
      <template #not-found>
        <hgroup class="header-404">
          <h1>404</h1>
          <p>{{ t("page-404.not-found") }}</p>
        </hgroup>

        <ReturnHome />
      </template>


      <template #empty>
        <h1 class="header-empty">{{ t("page-empty") }}</h1>

        <ReturnHome />
      </template>


    </ContentDoc>
  </main>
</template>



<style lang="stylus" scoped>
main
  text-align center
  $px = 1em
  padding 2em $px 4em $px
  margin auto

.header-404
  margin-bottom 2em
  > h1:first-child
    font-size 8em
    color mediumaquamarine
    text-shadow 0 0 6px teal
    margin 0
  > p
    max-width 50em
    line-height 1.5
    margin 0

.header-empty
  line-height 1.3
  font-size clamp(1.5em, 9vw, 2em)
  margin-bottom 1em
</style>