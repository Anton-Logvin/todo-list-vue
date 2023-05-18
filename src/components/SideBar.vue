<template>
  <div class="side-bar">
    <div class="menu__header">
      <img src="../assets/image/Manager.svg" alt="">
      <span class="menu__title">To Do Manager</span>
    </div>

    <actions-with-tasks />
    
    <tasks-category />
    
    <custom-button />
    
  </div>
</template>

<script>
import CustomButton from './form/CustomButton.vue'
import ActionsWithTasks from './widgets/ActionsWithTasks.vue'
import TasksCategory from './widgets/TasksCategory.vue'
  export default {
    name: 'SideBar',
    components: { 
      ActionsWithTasks,
        TasksCategory,
        CustomButton, 
    },
  }
</script>

<style lang="scss" scoped>
  
.side-bar {
  width: 288px;
  height: 952px;
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(205, 209, 212, 0.64);
  border-radius: 8px;
}

.menu {
  display: flex;
  flex-direction: column;
  list-style-type: none;

    &__header {
      display: flex;
      align-items: center;
      padding: 24px;
      gap: 12px;
    }
  }
</style>