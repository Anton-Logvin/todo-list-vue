import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // namespaced: true,

  state: {
    tasks: [],
    categories: [],
    changedTask: null,
    isVisible: false,
    isVisibleModalCategories: false,
    dataPopUp: {}
  },

  getters: {
    getTasks(state) {
      return state.tasks
    },

    getTaskForChange(state) {
      return state.changedTask
    },

    isVisible(state) {
      return state.isVisible
    },

    isVisibleModalCategories(state) {
      return state.isVisibleModalCategories
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
    },

    addCategory(state, category) {
      state.categories.push(category)
    },

    changeTask(state, changeItem) {
      state.tasks[changeItem.index] = changeItem
    },


    selectedChangeTask(state, changedTask) {
      console.log(changedTask)
      state.changedTask = changedTask
    },



    // taskIndexSearch(state, index) {
    //   console.log(state.tasks)
    //   state.tasks[index] = state.task
     
    // },

    isVisiblePopUp(state, dataPopUp) {
      state.isVisible = !state.isVisible
      state.isVisibleModalCategories === true ? state.isVisibleModalCategories = false : state.isVisibleModalCategories
      state.dataPopUp = dataPopUp
      state.changedTask = null
    },

    isVisibleModalCategories(state) {
      state.isVisibleModalCategories = !state.isVisibleModalCategories
      state.isVisible === true ? state.isVisible = false : state.isVisible
    }
  },

  actions: {
    addTask({commit}, taskItem) {
      commit('addTask', taskItem)
    },

    addCategory({commit}, categoryItem) {
      commit('addCategory', categoryItem)
    },

    changeTask({commit}, changeItem) {
      commit('changeTask', changeItem)
    },

    selectedChangeTask({commit}, changedTask) {
      commit('selectedChangeTask', changedTask)
    },

    // taskIndexSearch({commit}, index) {
    //   commit('taskIndexSearch', index)
    // },

    isVisiblePopUp({commit}, dataPopUp) {
      commit('isVisiblePopUp', dataPopUp)
    },

    isVisibleModalCategories({commit}) {
      commit('isVisibleModalCategories')
    }
  }
})

export default store