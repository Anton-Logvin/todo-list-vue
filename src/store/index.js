import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // namespaced: true,

  state: {
    tasks: [],
    task: {},
    isVisible: false,
  },

  getters: {
    getTasks(state) {
      return state.tasks
    },

    isVisible(state) {
      return state.isVisible
    }
  },

  mutations: {
    addTask(state, task) {
      state.tasks.push(task)
      console.log(state.tasks, task)
    },

    isVisiblePopUp(state) {
      state.isVisible = !state.isVisible
    }
  },

  actions: {
    addTask({commit}, taskText) {
      const task = {text: taskText}
      commit('addTask', task)
    },

    isVisiblePopUp({commit}) {
      commit('isVisiblePopUp')
    }
  }
})

export default store