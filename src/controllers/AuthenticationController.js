import store from '@/store'
import router from '@/router'
import UserService from '@/services/user.service'
import { TokenService, UserStorage } from '@/services/storage.service'

const login = async (credentials) => {
  return UserService.login(credentials)
    .then((res) => {
      TokenService.saveToken(res.token)

      store.dispatch('auth/login', res)
      store.dispatch('user/setUser', res)

      const user = {
        id: res._id,
        username: res.username,
        email: res.email,
        verified: res.verified,
        image: res.image
      }

      UserStorage.saveUser(user)
      return res
    }).catch((err) => {
      console.log(err)
    })
}

const signout = async () => {
  UserStorage.removeUser()
  TokenService.removeToken()
  store.dispatch('auth/signout')
  store.dispatch('user/clearUser')
}

const register = async (credentials) => {
  return UserService.register(credentials)
    .then((user) => {
      TokenService.saveToken(user.token)
      store.dispatch('auth/login', user)
      store.dispatch('user/setUser', user)
      UserStorage.saveUser(user)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

export default {
  login,
  signout,
  register
}