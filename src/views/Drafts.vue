<template>
  <div class="drafts">
    <div class="drafts--header">
      <span class="page-label"> Your Drafts </span>
      <span class="draft-count">Total Drafts: {{ drafts.length }}</span>
    </div>
    <draft-card
      v-for="(id, index) in drafts" 
      :key="index"
      :id="id"
    />
  </div>
</template>

<script>
import { DraftController } from '@/controllers'
import DraftCard from '@/components/DraftCard'

export default {
  name: 'Drafts',
  data() {
    return {
      drafts: this.$store.state.user.drafts
    }
  },
  components:{ DraftCard },
}
</script>

<style lang="sass" scoped>
.drafts
  padding: 20px
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: space-around

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

  .draft-card
    max-width: 80%
</style>

