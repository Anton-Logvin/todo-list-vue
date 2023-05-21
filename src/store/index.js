import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // namespaced: true,

  state: {
    tasks: [],
    categories: [],
    task: {},
    isVisible: false,
    dataPopUp: {}
  },

  getters: {
    getTasks(state) {
      return state.tasks
    },

    isVisible(state) {
      return state.isVisible
    },

    getDataPopUp(state) {
      return state.dataPopUp
    },

    getCategories(state) {
      return state.categories
    }

  },

  mutations: {
    addTask(state, task) {
      state.tasks.push(task)
      console.log(state.tasks, task)
    },

    addCategory(state, category) {
      state.categories.push(category)
    },

    isVisiblePopUp(state, dataPopUp) {
      state.isVisible = !state.isVisible
      state.dataPopUp = dataPopUp
      console.log(state.isVisible)
    }
  },

  actions: {
    addTask({commit}, taskText) {
      const task = {name: taskText}
      commit('addTask', task)
    },

    addCategory({commit}, categoryName) {
      const category = {name: categoryName}
      commit('addCategory', category)
    },

    isVisiblePopUp({commit}, dataPopUp) {
      commit('isVisiblePopUp', dataPopUp)
    }
  }
})

export default store