<template>
  <div class="articles">
    <div class="articles--header">
      <span class="page-label"> Your Articles</span>
      <span class="article-count">Total Articles: {{ articles.length }}</span>
    </div>
    <draft-card
      v-for="(article, index) in articles" 
      :key="index"
      :id="article" />
  </div>
</template>

<script>
import DraftCard from '@/components/DraftCard'

export default {
  name: 'Articles',
  data() {
    return {
      articles: this.$store.state.user.articles
    }
  },
  components: {
    DraftCard
  }
}
</script>

<style lang="sass" scoped>
.articles
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: center
  &--header
    width: 100%
    padding: 20px 0 50px 0
    text-align: center

    span
      display: block

    .page-label
      font-family: 'Playfair Display'
      font-weight: 700
      font-size: 52px

    .article-count
      font-size: 16px

  .draft-card
    max-width: 80%
</style>

