<template>
  <div>
    <tasks-item 
      v-for="(task, index) in displayTasks"
      :key="index"
      :task="task"
      :index="index"
      @changeCheckbox="changeCheckbox(task)"
    />
    <p v-if="!displayTasks.length && getSearchText">Посик не дал результатов</p>
  </div>
</template>

<script>
import TasksItem from '../widgets/TasksItem.vue'
  export default {
  components: { TasksItem },
    name: "AllTasks",

    data() {
      return {

      }
    },

    computed: {
      getAllTasks() {
        return this.$store.getters['getTasks']
      },

      getSearchedTasks() {
        return this.$store.getters['getSearchedTasks']
      },

      getSearchText() {
        return this.$store.getters['getSearchText']
      },

      displayTasks() {
        let tasks = []
        if(this.getSearchedTasks.length) {
          tasks = this.getSearchedTasks
        } 
        else if(this.getSearchText) {
          tasks = []
        }
        else {
          tasks = this.getAllTasks
        }
        return tasks
      }
    },

    methods: {
      changeCheckbox(task) {
        this.$store.dispatch('isComplete', task)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>