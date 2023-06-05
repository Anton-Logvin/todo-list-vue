<template>
  <div 
    class="tasks" 
    :class="{ active: isVisible}"
  >
    <div class="tasks__header">
      <h1 class="tasks__title">{{ getAllTasks.name }}</h1>
      <input 
        class="tasks__search" 
        type="text" 
        placeholder="Search"
        :class="{ active: isVisibleModalCategories}"
      >
    </div>
    <div class="tasks__subtitle">
      <span class="tasks__subtitle-part">Task</span>
      <span class="tasks__subtitle-part">Categories</span>
      <span class="tasks__subtitle-part">Actions</span>
    </div>
      
    <tasks-item 
      v-for="(task, index) in getAllTasks.quantityTask"
      :key="index"
      :task="task"
      :index="index"
    />
    
    <pop-up 
      class="tasks__pop-up" 
      v-if="isVisible"
    />

    <modal-categories 
      class="tasks__pop-up" 
      v-if="isVisibleModalCategories"
    />
  </div>
</template>

<script>
import ModalCategories from './ModalCategories'
import PopUp from './popUp'
import TasksItem from './widgets/TasksItem'
  export default {
    name: 'AllTasks',

    data() {
      return {
    
      }
    },

    components: { 
      TasksItem, 
      PopUp,
      ModalCategories,
    },

    computed: {
      isVisible() {
        return this.$store.getters['popUp/isVisible']
      },

      isVisibleModalCategories() {
        return this.$store.getters['popUp/isVisibleModalCategories']
      },

      getAllTasks() {
        const taskWithStatus = this.$store.getters['getTasksWithStatus']
        if(taskWithStatus) {
          return taskWithStatus
        } else {
          return {name: 'All tasks', quantityTask: this.$store.getters['getTasks']} 
        }
      }
    },

    methods: {

    }
  }
</script>

<style lang="scss" scoped>

  .tasks {
    position: relative;
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
      color: #7c1f1f;
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

    &__pop-up {
      position: absolute;
      top:50%;
      left:50%;
      transform:translate(-50%, -50%);
    }
  }

  .active {
    // background: rgba(255, 255, 255, 0.747);
    
  }
</style>