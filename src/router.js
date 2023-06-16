import Vue from 'vue'
import VueRouter from 'vue-router'
import AllTasks from './components/pages/AllTasks'
import StarredTasks from './components/pages/StarredTasks'
import ImpotantTasks from './components/pages/ImpotantTasks'
import CompletedTasks from './components/pages/CompletedTasks'
import DeletedTasks from './components/pages/DeletedTasks'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: AllTasks
  },
  {
    path: '/starred',
    component: StarredTasks
  },

  {
    path: '/impotant',
    component: ImpotantTasks
  },

  {
    path: '/completed',
    component: CompletedTasks
  },

  {
    path: '/deleted',
    component: DeletedTasks
  },



]

export default new VueRouter({
  mode: 'history',
  routes
})