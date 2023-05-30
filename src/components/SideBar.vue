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
          placeholder: 'Enter task name'
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
      dataMenuItem() {
        return [   
          {name: "All Tasks", imageSrc: '' , quantityTask: this.$store.getters['getTasks'].length},
          {name: "Starred", imageSrc: require('@/assets/image/star.svg') },
          {name: "Impotant", imageSrc: require('@/assets/image/alert-circle.svg') },
          {name: "Completed", imageSrc: require('@/assets/image/check-circle.svg') },
          {name: "Deleted", imageSrc: require('@/assets/image/trash-2.svg') },]
      }
    },

    methods: {
      VisiblePopUp() {
        // this.$store.dispatch('ChangeTask', null)
        this.$store.dispatch('isVisiblePopUp', this.dataPopUp)
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