<template>
  <div class="te-textbox">
    <div v-if="icon !== ''" class="te-textbox__icon">
      <icon :name="icon" />
    </div>
    <input 
      type="text" 
      :placeholder="placeholder"
      @input="onChange"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    >
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  name: 'Textbox',
  props: {
    icon: {
      type: String,
      deafult: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  components: {
    Icon
  },
  methods: {
    onChange(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="sass" scoped>
.te-textbox
  width: 100%
  min-width: 120px
  height: auto
  overflow: hidden
  font-family: Montserrat

  &__icon
    display: none

  input[type=text]
    display: block
    width: 100%
    height: 40px
    
    font-size: 16px
    font-weight: $FontMedium
    padding: 0 10px
    
    border: 1px solid $ColorBlack
    background-color: $ColorWhite
    color: $ColorBlack
</style>