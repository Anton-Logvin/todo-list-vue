import Vue from 'vue'
import Vuex from 'vuex'
import popUp from './modules/pop-up'

Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,

  modules: {
    popUp
  },

  state: {
    tasks: [],
    tasksWithStatus: null,
    deletedTasks: [],
    categories: [],
    changedTask: null,
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
      return state.categories
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

    deleteTask(state, task) {
      state.deletedTasks.push(task)
      state.tasks.splice(task.index, 1)
    },

    tasksDisplay(state, tasksWithStatus) {
      console.log(tasksWithStatus)
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
  },

  actions: {
    addTask({commit, dispatch}, taskItem) {
      commit('addTask', taskItem)
      dispatch('saveToStorage')
      dispatch('setTasksFromStorage')
    },

    deleteTask({commit, dispatch}, task) {
      commit('deleteTask', task)
      dispatch('saveToStorage')
    },

    tasksDisplay({commit}, tasksWithStatus) {
      commit('tasksDisplay', tasksWithStatus)
    },

    addCategory({commit, dispatch}, categoryItem) {
      commit('addCategory', categoryItem)
      dispatch('saveToStorage')
    },

    changeTask({commit}, changeItem) {
      commit('changeTask', changeItem)
    },

    selectedChangeTask({commit}, changedTask) {
      commit('selectedChangeTask', changedTask)
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
  }
})

export default store