<template>
  <div id="app">
    <navbar v-if="$store.state.user.signedIn"/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Shared/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">

</style>
