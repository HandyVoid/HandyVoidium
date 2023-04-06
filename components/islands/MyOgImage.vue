<script lang="ts" setup>
defineProps<{
  title: string
  description: string
}>()


const config = useRuntimeConfig()
</script>



<!-- Link and Mouse effects don't work on images, of course. It's just for decoration ¯\_(ツ)_/¯ -->
<template>
  <article class="w-full h-full text-slate-200 bg-teal-900">

    <header class="flex items-center absolute top-0 inset-x-0 bg-gray-900 shadow shadow-slate-900 pr-12 pl-6 py-4">
      <img src="/icon.svg" alt="logo" width="64" height="64" />
      
      <span class="text-5xl ml-5">{{ config.public.siteName }}</span>

      
      <ul class="list-none flex flex-col my-0 ml-auto">
        <li>
          <NuxtLink to="https://handyvoid.com" target="_blank" class="no-underline font-mono text-slate-300 hover:underline active:text-white transition"><Icon name="streamline:programming-web-server-world-internet-earth-www-globe-worldwide-web-network" size="1.25em" class="mr-2" />handyvoid.com</NuxtLink>
        </li>
        <li class="mt-3.5">
          <NuxtLink :to="config.public.repository" target="_blank" class="no-underline font-mono text-slate-300 hover:underline active:text-white transition"><Icon name="tabler:brand-github" size="1.25em" class="mr-2" />{{ config.public.repository.replace(/https:\/\/|\.git/g, "") }}</NuxtLink>
        </li>
      </ul>
    </header>


    <section v-if="title || description" class="flex flex-col items-center justify-center text-center h-full px-8 pb-5">

      <h1 v-if="title" class="text-6xl mb-6">{{ title }}</h1>

      <p v-if="description" class="text-3xl text-slate-300 leading-relaxed">{{ description }}</p>

    </section>

  </article>
</template>