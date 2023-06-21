<template>
  <div>
    <tasks-item 
      v-for="(task, index) in getStarredTasks"
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
    name: "StarredTasks",

    computed: {
      getStarredTasks() {
        return this.$store.getters['getStarredTasks']
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