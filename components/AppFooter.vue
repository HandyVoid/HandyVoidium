<template>
  <footer id="app-footer">
    <p id="copyright">© <NuxtLink to="https://ssbit01.github.io/" target="_blank">Stefan Samson (SSbit01)</NuxtLink></p>
  </footer>
</template>



<style lang="stylus" scoped>
#app-footer
  color gainsboro
  background rgb(0, 10, 20)
  padding 1em
  margin-top auto

#copyright
  margin 0
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
</style>