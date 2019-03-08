<template>
  <div class="te-icon" :class="[`te-icon--${name}`, `te-icon--${size}`]">
    <i v-if="name !== ''" :class="['fas', `fa-${name}`]">
    </i>
    {{ name === '' ? alt : '' }}
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium'
    }
  }
}
</script>

<style lang="sass" scoped>
.te-icon
  position: relative
  display: inline-block
  vertical-align: middle
  width: 15px
  height 15px
  text-align: center
  line-height: 15px

  &--small
    font-size: 14px
  &--medium
    font-size: 16px
  &--large
    font-size: 24px


</style>