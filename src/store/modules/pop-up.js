export default {
  namespaced: true,

  state: {
    task: {},
    indexTaks: null,
    dialog: false,
    isVisibleChangeTask: false,
    isVisibleStatusTask: false,
    isVisibleAddTask: false,
    isVisibleAddCategory: false,
    isVisibleChangeCategory: false,
    changedCategoriesInTask: [],
  },

  getters: {
    dialog(state) {
      return state.dialog
    },
    isVisibleChangeTask(state) {
      return state.isVisibleChangeTask
    },
    isVisibleChangeCategory(state) {
      return state.isVisibleChangeCategory
    },
    isVisibleStatusTask(state) {
      return state.isVisibleStatusTask
    },
    isVisibleAddTask(state) {
      return state.isVisibleAddTask
    },
    isVisibleAddCategory(state) {
      return state.isVisibleAddCategory
    },
    getTask(state) {
      return state.task
    },
    getIndexTask(state) {
      return state.indexTaks
    },
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
    },
    openAddTaskPopUp(state) {
      state.isVisibleAddTask = true
      state.isVisibleAddCategory = false
      state.isVisibleChangeCategory = false
    },
    openAddCategoryPopUp(state) {
      state.isVisibleAddCategory = true
      state.isVisibleAddTask = false
      state.isVisibleChangeCategory = false
    },
    openChangeCategory(state) {
      state.isVisibleChangeCategory = true
      state.isVisibleAddCategory = false
      state.isVisibleAddTask = false
    }
  },

  actions: {
    openAddTaskPopUp({commit}, ) {
      commit('openAddTaskPopUp')
    },
    openAddCategoryPopUp({commit}, ) {
      commit('openAddCategoryPopUp')
    },
    openChangeCategory({commit}, ) {
      commit('openChangeCategory')
    },
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