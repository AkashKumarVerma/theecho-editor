<template>
  <div id="app">
    <!-- <sidebar v-if="this.$store.state.user.signedIn" :class="{ 'hideSidebar': this.$route.path === '/editor' }"/> -->
    <sidebar v-if="this.$store.state.user.signedIn"/>
    <div :class="{ body: true, 'padding-left': (this.$store.state.user.signedIn) }">
      <navbar v-if="this.$store.state.user.signedIn"/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Shared/Navbar'
import Sidebar from '@/components/Shared/Sidebar'
import { TokenService, UserStorage } from '@/services/storage.service'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar
  },
  mounted() {
    const TOKEN = TokenService.getToken()

    if(TOKEN) {
      let user = JSON.parse(UserStorage.getUser())
      user.token = TOKEN
      this.$store.dispatch('auth/login', user)
      this.$store.dispatch('user/setUser', user)
    }
  }
}
</script>

<style lang="sass" scoped>
#app
  .padding-left
    padding-left: 50px
  .body
    width: 100%
    padding-top: 60px
  .hideSidebar
    left: -50px
    opacity: 0
</style>
