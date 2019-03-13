<template>
  <aside class="sidebar">
    <div class="sidebar-logo image">
      <img src="@/assets/images/logoe.png" alt=""> 
    </div>
    <div class="sidebar-menu">
      <ul>
        <router-link to="/dashboard">
          <li><i class="fas fa-home"></i></li>
        </router-link>  
        <router-link to="/drafts">
          <li><i class="fas fa-scroll"></i></li>
        </router-link>  
        <router-link to="/editor">
          <li><i class="fas fa-edit"></i></li>
        </router-link>  
        <router-link to="stories">
          <li><i class="fas fa-dragon"></i></li>
        </router-link>  
        <router-link to="/stats">
          <li><i class="fas fa-broadcast-tower"></i></li>
        </router-link>  
        <router-link to="settings">
          <li><i class="fas fa-cogs"></i></li>
        </router-link>
        <li @click="signOut" class="item-logout"><i class="fas fa-power-off"></i></li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { AuthenticationController } from '@/controllers'

export default {
  name: 'Sidebar',
  methods: {
    signOut() {
      AuthenticationController.signout()
    }
  }
}
</script>

<style lang="sass" scoped>
.sidebar
  width: 50px
  height: 100vh
  background-color: #000000

  position: fixed
  top: 0
  left: 0

  transition: all 0.2s ease
  z-index: 9999

  &-logo
    width: 50px
    height: auto
    margin-left: auto
    margin-right: auto
    margin-top: 10px
    img
      display: block
      width: 100%
      height: auto

      background-size: contain
  &-menu
    color: $ColorWhite
    font-family: Montserrat
    font-size: 14px
    padding-top: 100px
    // position: relative

    ul
      display: block
      padding: 0
      margin: 0
      text-align: left

      li
        list-style-type: none
        display: block
        text-align: center
        margin: 30px auto
        cursor: pointer

        i
          font-size: 14px

    a
      display: block
      color: $ColorWhite
      text-decoration: none

    .router-link-active
      color: $ColorPrimary

    .item-logout
      position: absolute
      left: 15px
      bottom: 10px
      transition: all 0.14s ease-in-out
      &:hover
        color: $ColorPrimary

</style> 