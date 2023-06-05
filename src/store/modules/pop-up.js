export default {
  namespaced: true,

  state: {
    isVisible: false,
    isVisibleModalCategories: false,
    dataPopUp: {}
  },

  getters: {
    isVisible(state) {
      return state.isVisible
    },

    isVisibleModalCategories(state) {
      return state.isVisibleModalCategories
    },

    getDataPopUp(state) {
      return state.dataPopUp
    },
  },

  mutations: {
    isVisiblePopUp(state, dataPopUp) {
      state.isVisible = !state.isVisible
      state.isVisibleModalCategories === true ? state.isVisibleModalCategories = false : state.isVisibleModalCategories
      state.dataPopUp = dataPopUp
    },
  
    isVisibleModalCategories(state) {
      state.isVisibleModalCategories = !state.isVisibleModalCategories
      state.isVisible === true ? state.isVisible = false : state.isVisible
    }
  },

  actions: {
    isVisiblePopUp({commit}, dataPopUp) {
      commit('isVisiblePopUp', dataPopUp)
    },
  
    isVisibleModalCategories({commit}) {
      commit('isVisibleModalCategories')
    }
  }
}