<script setup>
defineProps({
  error: Object
})

const { t } = useI18n()
</script>



<template>
  <NuxtLayout>
    <main>
      <h1>Error: {{ error.statusCode }}</h1>
      <p>{{ error.message }}</p>
      <NuxtLink to="/" id="return-home-button">
        <Icon name="ion:home" />{{ t("return home") }}
      </NuxtLink>
    </main>
  </NuxtLayout>
</template>



<style lang="stylus" scoped>
main
  text-align center
  font-size clamp(1em, 6vw, 1.5em)
  overflow-wrap anywhere
  $m = 1em
  margin $m $m 2em $m

#return-home-button
  display inline-flex
  gap .3em
  text-decoration none
  color gainsboro
  background rgba(0, 10, 20, .5)
  padding .5em .75em
  border-radius .75em
  margin-top 1em
  transition color .2s, background .2s, box-shadow .2s
  &:hover
    color white
    background rgba(10, 15, 20, .5)
    box-shadow 0 0 4px cadetblue
  &:active
    box-shadow 0 0 6px 2px cadetblue
</style>