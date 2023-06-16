<template>
  <div>
    <tasks-item 
      v-for="(task, index) in getCompletedTasks"
      :key="index"
      :task="task"
      :index="index"
     
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
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>