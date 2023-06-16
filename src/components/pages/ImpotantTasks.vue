<template>
  <div>
    <tasks-item 
      v-for="(task, index) in getImpotantTasks"
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
    name: "ImpotantTasks",
    
    computed: {
      getImpotantTasks() {
        return this.$store.getters['getImpotantTasks']
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>