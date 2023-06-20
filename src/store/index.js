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
    searchedTasks: [],
    // tasksWithStatus: [],
    deletedTasks: [],
    tasksDisplay: [],
    categories: [],
    changedTask: null,
    searchText: '',
    // checkedTask: false
  },

  getters: {
    getTasks(state) {
      return state.tasks
    },

    getSearchedTasks(state) {
      // let tasks = []
      // if(state.searchedTasks.length) {
      //   tasks = state.searchedTasks
      // } else {
      //   tasks = state.tasks
      // }
      // return tasks
      return state.searchedTasks
    },

    getSearchText(state) {
      return state.searchText
    },

    // getTasksWithStatus(state) {
    //   return state.tasksWithStatus
    // },

    // getTaskForChange(state) {
    //   return state.changedTask
    // },

    getCategories(state) {
      // console.log(state.categories)
      return state.categories
    },

    // getCheckedTask(state) {
    //   return state.checkedTask
    // },

   
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
      state.deletedTasks.push(deletedTask)
      const index = state.tasks.findIndex(item => item.name === deletedTask.name);
        if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },
    
    searchByNameTask(state, searchText) {
      state.searchText = searchText
      let allTasks = state.tasks
      if(searchText) {
        allTasks = allTasks.filter(task => {
          // return task.name.toLowerCase().includes(searchText.toLowerCase())
          return task.name.slice(0, searchText.length).toLowerCase() == searchText.toLowerCase()
        })
      }
      state.searchedTasks = allTasks
    },

    setTasksDisplay(state, tasksDisplay) {
      // console.log(tasksDisplay)
      state.tasksDisplay = tasksDisplay
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
        // state.checkedTask = !state.checkedTask
      })
    }
  },

  actions: {
    addTask({commit, dispatch}, taskItem) {
      // console.log(taskItem)
      let date = new Date()
      const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
      taskItem.dateOfCreation = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
      commit('addTask', taskItem)
      dispatch('saveToStorage')
      dispatch('setTasksFromStorage')
    },

    deleteTask({commit, dispatch}, deletedTask) {
      commit('deleteTask', deletedTask)
      dispatch('saveToStorage')
    },

    searchByNameTask({commit}, searchText) {
      commit('searchByNameTask', searchText)
    },

    setTasksDisplay({commit}, tasksDisplay) {
      commit('setTasksDisplay', tasksDisplay)
    },

    addCategory({commit, dispatch}, categoryItem) {
      commit('addCategory', categoryItem)
      dispatch('saveCategoriesToStorage')
      dispatch('setCategoriesFromStorage')
    },

    changeTask({commit, dispatch}, changeItem) {
      commit('changeTask', changeItem)
      dispatch('saveToStorage')
      //не сохраняет в sessionStorege 
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