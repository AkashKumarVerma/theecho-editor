import store from '@/store'
import UserService from '@/services/user.service'

const login = async (credentials) => {

  return UserService.login(credentials)
    .then((res) => {
      store.dispatch('auth/login', res)
      store.dispatch('user/setUser', res)
      return res
    }).catch((err) => {
      return Promise.reject(err)
    })
}

export default {
  login
}