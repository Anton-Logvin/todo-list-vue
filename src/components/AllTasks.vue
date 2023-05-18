<template>
   <div class="tasks">
      <div class="tasks__header">
        <h1 class="tasks__title">All Tasks</h1>
        <input class="tasks__search" type="text" placeholder="Search">
      </div>
      <div class="tasks__subtitle">
        <span class="tasks__subtitle-part">Task</span>
        <span class="tasks__subtitle-part">Categories</span>
        <span class="tasks__subtitle-part">Actions</span>
      </div>
      
      <tasks-item />
      
    </div>
</template>

<script>
import TasksItem from './widgets/TasksItem.vue'
  export default {
  components: { TasksItem },
    name: 'AllTasks',

  }
</script>

<style lang="scss" scoped>
  .tasks {
  width: 1304px;
  height: 952px;
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(205, 209, 212, 0.64);
  border-radius: 8px;
  padding: 40px;

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
  }

  &__search {
    font-size: 14px;
    line-height: 24px;
    color: #808080;
    width: 324px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #D6D6D6;
    border-radius: 24px;
    padding-left: 16px;
  }

  &__search::placeholder {
    background: url(../assets/image/search.svg) no-repeat left 2px bottom 6px;
    background-size: 20px;
    height: 24px;
    padding-left: 32px;
  }

  &__subtitle {
    display: grid;
    grid-template-columns: 33% auto 20%;
    padding: 20px 14px 
  }

  &__subtitle-part {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #808080;
  }

  &__subtitle-part:first-child {
    padding-left: 20px;

  }
  &__subtitle-part:last-child {
    text-align: end;

  }
}
</style>