<template>
  <div class="editor">
    <div class="editor-navbar">
      <btn @click="reset" class="button-reset" icon="circle-notch" type="solid" color="secondary" size="medium">RESET EDITOR</btn>
      <btn @click="saveDraft" class="button-save-draft" icon="file-signature" type="solid" color="accent" size="medium">SAVE AS DRAFT</btn>
      <btn @click="saveArticle" class="button-save" icon="file-signature" type="solid" color="primary" size="medium">SUBMIT</btn>
    </div>
    <div v-if="articlePoster === ''" class="article__poster">
      <div class="poster-form__head">
        <span class="poster-form__header">Select Poster For Your Article</span>
        <i v-if="posterPreview === ''" @click="visible = true" class="fas fa-plus"></i>
        <btn v-if="posterPreview === ''" @click="articlePoster = 'skipped'" type="solid" size="medium" color="primary" >ADD LATER</btn>
      </div>
      <div v-if="posterPreview !== ''" class="poster-preview">
        <img :src="posterPreview" alt="">
      </div>
      <div class="poster-controls" v-if="posterPreview !== ''" >
        <btn @click="posterPreview = ''" type="solid" size="medium" color="secondary" >CANCEL</btn>
        <btn @click="articlePoster = posterPreview" type="solid" size="medium" color="primary" >SAVE</btn>
      </div>
    </div>

    <div v-else class="editor-input">
      <div class="article__title">
        <text-area holder="Title" :initialValue="draftTitle" v-model="articleTitle"/>
      </div>
      <div class="article__subtitle">
        <text-area holder="Subtitle" :initialValue="draftSubtitle" v-model="articleSubtitle"/>
      </div>
      <div class="article__content">
        <text-area holder="Your Story" :initialValue="draftBody" v-model="articleBody"/>
      </div>
    </div>

    <modal @close="visible = false" v-if="visible">
      <image-upload @selected="setPoster"/>
    </modal>
    <spinner :visibility="saving"/>
  </div>
</template>

<script>
import { TextArea, Btn, Spinner } from '@/components/Ui'
import { ArticleController, DraftController } from '@/controllers'
import { EventBus, Events } from '@/services/event.service'
import ImageUpload from '@/components/ImageUpload'
import Modal from '@/components/Ui/Modal'

export default {
  name: 'Editor', 
  data() {
    return {
      draftTitle: {},
      draftSubtitle: {},
      draftBody: {},
      articlePoster: '',
      articleTitle: {},
      articleSubtitle: {},
      articleBody: {},
      visible: false,
      posterPreview: '',
      saving: false,
      draftId: ''
    }
  },
  components: {
    TextArea,
    Spinner,
    Btn,
    ImageUpload,
    Modal
  },
  methods: {
    saveArticle() {

    },
    saveDraft() {
      console.log('saveDraft Fired')
      this.saving = true
      const draft = {
        title: this.articleTitle,
        subtitle: this.articleSubtitle,
        body: this.articleBody,
        poster: this.articlePoster
      }

      DraftController.saveDraft(draft)
        .then((res) => {
          this.saving = false
        }).catch( err => {
          this.saving = false
        })
    },

    setPoster(poster) {
      this.visible = false
      if(poster.type === 'URL') {
        this.posterPreview = poster.url
      } else {
        this.posterPreview = poster.file
      }
    },

    reset() {
      this.articleTitle = ''
      this.articleSubtitle = ''
      this.articleBody = ''
      this.posterPreview = ''
      this.articlePoster = ''
    },

    /**
     * Loads draft in the editor for editing putposes.
     * 
     */
    loadDraft() {
      this.saving = true
      DraftController.getDraft(this.draftId)
        .then((res) => {
					console.log('TCL: loadDraft -> res', res)
          this.saving = false
          this.draftTitle = res.title
          this.draftSubtitle = res.subtitle
          this.draftBody = res.body,
          this.posterPreview = res.poster
        }).catch((err) => {
          console.log(err)
        })
    }

  },

  mounted() {
    EventBus.$on(Events.SAVE_DRAFT, () => {
      this.saveArticleToDraft      
    })
    EventBus.$on(Events.RESET_EDITOR, this.reset)

    const draftId = this.$route.params.draftId

    if(draftId) {
      this.draftId = draftId
      this.loadDraft()
    }
  }
}
</script>

<style lang="sass">
.editor
  width: 100%
  font-family: Montserrat
  color: #1C1C1C
  position: relative
  color: $ColorBlack
  
  &-navbar
    position: fixed
    top: 0
    left: 50px
    width: 70%
    background-color: $ColorWhite
    z-index: 9999999999

    .button-save
      float: right
    
  .ui__spinner--wrapper
    height: calc(100vh - 100px)
  .article__poster
    min-height: calc(100vh - 200px)
    display: flex
    flex-direction: column
    justify-content: center
    font-size: 32px
    font-weight: $FontBold
    text-align: center
    padding: 50px 0

    .poster-form__header
      display: block
      margin-bottom: 50px
      & + i
        border-radius: 50%
        display: block
        margin: 50px auto
        cursor: pointer
        width: 70px
        height: 70px
        line-height: 63px
        border: 4px solid $ColorGreyLight
        color: $ColorGreyLight
        transition: all 0.14s ease

        &:hover
          border: 4px solid darken($ColorGreyLight, 10)
          color: darken($ColorGreyLight, 10)
    .poster-preview
      width: 50%
      margin: 0 auto
      img
        disply: block
        width: 100%
        height: auto
        margin: 0 auto
        background-size: contain



  &-input
    width: 100%
    height: auto
    min-height: 50px
    display: flex
    flex-direction: column
    flex-wrap: no-wrap
    items-align: middle

  .article__content,
  .article__subtitle,
  .article__title
    margin: 0 auto
    height: auto

  .article__title
    width: 80%
    font-size: 42px
    font-family: $FontSpecial
    font-weight: 700
    line-height: 45px
    margin-bottom: 50px
    text-align: center

  .article__subtitle
    width: 60%
    font-size: 18px
    margin-bottom: 50px
    font-weight: 500
    line-height: 25px
    font-family: Montserrat
    text-align: center

  .article__content
    width: 60%
    max-width: 650px
    text-align: center
    font-size: 16px
    line-height: 25px
    font-family: Montserrat
    font-weight: 400
    text-align: left
</style>

