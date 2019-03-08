<template>
  <div :class="[
    'te-btn', 
    `te-btn--${size}`, 
    `te-btn--${type}`, 
    `te-btn--${color}`]"
    @click="$emit('click')"
  >
    <icon v-if="icon !== ''" :name="icon"/>
    <slot />
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  name: 'Btn',
  data() {
    return {

    }
  },
  components: {
    Icon
  },
  props: { 
    type: {
      type: String,
      default: 'solid'
    },
    size: {
      type: String,
      default: 'medium'
    },
    color: {
      type: String,
      default: 'primary'
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass" scoped>
.te-btn
  display: inline-block
  margin: 10px
  border: none
  font-family: $FontPrimary
  font-weight: $FontMedium
  cursor: pointer
  text-align: center
  &--solid
    &.te-btn--primary
      background-color: $ColorBlack
      color: $ColorWhite
    &.te-btn--secondary
      background-color: $ColorGreyLight
      color: $TextColorPrimary
    &.te-btn--accent
      background-color: $ColorPrimary
      color: $TextColorPrimary

  &--large
    min-width: 150px
    font-size: 18px
    padding: 5px 25px
  &--medium
    min-width: 140px
    font-size: 12px
    padding: 8px 25px
    line-height: 18px
    .te-icon
      font-size: 12px
      margin-right: 5px
  &--small
    min-width: 80px
    font-size: 14px
    padding: 0 10px
</style>