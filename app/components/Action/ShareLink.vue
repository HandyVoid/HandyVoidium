<script lang="ts" setup>
const canShare = computed(() => "canShare" in navigator),
      { t } = useI18n()


function shareLink() {
  if (canShare.value) {
    navigator.share({
      title: document.title,
      url: window.location.origin + window.location.pathname
    })
  }
}
</script>



<template>
  <ClientOnly>
    <button v-if="canShare" @click="shareLink" :title="t('share')" type="button" class="share-button">
      <Icon name="ph:share-network-duotone" />{{ t("share") }}
    </button>
  </ClientOnly>
</template>



<style lang="stylus" scoped>
.share-button
  font inherit
  background none
  padding .4em
  border none
  border-radius .5em
  transition background .15s, box-shadow .15s
  &:enabled
    color lightcyan
    cursor pointer
    &:hover
      background rgb(50, 70, 80)
    &:active
      background rgb(60, 80, 95)
      box-shadow 0 0 4px teal
  > .iconify
    font-size 1.5em
    vertical-align sub
    margin-right .25rem
</style>