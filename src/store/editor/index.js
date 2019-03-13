const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async loadDraft({ commit }, draftId) {
    const draft =  await DraftController.getDraftById(id)

    console.log(draft)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}