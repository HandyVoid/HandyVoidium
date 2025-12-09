<script lang="ts" setup>
defineProps<{
  error: Error & {
    statusCode: number
  }
}>()
</script>



<template>
  <NuxtLayout>
    <main>
      <hgroup class="header-group-error">
        <h1>Error <mark>{{ error.statusCode }}</mark></h1>
        <p>{{ error.message }}</p>
      </hgroup>
      <ActionReturnHome />
    </main>
  </NuxtLayout>
</template>



<style lang="stylus" scoped>
main
  flex 1
  display flex
  flex-direction column
  align-items center
  justify-content center
  text-align center
  overflow-wrap anywhere
  $mx = 1em
  margin 2em $mx 4em $mx

.header-group-error
  margin-bottom .5em
  > h1
    font-size clamp(2em, 16vw, 4em)
    margin 0
    > mark
      color mediumaquamarine
      background none
      text-shadow 0 0 6px teal
  > p
    font-weight lighter
    margin-top .5em
</style>