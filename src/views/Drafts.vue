<template>
  <div class="drafts">
    <draft-card v-for="(draft, index) in drafts" 
      :id="draft.id"
      :title="draft.title" 
      :subtitle="draft.subtitle"
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
      title: '',
      subtitle: '',
      draftId : [],
      drafts: []
    }
  },
  components:{
    DraftCard
  },
  mounted() {
    const requiredDrafts = this.$store.state.user.drafts
    requiredDrafts.forEach( id => {
      DraftController.getDraftSkeleton(id)
        .then((res) => {
          if (!this.draftId.includes(res.draft.id)) {
            this.draftId.push(res.draft.id)
            this.drafts.push(res.draft)
          }
        }).catch((err) => {

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
  justify-content: space-around

  .draft-card
    max-width: 80%
</style>

