<template>
  <div class="register">
    <div class="register__form">
      <div class="logo image image-x">
        <img src="@/assets/images/logo.png" alt="">
      </div>
      <div class="register__form-form">
        <input v-model="username" type="text" placeholder="Username" autocomplete="off">
        <input v-model="email" type="text" placeholder="Email" autocomplete="off">
        <input v-model="password" type="password" placeholder="Password" autocomplete="off">
        <button @click="register">SIGN IN
          <transition name="spinner">
            <span v-if="authenticating" class="spinner image image-y">
              <img src="@/assets/images/oval.svg" alt="">
            </span>
          </transition>
        </button>
        <span @click="$router.push('/login')" class="register">Sign In</span>
      </div>
    </div>
  </div>
</template>

<script>
import { AuthenticationController } from '@/controllers'

export default {
  name: 'register',
  data() {
    return {
      email: '',
      password: '',
      username: '',
      authenticating: false
    }
  },
  methods: {
    register() {
      const credentials = {
        email: this.email,
        password: this.password,
        username: this.username
      }
      
      AuthenticationController.register(credentials)
    }
  }
}
</script>

<style lang="sass" scoped>
.register
  width: 100%
  height: auto
  height: calc(100vh - 60px)
  display: flex
  align-items: center
  justify-content: center

  &__form
    width: 400px
    height: 500px
    font-family: Montserrat

    .logo
      width: 80px
      height: auto
      @extend .center-x

    &-form
      padding: 24px

    &-header
      text-align: center
      display: block
      font-size: 24px
      font-weight: 700
      color: #1C1C1C
      padding: 50px 0
    input
      display: block
      margin: 20px auto
      border: 1px solid #F8F8F8
      padding: 10px
      background-color: #F8F8F8
      width: 300px
      height: 50px
      border-radius: 2px
    button
      display: block
      width: 300px
      height: 50px
      border: none
      background-color: #1C1C1C
      color: #FFFFFF
      margin: 20px auto
      cursor: pointer
      position: relative

      &:active,
      &:focus
        outline: none

    .spinner
      position: absolute
      left: 0
      top: 0
      padding: 15px
      background-color: rgba(255, 255, 255, 0.95)
      width: 100%
      height: 100%

    .register
      display: block
      height: 20px
      text-align: center
      margin: 20px auto
      font-size: 14px
      font-weight: 400
      cursor: pointer

.spinner-enter-active,
.spinner-leave-active
  transition: opacity 0.1s ease-out

.spinner-enter,
.spinner-leave-active
  opacity: 0

</style>