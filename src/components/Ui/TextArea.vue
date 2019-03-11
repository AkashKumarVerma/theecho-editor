<template>
  <div class="te-editor">
    <editor-menu-bar :editor="editor">
      <div
        class="menubar is-hidden"
        :class="{ 'is-focused': focused }"
        slot-scope="{ commands, isActive, focused }"
      >

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <icon name="paragraph" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          <icon alt="H1" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          <icon alt="H2" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          <icon alt="H3" />
        </button>
        
        <button
          class="menubar__button"
          @click="showImagePrompt(commands.image)"
        >
          <icon name="image" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <icon alt="ul" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <icon alt="ol" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <icon name="quote-right" />
        </button>
      </div>
    </editor-menu-bar>
    <editor-menu-bubble :editor="editor">
      <div
        slot-scope="{ commands, isActive, getMarkAttrs, menu }"
        class="menububble"
        :class="{ 'is-active': menu.isActive }"
        :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
      >

        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <icon name="bold" />
        </button>
        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <icon name="italic" />
        </button>
        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <icon name="underline" />
        </button>
        <button
          class="menububble__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <icon name="strikethrough" />
        </button>
        
        <form class="menububble__form" v-if="linkMenuIsActive" @submit.prevent="setLinkUrl(commands.link, linkUrl)">
          <input class="menububble__input" type="text" v-model="linkUrl" placeholder="https://" ref="linkInput" @keydown.esc="hideLinkMenu"/>
          <button class="menububble__button" @click="setLinkUrl(commands.link, null)" type="button">
            <icon name="remove" />
          </button>
        </form>

        <template v-else>
          <button
            class="menububble__button"
            @click="showLinkMenu(getMarkAttrs('link'))"
            :class="{ 'is-active': isActive.link() }"
          >
            <icon name="link" />
          </button>
        </template>
      </div>
    </editor-menu-bubble>

    <editor-content spellcheck="false" class="editor__content" :editor="editor" />


    <modal v-if="visible" @close="visible = false">
      <image-upload @selected="setImage"/>
    </modal>
  </div>
</template>

<script>
import Icon from '@/components/Ui/Icon'
import Modal from '@/components/Ui/Modal'
import Textbox from '@/components/Ui/Textbox'
import ImageUpload from '@/components/ImageUpload'
import { Editor, EditorContent, EditorMenuBubble, EditorMenuBar  } from 'tiptap'
import {
  Blockquote,
  BulletList,
  Heading,
  ListItem,
  OrderedList,
  Bold,
  Image,
  Italic,
  Link,
  Underline,
  History,
  Placeholder,
  Strike,
} from 'tiptap-extensions'

export default {
  name: 'Editor',
  components: {
    EditorContent,
    EditorMenuBubble,
    EditorMenuBar,
    Modal,
    Textbox,
    Icon,
    ImageUpload
  },

  props: {
    holder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new Bold(),
          new Image(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History(),
          new Placeholder({
            emptyClass: 'is-empty',
            emptyNodeText: this.holder,
            showOnlyWhenEditable: true
          })
        ],
        content: '',
        onUpdate: ({ getJSON, getHTML }) => {
          this.json = getJSON()
          this.html = getHTML()
          this.emitContent()
        },
        onFocus: () => {
          console.log('Updated')
        }
      }),
      json: '',
      html: '',
      visible: false,
      command: '',
      linkUrl: null,
      linkMenuIsActive: false,
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  methods: {
    emitContent() {
      const data = {
        html: this.html,
        json: this.json
      }

      this.$emit('input', data)
    },
    showImagePrompt(command) {
      this.command = command
      this.visible = true
    },
    setImage(value) {
      this.visible = false

      if(value.type === 'URL') {
        this.command({ src: value.url })
      } else {
        this.command({ src: value.file })
      }
    },
    showLinkMenu(attrs) {
      this.linkUrl = attrs.href
      this.linkMenuIsActive = true
      this.$nextTick(() => {
        this.$refs.linkInput.focus()
      })
    },
    hideLinkMenu() {
      this.linkUrl = null
      this.linkMenuIsActive = false
    },
    setLinkUrl(command, url) {
      command({ href: url })
      this.hideLinkMenu()
      this.editor.focus()
    },
  }
}
</script>

<style lang="sass">
@import '~@/assets/sass/components/menububble'

.te-editor
  position: relative
  width: 100%
  margin: 0 auto 0rem auto

  &__content
    word-wrap: break-word
    *
      caret-color: currentColor
    pre
      padding: 0.7rem 1rem
      border-radius: 5px
      background: $ColorBlack
      color: $ColorWhite
      font-size: 0.8rem
      overflow-x: auto

      code
        display: block

    p code
      display: inline-block
      padding: 0 0.4rem
      border-radius: 5px
      font-size: 0.8rem
      font-weight: bold
      background: rgba($ColorBlack, 0.1)
      color: rgba($ColorBlack, 0.8)


    ul,
    ol
      padding-left: 1rem


    li > p,
    li > ol,
    li > ul
      margin: 0

    a
      color: inherit


    blockquote
      border-left: 3px solid rgba($ColorBlack, 0.1)
      color: rgba($ColorBlack, 0.8)
      padding-left: 0.8rem
      font-style: italic

      p
        margin: 0

    img
      display: block
      max-width: 100%
      background-size: contain
      height: auto
      border-radius: 3px

    table
      border-collapse: collapse
      table-layout: fixed
      width: 100%
      margin: 0
      overflow: hidden

      td, th
        min-width: 1em
        border: 2px solid $ColorGreyLight
        padding: 3px 5px
        vertical-align: top
        box-sizing: border-box
        position: relative
        > *
          margin-bottom: 0

      th
        font-weight: bold
        text-align: left

      .selectedCell:after
        z-index: 2
        position: absolute
        content: ""
        left: 0 
        right: 0 
        top: 0 
        bottom: 0
        background: rgba(200, 200, 255, 0.4)
        pointer-events: none

      .column-resize-handle
        position: absolute
        right: -2px 
        top: 0 
        bottom: 0
        width: 4px
        z-index: 20
        background-color: #adf
        pointer-events: none


    .tableWrapper
      margin: 1em 0
      overflow-x: auto

    .resize-cursor
      cursor: ew-resize

.editor p.is-empty:first-child::before
    content: attr(data-empty-text)
    color: lighten($ColorBlack, 20  )
    pointer-events: none
    height: 0
    font-style: italic
    cursor: col-resize

img,
p > img
  display: blcok
  width: 100%
  height: auto
  background-size: contain
  margin: 50px auto

.menubar
  margin-bottom: 1rem
  transition: visibility 0.2s 0.4s, opacity 0.2s 0.4s

  &.is-hidden
    visibility: hidden
    opacity: 0

  &.is-focused
    visibility: visible
    opacity: 1
    transition: visibility 0.2s, opacity 0.2s

  &__button
    font-weight: bold
    display: inline-flex
    background: transparent
    border: 0
    color: $ColorBlack
    padding: 0.2rem 0.5rem
    margin-right: 0.2rem
    border-radius: 3px
    cursor: pointer
    &:hover
      background-color: rgba($ColorBlack, 0.05)

    &.is-active
      background-color: rgba($ColorBlack, 0.1)
</style>
