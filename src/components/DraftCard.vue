<template>
  <div class="draft-card">
    <h2 class="draft-card__title" v-html="title.html" />
    <span class="draft-card__subtitle" v-html="subtitle.html" />
    <div class="draft-card__controls">
      <btn @click="editDraft" size="small" type="solid" color="primary">EDIT</btn>
      <btn @click="deleteDraft" size="small" type="solid" color="accent">DELETE</btn>
    </div>
  </div>
</template>

<script>
import { Btn } from '@/components/Ui'

export default {
  name: 'DraftCard',
  components: {
    Btn
  },
  props: {
    title: Object,
    subtitle: Object,
    id: String
  },
  methods: {
    editDraft() {
      this.$router.push({
        name: 'editor',
        params: {
          draftId: this.id
        }
      })
    },
    deleteDraft() {
    }
  },
  mounted() {
  }
}
</script>

<style lang="sass" scoped>
.draft-card
  width: 100%
  max-width: 500px
  min-height: 250px
  background-color: #FAFAFA
  padding: 30px
  margin: 10px 0
  transition: all 0.14s ease-in-out
  position: relative
  &:hover
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08)
    transform: scale(1.01)

  h2
    font-size: 32px
    line-height: 32px
    color: $TextColorPrimary
    font-weight: $FontBold

  &__subtitle
    font-size: 14px
    line-height: 18px
    text-align: justify

  &__controls
    position: absolute
    bottom: 10px
    right: 20px
</style>