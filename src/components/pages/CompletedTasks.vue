<template>
  <div>
    <tasks-item 
      v-for="(task, index) in displayTasks"
      :key="index"
      :task="task"
      :index="index"
      @changeCheckbox="changeCheckbox(task)"
    />
  </div>
</template>

<script>
import TasksItem from '../widgets/TasksItem.vue'
  export default {
  components: { TasksItem },
    name: "CompletedTasks",
    
    computed: {
      getCompletedTasks() {
        return this.$store.getters['getCompletedTasks']
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
          tasks = this.getCompletedTasks
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