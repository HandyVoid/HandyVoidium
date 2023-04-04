<script lang="ts" setup>
const { t } = useI18n()
</script>



<template>
  <main>
    <ContentDoc class="content" el="article">

      
      <template #not-found>
        <Head>
          <Title>404</Title>
        </Head>

        <hgroup class="header-404">
          <h1>404</h1>
          <p>{{ t("page-404.not-found") }}</p>
        </hgroup>

        <ActionReturnHome />
      </template>


      <template #empty>
        <h1 class="header-empty">{{ t("page-empty") }}</h1>

        <ActionReturnHome />
      </template>


    </ContentDoc>
  </main>
</template>



<style lang="stylus" scoped>
main
  max-width 70em
  font-weight lighter
  text-align center
  $px = 1em
  padding 1em $px 3.5em $px
  margin auto

:deep(.content)
  text-align initial
  line-height 1.5
  > h1:first-of-type
    line-height 1.35
    text-align center
    text-decoration underline double cadetblue 2px
    text-underline-offset 3px
    margin-top .25em
    margin-bottom .75em
  > p:first-of-type
    color aquamarine
  > h2, > h3, > h4
    scroll-margin-top calc(1.5rem + 1.5em)
    > a
      position relative
      font-weight bolder
      color lightseagreen
      &::before
        content ""
        position absolute
        background mediumaquamarine
        right 0
        bottom 0
        left 0
        transform scaleX(0)
        transform-origin right
        height 2px
        background mediumturquoise
        border-radius 2px
        transition transform .2s
      &::after
        content "#"
        position absolute
        right -1em
        color teal
        opacity 0
        transition opacity .2s
      &:hover
        text-decoration none
        color mediumaquamarine
        &::after
          opacity 1
      &:active
        color mediumaquamarine
        &::before
          transform scaleX(1)
          transform-origin left
  > ul
    padding-left 1.25em
    > li
      &::marker
        color cadetblue
      &:not(:first-child)
        margin-top .5em
  a
    text-decoration none
    font-weight normal
    color dodgerblue
    transition color .2s
    &:hover
      text-decoration underline
      color deepskyblue
    &:active
      color lightskyblue

.header-404
  margin-top .75em
  margin-bottom 2em
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