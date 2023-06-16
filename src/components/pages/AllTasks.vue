<template>
  <div>
    <tasks-item 
      v-for="(task, index) in getAllTasks"
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
    name: "AllTasks",

    computed: {
      getAllTasks() {
        return this.$store.getters['getTasks']
      },
      
    },
  }
</script>

<style lang="scss" scoped>

</style>