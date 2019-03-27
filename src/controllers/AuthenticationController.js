import store from '@/store'
import router from '@/router'
import UserService from '@/services/user.service'
import { TokenService, UserStorage } from '@/services/storage.service'

const login = async (credentials) => {
  return UserService.login(credentials)
    .then((user) => {
      TokenService.saveToken(user.token)

      store.dispatch('auth/login', user)
      store.dispatch('user/setUser', user)

      UserStorage.saveUser(user)

      return user
    }).catch((err) => {
      return Promise.reject(err)
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