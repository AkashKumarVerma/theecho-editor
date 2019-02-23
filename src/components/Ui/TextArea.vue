<template>
  <div class="textarea-wrapper">
    <button ref="btnBold"><i class="fas fa-bold"></i></button>
    <button ref="btnItalic"><i class="fas fa-italic"></i></button>
    <button ref="btnImage"><i class="fas fa-camera"></i></button>
    <button ref="btnLink"><i class="fas fa-link"></i></button>
    <button ref="btnDivider"><i class="fas fa-minus"></i></button>
    <button ref="btnBlockquote"><i class="fas fa-quote-right"></i></button>
    <div 
      class="textarea image image-x" 
      ref="editor"
      contenteditable="true" 
      @focus="placeholderVisible = false" 
      @blur="showPlaceholder"
      @input="update"
      v-text="initialValue"
      spellcheck="false"
    >
      <div class="textarea__placeholder" v-if="placeholderVisible">{{ placeholder }}</div>
    </div>
  </div>
</template>

<script>
import Quill from 'quill'

export default {
  name: 'TextArea',
  data() {
    return {
      placeholderVisible: true,
      value: this.intitialValue,
      quill: ''
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    initialValue: String
  },
  methods: {
    //
    // To implement placeholder functionality as setting contenteditable
    // property to true dosent provide a way to use placeholders
    // 
    // If there  is no text in the textarea then the placeholder is made visible
    // on removing focus else not.
    // 
    showPlaceholder() {
      if(this.value !== '') {
        this.placeholderVisible = true
      }
    },
    update(value) {
      // this.value = e.target.innerText
    },

    // Text Editing and Formating Methods
    textBold() {
      this.quill.format('bold', true)
    }
  },
  mounted() {
    let Inlines = Quill.import('blots/inline')
    let Blocks = Quill.import('blots/block')
    let BlockEmbed = Quill.import('blots/block/embed')

    class Bold extends Inlines {}
    Bold.blotName ='bold'
    Bold.tagName = 'strong'

    class Italic extends Inlines {}
    Italic.blotName = 'italic'
    Italic.tagName = 'em'
    
    class Link extends Inlines {
      static crate(value) {
        let node = super.create()
        node.setAtrribute('href', value)
        node.setAtrribute('target', '_blank')

        return node
      }

      static format(node) {
        return node.getAttribute('href')
      }
    }
    Link.blotName = 'link'
    Link.tagName = 'a'

    class Divider extends BlockEmbed {}
    Divider.blotName = 'divider'
    Divider.tagName = 'hr'

    class Blockquote extends Blocks {}
    Blockquote.blotName = 'blockquote'
    Blockquote.tagName = 'blockquote'

    class Header extends Blocks {
      static format(node) {
        return Header.tagName.indexOf(node.tagName)
      }
    }
    Header.blotName = 'header'
    Header.tagName = ['H1', 'H2']


    class Image extends BlockEmbed {

      static create(value) {
        let node = super.create()
        node.setAttribute('alt', value.alt)
        node.setAttribute('src', value.src)
        return node
      }

      static value(node) {
        return {
          alt: node.getAttribute('alt'),
          src: node.getAttribute('src')
        }
      }
    }

    Image.blotName = 'image'
    Image.tagName = 'img'

    Quill.register(Bold)
    Quill.register(Italic)
    Quill.register(Link)
    Quill.register(Divider)
    Quill.register(Blockquote)
    Quill.register(Header)
    Quill.register(Image)

    let quill = new Quill(this.$refs.editor)
    // let quill = new Quill(document.querySelector('.editor'))

    this.$refs.btnBold.addEventListener('click', () => {
      quill.format('bold', true)
    })

    this.$refs.btnItalic.addEventListener('click', () => {
      quill.format('italic', true)
    })

    this.$refs.btnImage.addEventListener('click', () => {
      let value = prompt('Enter link URL')
      let range = quill.getSelection(true);
      quill.insertText(range.index, '\n', Quill.sources.USER);
      quill.insertEmbed(range.index + 1, 'image', {
        alt: 'Quill Cloud',
        src: 'https://images.unsplash.com/photo-1550822436-5607d0b4e876?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80'
      }, Quill.sources.USER);
      quill.setSelection(range.index + 2, Quill.sources.SILENT);
    })

    this.$refs.btnDivider.addEventListener('click', () => {
      let range = quill.getSelection(true);
      quill.insertText(range.index, '\n', Quill.sources.USER);
      quill.insertEmbed(range.index + 1, 'divider', true, Quill.sources.USER);
      quill.setSelection(range.index + 2, Quill.sources.SILENT);
    })

    this.$refs.btnBlockquote.addEventListener('click', () => {
      quill.format('blockquote', true)
    })

    this.$refs.btnLink.addEventListener('click', () => {
      let value = prompt('Enter link URL')
      quill.format('link', value)
      // quill.format('color', 'red')
    })
  }
}
</script>

<style lang="sass">
@import '~@/assets/sass/settings'

.textarea-wrapper
  width: 100%
  height: auto
  padding: 20px

  .textarea
    max-width: 650px
    margin: 0 auto
    line-height: 25px
    font-size: 16px

    a
      height: 18px
      display: inline-block
      border-bottom: 9px solid $ColorPrimary
      cursor: pointer

    img
      display: block
      width: 100%
      height: auto
      margin: 20px auto
      background-size: contain

    &:focus,
    &:active
      outline: none

    
  
  button
    display: inline-block
    width: 30px
    background-color: $ColorBlack 
    border: none
    color: $ColorWhite
    cursor: pointer
    height: 30px

    &:focus,
    &:active
</style>


