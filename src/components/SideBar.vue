<template>
  <div class="side-bar">
    <div class="menu__header">
      <img src="../assets/image/Manager.svg" alt="">
      <span class="menu__title">To Do Manager</span>
    </div>

    <actions-with-tasks 
      :dataMenuItem = "dataMenuItem"
    />
    
    <tasks-category 
    
    />
    
    <custom-button 
      @click.native="VisiblePopUp"
      :title="titleBtn"
      :imageSrc="imageSrc"
    />
  </div>
</template>

<script>
import CustomButton from './form/CustomButton'
// import PopUp from './popUp'
import ActionsWithTasks from './widgets/ActionsWithTasks'
import TasksCategory from './widgets/TasksCategory'
  export default {
    name: 'SideBar',

    data() {
      return {
        titleBtn: 'Add task',
        imageSrc: require("@/assets/image/plus.svg"),
        isVisible: false,
        dataPopUp: {
          title: 'Create task',
          titleBtn: 'Create',
          actionVuex: 'addTask',
          placeholder: 'Enter task name',
          isVisibleComponent: true,
        },
      }
    },
    components: { 
      ActionsWithTasks,
      TasksCategory,
      CustomButton,
      // PopUp,
    },

    computed: {
      completedTasks() {
        return this.$store.getters['getCompletedTasks']
      },

      dataMenuItem() {
        return [   
          {name: "All Tasks", imageSrc: '' , quantityTask: this.$store.getters['getTasks']},
          {name: "Starred", imageSrc: require('@/assets/image/star.svg'), quantityTask: this.$store.getters['getStarredTasks']},
          {name: "Impotant", imageSrc: require('@/assets/image/alert-circle.svg'), quantityTask: this.$store.getters['getImpotantTasks']},
          {name: "Completed", imageSrc: require('@/assets/image/check-circle.svg'), quantityTask: this.$store.getters['getCompletedTasks']},
          {name: "Deleted", imageSrc: require('@/assets/image/trash-2.svg'), quantityTask: this.$store.getters['getDeletedTasks']},]
      },
    },

    methods: {
      VisiblePopUp() {
        this.$store.dispatch('popUp/isVisiblePopUp', this.dataPopUp)
        this.$store.dispatch('selectedChangeTask', null)
      }
    }
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