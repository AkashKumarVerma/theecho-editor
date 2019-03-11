<template>
  <div class="login">
    <div class="login__form">
      <div class="logo image image-x">
        <img src="@/assets/images/logo.png" alt="">
      </div>
      <div class="login__form-form">
        <input v-model="email" type="text" placeholder="Email" autocomplete="off">
        <input v-model="password" type="password" placeholder="Password" autocomplete="off">
        <transition name="error">
          <span v-if="authenticationError !== ''" class="error">{{ authenticationError }}</span>
        </transition>
        <button @click="login">SIGN IN
          <transition name="spinner">
            <span v-if="authenticating" class="spinner image image-y">
              <img src="@/assets/images/oval.svg" alt="">
            </span>
          </transition>
        </button>
        <span @click="$router.push('/register')" class="register">Create Account</span>
      </div>
    </div>
  </div>
</template>

<script>
import { AuthenticationController } from '@/controllers'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      authenticating: false,
      authenticationError: '',
      authenticationErrorCode: ''
    }
  },
  methods: {
    login() {
      this.authenticating = true
      this.authenticationError = ''
      this.authenticationErrorCode = ''
      const credentials = {
        email: this.email,
        password: this.password
      }

      AuthenticationController.login(credentials)
        .then((res) => {
          this.authenticating = false
        }).catch((err) => {
          this.authenticating = false
          this.authenticationError = err.message
          this.authenticationErrorCode = err.error
          console.log(err)
        })
    }
  }
}
</script>

<style lang="sass" scoped>
.login
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
      text-align: center
      margin: 20px auto
      font-size: 14px
      font-weight: 400
      cursor: pointer

.error
  display: block
  font-size: 12px
  color: $ColorAccent
  font-weight: $FontMedium
  background-color: lighten($ColorAccent, 40)
  text-align: center
  width: 300px
  margin: 10px auto
  padding: 5px 0
  height: auto

.spinner-enter-active,
.spinner-leave-active
  transition: opacity 0.1s ease-out

.spinner-enter,
.spinner-leave-active
  opacity: 0

</style>