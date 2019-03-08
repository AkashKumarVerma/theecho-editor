<template>
  <nav>
    <div class="row center-xs middle-xs">
      <div class="col-xs-9 start-xs">
        <button class="btn btn-addArticle" @click="$router.push('/editor')">
          <i class="fas fa-plus"></i>
          New Story
        </button>
        <btn @click="reseEditor" v-if="$route.path === '/editor'" class="button-reset" icon="circle-notch" type="solid" color="secondary" size="medium">RESET EDITOR</btn>
        <btn @click="saveArticleToDraft" v-if="$route.path === '/editor'" class="button-save" icon="file-signature" type="solid" color="accent" size="medium">SAVE AS DRAFT</btn>
      </div>
      <div class="col-xs-3">
        <div class="user__menu" v-if="$store.state.user.signedIn">
          <span class="user__notification">
            <span class="notification__indiacator">&nbsp;</span>
            <i class="fas fa-bell"></i>
          </span>
          <span class="user__name">{{ username }}</span>
          <span class="user__image image image-x">
            <img :src="userimage" alt="">
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Btn from '@/components/Ui/Btn'
import { EventBus, Events } from '@/services/event.service'

export default {
  name: 'Navbar',
  data() {
    return {
      username: this.$store.state.user.username,
      userimage: this.$store.state.user.image,
      signedIn: this.$store.getters['auth/loggedIn']
    }
  },
  components: {
    Btn
  },
  methods: {
    saveArticleToDraft() {
      EventBus.$emit(Events.SAVE_DRAFT)
    },
    reseEditor() {
      EventBus.$emit(Events.RESET_EDITOR)
    }
  },
  mounted(){
    console.log(this.$route)
  }
}
</script>

<style lang="sass" scoped>
nav
  width: calc(100% - 50px)
  height: 60px
  background-color: #FFFFFF

  position: fixed
  top: 0
  right: 0

  z-index: 999999
  .button-save
    float: right
  .btn-addArticle
    margin-left: 20px

  .user__menu
    height: 60px
    display: flex
    flex-direction: row
    flex-wrap: no-wrap
    align-items: center
    justify-content: center

  .user__notification
    position: relative
    color: $ColorBlack
    font-size: 14px
    margin-right: 15px
    cursor: pointer

    .notification__indiacator
      position: absolute
      top: -3px
      right: -3px
      width: 10px
      height: 10px
      border-radius: 50%
      border: 2px solid $ColorWhite
      background-color: $ColorAccent

  .user__name
    margin-right: 20px
    font-size: 14px

  .user__image
    display: block
    width: 30px
    height: 30px
    border-radius: 50%
    overflow: hidden



</style>
