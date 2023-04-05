<template>
  <section class="description">
    <slot></slot>

    <ActionShareLink />
  </section>
</template>



<style lang="stylus" scoped>
.description
  line-height 1.5
  font-weight lighter
  color aquamarine
  background rgba(0, 5, 10, .5)
  max-width 75em
  $px = 1em
  padding 1em $px 2em $px
  box-shadow 0 0 3px teal
  margin initial -1em
  > :not(:first-child)
    margin-top 1em

:deep(p)
  margin 0

:deep(mark)
  color paleturquoise
  font-weight bold
  background none

:deep(ul)
  color turquoise
  padding-left 1.25em
  margin 0
  > li
    margin-top .4em
    &::marker
      color teal
    ul li
      margin-top 0
</style>