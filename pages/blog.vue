<script lang="ts" setup>
const { t } = useI18n()
</script>



<template>
  <main>
    <hgroup class="header-group">
      <h1>{{ t("blog") }}</h1>
      <p>Welcome to our blog!</p>
    </hgroup>

    <section>
      <ContentList />
    </section>
  </main>
</template>



<style lang="stylus" scoped>
main
  $mx = 1em
  padding 0 $mx 3em $mx

.header-group
  text-align center
  margin-top 2em
  > h1:first-child
    text-decoration underline double cadetblue 2px
    text-underline-offset 3px
    margin-bottom 0
  > p
    line-height 1.35
    color rgb(220, 245, 245)
    font-weight lighter
    font-size .85em
</style>