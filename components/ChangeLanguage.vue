<script setup>
const { locale, locales } = useI18n(),
      switchLocalePath = useSwitchLocalePath()
</script>



<template>
  <div id="change-language-container">
    <!-- Input Search Language -->
    <NuxtLink v-for="{ code } in locales" :key="code" :to="switchLocalePath(code)" >
      {{ code.toUpperCase() }}
    </NuxtLink>
  </div>
</template>




<style lang="stylus" scoped>
#change-language-container
  display flex
  flex-wrap wrap
  align-items center
  gap .5em
  margin-left auto
  a
    color white
    &:not(.router-link-active)
      text-decoration none
</style>