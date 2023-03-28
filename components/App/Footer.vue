<script lang="ts" setup>
const config = useRuntimeConfig(),
      //
      route = useRoute(),
      //
      localePath = useLocalePath(),
      { t } = useI18n(),
      //
      tools = getListOfToolsPaths()
</script>



<template>
  <footer class="app-footer">

    <ul class="sitemap">
      <li>
        <h3 class="sitemap-header"><Icon name="icon-park-twotone:web-page" />{{ t("general") }}</h3>
        <ul class="sitemap-list">
          <li><NuxtLink :to="localePath('/')">{{ t("home") }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/blog')" :class="{ 'router-link-active': route.path.includes('/blog') }">{{ t("blog") }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/contributing')">{{ t("contributing") }}</NuxtLink></li>
        </ul>
      </li>

      <li v-if="tools.length">
        <h3 class="sitemap-header"><Icon name="fluent:window-dev-tools-24-filled" />{{ t("tools") }}</h3>
        <ul class="sitemap-list">
          <li v-for="tool, i in tools" :key="i">
            <NuxtLink :to="localePath(`/tools/${tool}`)">{{ t(`${tool}.title`) }}</NuxtLink>
          </li>
        </ul>
      </li>

      <li v-if="Object.keys(config.public.profiles).length">
        <h3 class="sitemap-header"><Icon name="ic:twotone-verified" />{{ t("profiles") }}</h3>
        <ul class="sitemap-list">
          <li v-for="{ icon, link }, profile in config.public.profiles" :key="profile">
            <NuxtLink :to="link" target="_blank">
              <Icon :name="icon" />{{ profile }}<Icon name="line-md:external-link" class="external-link-icon" />
            </NuxtLink>
          </li>
        </ul>
      </li>

      <li v-if="Object.keys(config.public.contact).length">
        <h3 class="sitemap-header"><Icon name="mdi:contact-mail" />{{ t("contact") }}</h3>
        <ul class="sitemap-list">
          <li v-for="{ value, link, icon }, method in config.public.contact" :key="method">
            <NuxtLink :to="link" :title="t(method)">
              <Icon :name="icon" />{{ value }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>


    <hr class="separator" />


    <p class="copyright">Copyright © <time>{{ new Date().getFullYear() }}</time> <strong>HandyVoid</strong></p>

  </footer>
</template>



<style lang="stylus" scoped>
.app-footer
  position relative
  background rgba(0, 10, 15, .75)
  $px = 1em
  padding 2em $px 1em $px
  box-shadow 0 0 3px teal
  margin-top auto

.sitemap
  list-style none
  display flex
  flex-wrap wrap
  align-items flex-start
  gap 1.5em 3em
  max-width max-content
  padding 0
  margin auto

.sitemap-header
  margin-top 0
  margin-bottom .5em
  > .icon
    color powderblue
    vertical-align text-top
    margin-right .3em

.sitemap-list
  list-style none
  padding 0
  > li
    font-size 90%
    margin-top .5em
    > a
      text-decoration none
      display inline-flex
      align-items flex-end
      gap .2em
      color cadetblue
      transition color .15s, text-shadow .15s
      &:hover
        text-decoration underline
        color lightseagreen
      &:active
        text-shadow 0 0 3px
        color rgb(40, 190, 175)
      &.router-link-active
        color mediumaquamarine
        &:hover
          color aquamarine
      > .icon
        font-size 1.25em

.external-link-icon
  margin-left .2em

.separator
  border-color rgb(20, 80, 80)
  box-shadow 0 0 3px darkslategray
  margin 2em 0

.copyright
  font-weight lighter
  text-align center
  color rgb(150, 200, 200)
</style>