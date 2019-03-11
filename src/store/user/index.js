import router from '@/router'

const state = {
  signedIn: false,
  username: '',
  email: '',
  verified: '',
  image: '',
  drafts: [],
  articles: [],
  liked: []
}

const getters = {
  name: (state) => {
    return state.username
  },

  email: (state) => {
    return state.email
  },

  permission: (state) => {
    return state.verified
  },

  articles: (state) => {
    return state.articles
  }
}

const mutations = {
  SET_NAME(state, username) {
    state.username = username
  },

  SET_DRAFTS(state, drafts) {
    drafts.forEach((draft) => {
      console.log(draft)
      state.drafts.push(draft)
    })
  },

  SET_EMAIL(state, email) {
    state.email = email
  },

  SET_VERIFIED(state, verified) {
    state.verified = verified
  },

  SET_IMAGE(state, imageURL) {
    state.image = imageURL
  },

  SIGNIN(state) {
    state.signedIn = true
    router.push('/editor')
  },
  
  SIGNOUT(state) {
    state.signedIn = false
    router.push('/')
  }
}

const actions = {
  setUser({ commit }, user) {
    commit('SET_NAME', user.username)
    commit('SET_EMAIL', user.email)
    commit('SET_VERIFIED', user.verified)
    commit('SET_IMAGE', user.image)
    commit('SIGNIN')
    commit('SET_DRAFTS', user.drafts)
  },
  
  clearUser({ commit }) {
    commit('SET_NAME', '')
    commit('SET_EMAIL', '')
    commit('SET_VERIFIED', false)
    commit('SET_IMAGE', '')
    commit('SIGNOUT')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}