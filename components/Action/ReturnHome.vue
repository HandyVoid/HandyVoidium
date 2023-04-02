<script lang="ts" setup>
const { t } = useI18n(),
      localePath = useLocalePath()
</script>



<template>
  <NuxtLink :to="localePath('/')" class="return-home-button">
    <Icon name="ion:home" />{{ t("return-home") }}
  </NuxtLink>
</template>



<style lang="stylus">
.return-home-button
  text-decoration none
  color gainsboro
  background rgba(0, 10, 20, .5)
  font-size clamp(1.4em, 8vw, 1.5em)
  padding .5em .75em
  border-radius .75em
  transition color .2s, background .2s, box-shadow .2s
  &:hover
    color white
    background rgba(15, 20, 25, .5)
    box-shadow 0 0 4px cadetblue
  &:active
    box-shadow 0 0 6px 2px cadetblue
  > .icon:first-child
    font-size 1.25em
    vertical-align sub
    margin-right .3em
</style>