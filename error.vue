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
      <NuxtLink to="/">Return Home</NuxtLink>
    </main>
  </NuxtLayout>
</template>



<style lang="stylus" scoped>
main
  text-align center
  overflow-wrap anywhere
  margin 1em
</style>