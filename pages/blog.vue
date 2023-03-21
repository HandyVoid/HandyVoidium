<script lang="ts" setup>
const { locale, t } = useI18n(),
      localePath = useLocalePath()
</script>



<template>
  <main>
    <hgroup class="header-group">
      <h1>{{ t("blog") }}</h1>
      <p>{{ t("blog-page.description") }}</p>
    </hgroup>

    <section class="posts">
      <ContentList :path="localePath('/blog')" v-slot="{ list }">
        <article v-for="article in list" :key="article._path">
          <h2><NuxtLink :to="article._path">{{ article.title }}</NuxtLink></h2>
          <p class="date"><time :datetime="article.date">{{ new Date(article.date).toLocaleDateString(locale, { weekday: "long", year: "numeric", month: "long", day: "numeric" }) }}</time></p>
          <p>{{ article.description }}</p>
          <NuxtLink :to="article._path" class="read-more-link">{{ t("read-more") }}<Icon name="ph:arrow-fat-right-duotone" /></NuxtLink>
        </article>
      </ContentList>
    </section>
  </main>
</template>



<style lang="stylus" scoped>
$page-mx = 1em

main
  line-height 1.3
  margin 0 $page-mx 3.5em $page-mx

.header-group
  text-align center
  margin-top 2em
  > h1:first-child
    text-decoration underline double cadetblue 2px
    text-underline-offset 3px
    margin-bottom 0
  > p
    line-height 1.35
    color rgb(220, 245, 245)
    font-weight lighter
    font-size .85em

.posts
  display grid
  justify-content center
  $mx = -($page-mx)
  margin 1.25em $mx 0 $mx
  > article
    background rgba(0, 5, 10, .6)
    padding 1em
    box-shadow 0 0 4px teal
    > h2
      font-size 1.5em
      margin 0
      > a
        color inherit
        transition text-shadow .2s
        &:active
          text-shadow 0 0 6px
    a
      text-decoration none

.date
  font-weight lighter
  font-size .75em
  color gainsboro

.read-more-link
  display inline-block
  color steelblue
  $px = .5em
  padding .3em $px
  margin-left -($px)
  border-radius 6px
  transition color .2s, background .2s
  &:hover
    background rgba(50, 70, 90, .5)
  &:active
    color cornflowerblue
    background rgba(70, 90, 110, .6)
  > .icon:last-child
    margin-left .3em
</style>