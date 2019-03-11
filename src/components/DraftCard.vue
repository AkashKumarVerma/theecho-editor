<template>
  <div class="draft-card">
    <h2 class="draft-card__title" v-html="title.html" />
    <span class="draft-card__subtitle" v-html="subtitle.html" />
  </div>
</template>

<script>
export default {
  name: 'DraftCard',
  props: {
    title: Object,
    subtitle: Object
  }
}
</script>

<style lang="sass" scoped>
.draft-card
  width: 100%
  max-width: 500px
  height: auto
  background-color: $ColorWhite
  padding: 20px
  margin: 10px 0

  h2
    font-size: 32px
    color: $TextColorPrimary
    font-weight: $FontBold

  &__subtitle
    font-size: 16px
    text-align: justify
</style>