
<template>
  <div class="te-modal" @click.self="$emit('close')">
    <div class="te-modal__container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style lang="sass" scoped>
.te-modal
  position: fixed
  top: 0
  left: 0

  width: 100%
  max-width: auto
  height: 100vh

  display: flex
  flex-direction: row
  align-items: center
  justify-content: center
  flex-wrap: nowrap

  background-color: rgba(28, 28, 28, 0.5)

  z-index: 999999

  &__container
    width: auto
    height: auto
    position: relative
    background-color: $ColorWhite
    border-radius: 2px
    padding: 30px
    color: $ColorBlack

    .close-modal
      position: absolute
      top: 15px
      right: 20px
      z-index: 99999
      cursor: pointer
      font-size: 24px
      color: $ColorBlack
</style>