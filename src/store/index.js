import Vue from 'vue'
import Vuex from 'vuex'
import popUp from './modules/pop-up'


Vue.use(Vuex)

const store = new Vuex.Store({
 

  modules: {
    popUp,
  },

  state: {
    tasks: [],
    tasksWithStatus: null,
    deletedTasks: [],
    categories: [],
    changedTask: null,
    checkedTask: false
  },

  getters: {
    getTasks(state) {
      return state.tasks
    },

    getTasksWithStatus(state) {
      return state.tasksWithStatus
    },

    getTaskForChange(state) {
      return state.changedTask
    },

    getCategories(state) {
      // console.log(state.categories)
      return state.categories
    },

    getCheckedTask(state) {
      return state.checkedTask
    },

    getCompletedTasks(state) {
      return state.tasks.filter(item => item.isComplete === true)
    },

    getStarredTasks(state) {
      return state.tasks.filter(item => item.isStarred === true)
    },

    getImpotantTasks(state) {
      return state.tasks.filter(item => item.isImpotant === true)
    },

    getDeletedTasks(state) {
      return state.deletedTasks
    },
  },

  mutations: {
    addTask(state, task) {
      state.tasks.push(task)
    },

    deleteTask(state, deletedTask) {
      state.deletedTasks.push(deletedTask.task)
      state.tasks.splice(deletedTask.index, 1)
    },

    tasksDisplay(state, tasksWithStatus) {
      state.tasksWithStatus = tasksWithStatus
    },

    addCategory(state, category) {
      state.categories.push(category)
    },

    changeTask(state, changeItem) {
      state.tasks[changeItem.index] = changeItem
    },


    selectedChangeTask(state, changedTask) {
      state.changedTask = changedTask
    },

    addTasksFromStorage(state, tasks) {
      state.tasks = tasks
    },

    addCategoriesFromStorage(state, categories) {
      state.categories = categories
    },

    isComplete(state, task) {
      state.tasks.find((item) => {
        if(item.name === task.name) {
          item = task
        }
      })
    }
  },

  actions: {
    addTask({commit, dispatch}, taskItem) {
      commit('addTask', taskItem)
      dispatch('saveToStorage')
      dispatch('setTasksFromStorage')
    },

    deleteTask({commit, dispatch}, deletedTask) {
      commit('deleteTask', deletedTask)
      dispatch('saveToStorage')
    },

    tasksDisplay({commit}, tasksWithStatus) {
      commit('tasksDisplay', tasksWithStatus)
    },

    addCategory({commit, dispatch}, categoryItem) {
      commit('addCategory', categoryItem)
      dispatch('saveCategoriesToStorage')
      dispatch('setCategoriesFromStorage')
    },

    changeTask({commit}, changeItem) {
      commit('changeTask', changeItem)
    },

    selectedChangeTask({commit}, changedTask) {
      commit('selectedChangeTask', changedTask)
    },

    isComplete({commit, dispatch}, task) {
      task.isComplete = !task.isComplete
      if(task.isComplete) {
        task.isImpotant = false
        task.isStarred = false
      }
      commit('isComplete', task)
      dispatch('saveToStorage')
    },

    saveToStorage({ state }) {
      sessionStorage.setItem('tasks', JSON.stringify(state.tasks));
    },

    setTasksFromStorage({ commit }) {
      const tasks = JSON.parse(sessionStorage.getItem('tasks'));
      if (tasks && tasks.length) {
        commit('addTasksFromStorage', tasks)
      }
    },

    saveCategoriesToStorage({state}) {
      sessionStorage.setItem('categories', JSON.stringify(state.categories));
    },

    setCategoriesFromStorage({ commit }) {
      const categories = JSON.parse(sessionStorage.getItem('categories'));
      if (categories && categories.length) {
        commit('addCategoriesFromStorage', categories)
      }
    },
  }
})

export default store