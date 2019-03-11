<template>
  <div class="drafts">
    <draft-card v-for="(draft, index) in drafts" :title="draft.title" :subtitle="draft.subtitle"/>
  </div>
</template>

<script>
import { ArticleController } from '@/controllers'
import DraftCard from '@/components/DraftCard'

export default {
  name: 'Drafts',
  data() {
    return {
      title: '',
      subtitle: '',
      drafts: []
    }
  },
  components:{
    DraftCard
  },
  mounted() {
    const requiredDrafts = this.$store.state.user.drafts
    requiredDrafts.forEach( draft => {
      ArticleController.getDraftById(draft)
        .then((res) => {
          this.drafts.push(res)
        }).catch((err) => {
          console.log(err)
        })
    })
  }
}
</script>

<style lang="sass" scoped>
.drafts
  padding: 20px
  display: flex
  flex-direction: row
  flex-wrap: wrap

  .draft-card
    max-width: 33%
</style>

