<template>
  <div class="te-imageupload">
    <span v-if="selectedMethod !== ''" class="te-imageupload__back" @click="selectedMethod = ''">
      <icon name="arrow-left" />
    </span>
    <div v-if="selectedMethod === ''" class="upload-option">
      <div class="upload-option__url" @click="selectedMethod = 'url'">
        <icon size="large" name="link" />
        Image URL
      </div>
      OR
      <div class="upload-option__file" @click="selectedMethod = 'file'">
        <icon size="large" name="image" />
        Upload Image
      </div>
    </div>

    <div v-if="selectedMethod === 'url'" class="upload-methods__url">
      <span class="url-header">Enter Image URL</span>
      <textbox v-model="imageUrl" />
      <span class="url-add">
        <btn @click="saveUrl" type="solid" color="primary" size="medium" fluid>ADD IMAGE</btn>
      </span>
    </div>
    <div v-if="selectedMethod === 'file'" class="upload-methods__file">
      <input type="file" @change="getFile">
    </div>
  </div>
</template>

<script>
import Textbox from '@/components/Ui/Textbox'
import Icon from '@/components/Ui/Icon'
import Btn from '@/components/Ui/Btn'

export default {
  name: 'ImageUpload',
  data() {
    return {
      selectedMethod: '',
      imageUrl: ''
    }
  },
  components: {
    Icon,
    Btn,
    Textbox
  },
  methods: {
    saveUrl() {
      if(this.url !== '') {
        this.selectedMethod = ''
        this.$emit('selected', {
          type: 'URL',
          url: this.imageUrl
        })
      }
    },
    getFile(event) {
      const reader = new FileReader()
      const file   = event.target.files[0]

      reader.onloadend = () => {
        this.$emit('selected', {
          type: 'file',
          data: reader.result
        })
      }

      if(file) {
        reader.readAsDataURL(file)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.te-imageupload
  position: relative
  width: 500px
  min-height: 40px
  text-align: center

  &__back
    display: block
    height: 20px
    cursor: pointer
    line-height: 20px
    position: absolute
    right: 10px
    top: 0

    .te-icon
      line-height: 20px

  .upload-option
    width: 100%
    display: flex
    flex-direction: column
    justify-content: center
    font-family: $FontPrimary
    font-size: 32px
    color: $TextColorSecondary

    &__file,
    &__url
      width: 100%
      height: 100px
      line-height: 100px
      font-size: 26px
      color: $TextColorPrimary
      margin: 10px 0
      cursor: pointer
      border-radius: 2px
      .te-icon
        margin-right: 10px
        color: $TextColorAccent
      &:hover
        background-color: $ColorBlack
        color: $ColorWhite

  .upload-methods__url
    width: 100%
    height: auto
    .url-header
      font-family: $FontPrimary
      font-size: 32px
      line-height: 40px
      display: block
      margin-bottom: 30px
      font-weight: $FontLight
    .url-add
      display: block
      padding: 10px 0
</style>