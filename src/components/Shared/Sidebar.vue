<template>
  <aside class="sidebar">
    <div class="sidebar-logo image">
      <img src="@/assets/images/logoe.png" alt=""> 
    </div>
    <div class="sidebar-menu">
      <ul ref="sidebarMenu">
        <router-link to="/dashboard">
          <li> <i class="fas fa-columns"></i> Dashboard</li>
        </router-link>
        <router-link to="/drafts">
          <li class="selected"> <i class="fas fa-scroll"></i> Drafts</li>
        </router-link>
        <router-link to="/editor">
          <li class="selected"> <i class="fas fa-edit"></i> Editor</li>
        </router-link>
        <router-link to="/stories">
          <li> <i class="fas fa-dragon"></i> Stories</li>
        </router-link>
        <router-link to="/stats">
          <li> <i class="fas fa-broadcast-tower"></i> Stats</li>
        </router-link>
        <router-link to="/settings">
          <li> <i class="fas fa-cogs"></i> Settings</li>
        </router-link>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  mounted() {
    // const itemCount = this.$refs.sidebarMenu.children.length

    // for(var i = 0; i < itemCount; i++) {
    //   this.$refs.sidebarMenu.children[i].addEventListener('click', (e) => {
    //     for(var j = 0; j < itemCount; j++) {
    //       this.$refs.sidebarMenu.children[j].classList.remove('selected')
    //     }
    //     e.target.classList.add('selected')
    //   })
    // }
  }
}
</script>

<style lang="sass" scoped>
@import '~@/assets/sass/settings'

.sidebar
  width: 250px
  height: 100vh
  // background-color: #FFFFFF
  background-color: #000000

  position: fixed
  top: 0
  left: 0

  z-index: 9999

  &-logo
    width: 70px
    height: auto
    margin-left: auto
    margin-right: auto
    margin-top: 30px
    img
      display: block
      width: 100%
      height: auto

      background-size: contain
  &-menu
    color: #FFFFFF
    font-family: Montserrat
    font-size: 16px
    ul
      display: block
      padding: 50px
      padding-left: 80px
      padding-top: 80px
      margin: 0

      li
        list-style-type: none
        display: block
        padding: 5px 0
        margin: 10px 0
        cursor: pointer

        i
          margin-right: 10px
          font-size: 14px
      a
        display: block
        color: #FFFFFF
        text-decoration: none

.router-link-active
  border-bottom: 1px solid $ColorPrimary
  margin: 15px 0

</style> 