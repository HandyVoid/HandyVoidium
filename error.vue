<script setup>
defineProps({
  error: Object
})
</script>



<template>
  <NuxtLayout>
    <main>
      <h1>Error: {{ error.statusCode }}</h1>
      <p>{{ error.message }}</p>
      <NuxtLink to="/" id="return-home-button">
        <Icon name="ion:home" />Return Home
      </NuxtLink>
    </main>
  </NuxtLayout>
</template>



<style lang="stylus" scoped>
main
  text-align center
  overflow-wrap anywhere
  margin 1em

#return-home-button
  display inline-flex
  gap .3em
  text-decoration none
  margin-top 1em
</style>