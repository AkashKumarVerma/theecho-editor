import { TokenService } from '@/services/storage.service'

const state = {
  authenticating: false,
  accessToken: TokenService.getToken(),
  authenticationErrorCode: 0,
  authenticationError: ''
}

const getters = {
  loggedIn: (state) => {
    return state.accessToken ? true : false
  },

  authenticationErrorCode: (state) => {
    return state.authenticationErrorCode
  },

  authenticationError: (state) => {
    return state.authenticationError
  },

  authenticating: (state) => {
    return state.authenticating
  }
}


const mutations = {
  loginRequest(state) {
    state.authenticating = true
    state.authenticationError = ''
    state.authenticationErrorCode = 0
  },

  loginSuccess(state, accessToken) {
    state.accessToken = accessToken
    state.authenticating = false
  },

  loginError(state, { errorCode, errorMessage }) {
    state.authenticating = false
    state.authenticationError = errorMessage
    state.authenticationErrorCode = errorCode
  },
  
  signout(state) {
    state.accessToken = ''
    state.authenticating = false
    state.authenticationError = ''
    state.authenticationErrorCode = 0
  }
}

const actions = {
  async login({ commit }, user) {
    commit('loginRequest')
    commit('loginSuccess', user.token)
  },

  async signout({ commit }) {
    commit('signout')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}