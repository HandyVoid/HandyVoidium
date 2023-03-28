<script lang="ts" setup>
const { t } = useI18n()
</script>



<template>
  <main>
    <ContentDoc class="content">

      
      <template #not-found>
        <Head>
          <Title>404</Title>
        </Head>

        <hgroup class="header-404">
          <h1>404</h1>
          <p>{{ t("page-404.not-found") }}</p>
        </hgroup>

        <ButtonReturnHome />
      </template>


      <template #empty>
        <h1 class="header-empty">{{ t("page-empty") }}</h1>

        <ButtonReturnHome />
      </template>


    </ContentDoc>
  </main>
</template>



<style lang="stylus" scoped>
main
  line-height 1.35
  max-width 60em
  font-weight lighter
  text-align center
  $px = 1em
  padding 1em $px 3.5em $px
  margin auto

:deep(.content)
  text-align initial
  > h1:first-of-type
    text-align center
    text-decoration underline double cadetblue 2px
    text-underline-offset 3px
    margin-top .25em
    margin-bottom 1em
  > p:first-of-type
    color aquamarine
  a
    text-decoration none
    font-weight normal
    color dodgerblue
    transition color .2s, text-shadow .2s
    &:hover
      color deepskyblue
    &:active
      text-shadow 0 0 2px

.header-404
  margin-bottom 1.75em
  > h1:first-child
    font-size 8em
    color mediumaquamarine
    text-shadow 0 0 6px teal
    margin 0
  > p
    line-height 1.5
    margin 0

.header-empty
  font-size clamp(1.5em, 9vw, 2em)
  margin-bottom 1em
</style>