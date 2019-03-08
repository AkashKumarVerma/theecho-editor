<template>
  <div class="editor">
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
        <text-area holder="Title" initialValue="title" v-model="articleTitle"/>
      </div>
      <div class="article__subtitle">
        <text-area holder="Subtitle" initialValue="subtitle" v-model="articleSubtitle"/>
      </div>
      <div class="article__content">
        <text-area holder="Your Story" initialValue="article" v-model="articleBody"/>
      </div>
    </div>
    <modal @close="visible = false" v-if="visible">
      <image-upload @selected="setPoster"/>
    </modal>
  </div>
</template>

<script>
import { TextArea, Btn } from '@/components/Ui'
import { ArticleController } from '@/controllers'
import { EventBus, Events } from '@/services/event.service'
import ImageUpload from '@/components/ImageUpload'
import Modal from '@/components/Ui/Modal'

export default {
  name: 'Editor',
  data() {
    return {
      articlePoster: '',
      articleTitle: '',
      articleSubtitle: '',
      articleBody: '',
      visible: false,
      posterPreview: ''
    }
  },
  components: {
    TextArea,
    Btn,
    ImageUpload,
    Modal
  },
  methods: {
    saveArticleToDraft() {
      const article = {
        title: this.articleTitle,
        subtitle: this.articleSubtitle,
        body: this.articleBody
      }
      
      ArticleController.saveArticles(article)
        .then((res) => {
          console.log(res)
        }).catch( err => {
          console.log(err)
        })
    },
    setPoster(poster) {
      this.visible = false
      this.posterPreview = poster.data
    }
  },
  mounted() {
    EventBus.$on(Events.SAVE_DRAFT, () => {
      this.saveArticleToDraft()
    })
    EventBus.$on(Events.RESET_EDITOR, () => {
      this.articleTitle = ''
      this.articleSubtitle = ''
      this.articleBody = ''
      this.posterPreview = ''
      this.articlePoster = ''
    })
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

  .button-save
    position: absolute
    left: 60px
    z-index: 999

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

