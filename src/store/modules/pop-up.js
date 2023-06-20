export default {
  namespaced: true,

  state: {
    task: {},
    indexTaks: null,
    dialog: false,
    isVisibleChangeTask: false,
    isVisibleStatusTask: false,
    // dataPopUp: {},
    changedCategoriesInTask: [],
  },

  getters: {
    dialog(state) {
      return state.dialog
    },
    isVisibleChangeTask(state) {
      return state.isVisibleChangeTask
    },
    isVisibleStatusTask(state) {
      return state.isVisibleStatusTask
    },
    getTask(state) {
      return state.task
    },
    getIndexTask(state) {
      return state.indexTaks
    },
    // getDataPopUp(state) {
    //   return state.dataPopUp
    // },
    changedCategoriesInTask(state) {
      return state.changedCategoriesInTask
    }
  },

  mutations: {
    openChangeTask(state, {task, categories}) {
      state.dialog = !state.dialog
      state.isVisibleChangeTask = !state.isVisibleChangeTask
      for(let category of task.categories) {
        categories.forEach((elem) => {
          if(elem.inputValue === category.inputValue) {
            elem.isActive = true
          } 
        })
      }
      state.changedCategoriesInTask = categories
      state.task = task
    },

    closeChangeTask(state) {
      state.dialog = !state.dialog
      state.isVisibleChangeTask = !state.isVisibleChangeTask
      state.task = null
    },

    openSetStatusTask(state, task) {
      state.task = task
      state.dialog = !state.dialog
      state.isVisibleStatusTask = !state.isVisibleStatusTask
    },

    setIndexTask(state, index) {
      state.indexTaks = index
    }
  },

  actions: {
    openChangeTask({commit}, {task, categories}) {
      commit('openChangeTask', {task, categories})
    },

    closeChangeTask({commit}) {
      commit('closeChangeTask')
    },

    openSetStatusTask({commit}, {task, index}) {
      commit('openSetStatusTask', task)
      commit('setIndexTask', index)
    },
    
    closeSetStatusTask({commit}) {
      commit('openSetStatusTask')
    },

    
  }
}