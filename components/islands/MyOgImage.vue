<script lang="ts" setup>
defineProps<{
  title: string
  description: string
}>()


const config = useRuntimeConfig()
</script>



<!-- Link and Mouse effects don't work on images, of course. It's just for decoration ¯\_(ツ)_/¯ -->
<template>
  <article class="w-full h-full text-slate-200 bg-gradient-to-br from-teal-950 to-cyan-950">

    <header class="flex items-center gap-8 absolute top-0 inset-x-0 bg-slate-950/50 shadow-md shadow-slate-950">
      <NuxtLink :to="config.public.repository" target="_blank" class="no-underline flex items-center gap-6 text-slate-200 px-6 py-4 hover:bg-slate-950/30 active:hover:bg-slate-950/50 transition">
        <img src="/icon.svg" alt="logo" width="64" height="64" />
        <span class="text-5xl">{{ config.public.siteName }}</span>
      </NuxtLink>

      <ul class="list-none ms-auto me-12">
        <li>
          <NuxtLink to="https://handyvoid.com" target="_blank" class="no-underline font-mono text-slate-300 hover:underline active:text-white transition"><Icon name="streamline:programming-web-server-world-internet-earth-www-globe-worldwide-web-network" class="text-xl mr-2.5" />handyvoid.com</NuxtLink>
        </li>
        <li class="mt-3">
          <NuxtLink :to="config.public.repository" target="_blank" class="no-underline font-mono text-slate-300 hover:underline active:text-white transition"><Icon name="tabler:brand-github" class="text-xl mr-2.5" />{{ config.public.repository.replace(/https:\/\/|\.git/g, "") }}</NuxtLink>
        </li>
      </ul>
    </header>


    <section v-if="title || description" class="flex flex-col items-center justify-center gap-4 text-center h-full px-8 pb-10">

      <h1 v-if="title" class="text-6xl underline underline-offset-8 decoration-double decoration-teal-600">{{ title }}</h1>

      <p v-if="description" class="text-3xl text-slate-300 leading-loose">{{ description }}</p>

    </section>

  </article>
</template>