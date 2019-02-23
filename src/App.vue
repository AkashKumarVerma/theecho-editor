<template>
  <div id="app">
    <sidebar v-if="this.$store.state.user.signedIn" />
    <div :class="{ body: true, 'padding-left': this.$store.state.user.signedIn }">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Shared/Navbar'
import Sidebar from '@/components/Shared/Sidebar'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar
  },
  computed: {
    padding() {
      return {
        'padding-left': this.$store.state.user.signedIn
      }
    }
  }
}
</script>

<style lang="sass" scoped>
#app
  display: flex
  flex-direction: row
  flex-wrap: nowrap

  .padding-left
    padding-left: 250px

  .body
    width: 100%
    display: flex
    flex-direction: row
    justify-items: center
</style>
