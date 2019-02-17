<template>
  <nav>
    <div class="icon">
      <img src="@/assets/images/logo.png" alt=""> 
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  mounted() {
    console.log(this.$store.state.user.signedIn)
  }
}
</script>

<style lang="sass" scoped>
// @import '@/assets/sass/settings.sass'

nav
  width: 100%
  height: 60px
  background-color: #FFFFFFF
  display: flex
  align-items: center
  justify-content: center
  .icon
    width: 100px
    margin: 0 auto
    img
      display: block
      width: 100%
      height: auto
      background-size: contain
</style>
