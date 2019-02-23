const state = {
  signedIn: false,
  name: '',
  email: '',
  permission: ''
}

const getters = {
  name: (state) => {
    return state.name
  },

  email: (state) => {
    return state.email
  },

  permission: (state) => {
    return state.permission
  }
}

const mutations = {
  SET_NAME(state, name) {
    state.name = name
  },

  SET_EMAIL(state, email) {
    state.email = email
  },

  SET_PERMISSION(state, permission) {
    state.permission = permission
  },

  SIGNIN(state) {
    state.signedIn = true
  }
}

const actions = {
  setUser({ commit }, user) {
    commit('SET_NAME', user.name)
    commit('SET_EMAIL', user.email)
    commit('SET_PERMISSION', user.permission)
    commit('SIGNIN')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}