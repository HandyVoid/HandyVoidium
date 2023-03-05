<script setup>
defineProps({
  error: Object
})

const { t } = useI18n()
</script>



<template>
  <NuxtLayout>
    <main>

      <hgroup>
        <h1 class="title-error">Error: {{ error.statusCode }}</h1>

        <p>{{ error.message }}</p>
      </hgroup>


      <NuxtLink to="/" class="return-home-button">
        <Icon name="ion:home" />{{ t("return-home") }}
      </NuxtLink>

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
  margin 1.5em $mx 4em $mx

.title-error
  font-size clamp(2em, 14vw, 4em)
  margin 0

.return-home-button
  display inline-flex
  gap .3em
  text-decoration none
  color gainsboro
  background rgba(0, 10, 20, .5)
  font-size clamp(1.4em, 8vw, 1.5em)
  padding .5em .75em
  border-radius .75em
  margin-top .5em
  transition color .2s, background .2s, box-shadow .2s
  &:hover
    color white
    background rgba(15, 20, 25, .5)
    box-shadow 0 0 4px cadetblue
  &:active
    box-shadow 0 0 6px 2px cadetblue
</style>