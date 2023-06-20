<template>
  <div>
    <tasks-item 
      v-for="(task, index) in getDeletedTasks"
      :key="index"
      :task="task"
      :index="index"
      :ifDeletedTask="ifDeletedTask"
    />
  </div>
</template>

<script>
import TasksItem from '../widgets/TasksItem.vue'
  export default {
  components: { TasksItem },
    name: "DeletedTasks",

    data() {
      return {
        ifDeletedTask: true
      }
    },
    
    computed: {
      getDeletedTasks() {
        return this.$store.getters['getDeletedTasks']
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>