<template>
  <div class="login">
    <div class="login__form">
      <div class="logo image image-x">
        <img src="@/assets/images/logo.png" alt="">
      </div>
      <div class="login__form-form">
        <span class="login__form-header">Welcome Back Editors</span>
        <input type="text" placeholder="Email" autocomplete="off">
        <input type="password" placeholder="Password" autocomplete="off">
        <button>SIGN IN</button>
        <span class="register">Create Account</span>
      </div>
    </div>
  </div>
</template>

<script>
  name: 'Login'
</script>

<style lang="sass" scoped>
@import '~@/assets/sass/main'

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
    .register
      display: block
      text-align: center
      margin: 20px auto
      font-size: 14px
      font-weight: 400
      cursor: pointer

</style>