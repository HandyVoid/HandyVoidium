<script lang="ts" setup>
const config = useRuntimeConfig()
</script>



<template>
  <footer class="app-footer">
    <p class="copyright">© <NuxtLink to="https://github.com/HandyVoid" target="_blank">HandyVoid</NuxtLink></p>
    <p class="contact-mail"><NuxtLink :to="`mailto:${config.public.contactMail}`">{{ config.public.contactMail }}</NuxtLink></p>
  </footer>
</template>



<style lang="stylus" scoped>
.app-footer
  color gainsboro
  background rgba(0, 10, 20, .6)
  text-align center
  padding 1em
  box-shadow 0 0 1px white
  margin-top auto
  a
    color silver
    text-decoration none
    transition .15s
    &:hover
      color gainsboro
      text-decoration underline
    &:active
      color white
      text-shadow 0 0 4px

.contact-mail
  font-size .8em
  margin-top .5em
  margin-bottom 0

.copyright
  margin 0
</style>