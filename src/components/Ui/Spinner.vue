<template>
  <div class="ui__spinner--wrapper" v-if="visible">
    <img src="@/assets/images/oval.svg" alt="">
  </div>
</template>

<script>
/*
 * Spinner component to be used as a loader
 * or anything you wnat, who am i to say.
 *
 * @alias <ui-spinner :visibility="boolean" />
 * @props {boolean} visibility - Visibility state of the spinner
 */
export default {
  name: 'Spinner',
  data () {
    return {
      visible: false
    }
  },
  props: {
    visibility: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visibility() {
      this.visible = this.visibility
    }
  },
  methods: {
    click(e) {
      e.preventDefault()
    }
  }
}
</script>

<style lang="sass" scoped>
.ui__spinner--wrapper
  width: 100%
  height: 100%
  padding: 10px
  z-index: 100
  background-color: rgba(255, 255, 255, 0.95)
  margin: 0 auto
  position: absolute
  top: 0
  left: 0
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  align-items: center

  img
    display: block
    width: 100%
    max-width: 70px
    height: auto
    max-height: 100%
    margin: 0 auto
    background-size: contain
</style>