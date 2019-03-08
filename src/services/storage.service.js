const TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'

const USER_KEY = 'user'
/**
 *
 * Manages the acces of items stored in localStorage
 *
 * localStorage should only be accessd through this instance
 */

 const TokenService = {

  getToken() {
    return localStorage.getItem(TOKEN_KEY)
  },

  saveToken(accessToken) {
    localStorage.setItem(TOKEN_KEY, accessToken)
  },

  removeToken() {
    localStorage.removeItem(TOKEN_KEY)
  },

  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY)
  },

  saveRefreshToken(refreshToken) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
  },

  removeRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN_KEY)
  }

 }


const UserStorage = {
  getUser() {
    return localStorage.getItem(USER_KEY)
  },

  getUserId() {
    const user = JSON.parse(localStorage.getItem(USER_KEY))
    return user.id
  },

  saveUser(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  },

  removeUser() {
    localStorage.removeItem(USER_KEY)
  }
} 

export { TokenService, UserStorage }