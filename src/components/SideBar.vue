<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <img src="../assets/image/Manager.svg" alt="">
      <span class="sidebar__title">To Do Manager</span>
    </div>
    <actions-with-tasks 
      :dataMenuItem = "dataMenuItem"
    />
    <tasks-category @openAddCateguryPopUp="openAddCateguryPopUp"/>
    <custom-button 
      @click.native="openAddTaskPopUp"
      :title="titleBtn"
      :imageSrc="imageSrc"
    />
    <transition name="popup">
    <pop-up
      class="popup"
      v-if="dialog"
      v-model="dialog"
    > 
<!-- set to popup  -->    
      <template v-if="isVisibleAddTask">
        <h2>Create task</h2> 
      </template>
      <template 
        #action
        v-if="isVisibleAddTask"
      >
        <custom-input 
          class="popup__input"
          v-model="task.name"
          fill
          @input="validateInput(task.name)"
          :class="{'validate': isValidate}"
        />
        <p v-show="isValidate">Имя не может быть пустым</p>
        <div class="popup__categories">
          <category-item 
            class="popup__category"
            v-for="(category, index) in categories"
            :key="category.name"
            :class="{'active':category.isActive}"
            :category="category"
            :index="index"
            @click.native="selectedCategories(category)"
          />
        </div>
        <div class="popup__buttons">
          <custom-button 
            class="popup__button" 
            @click.native="addTask" 
            title="Save"
            :disabled="isDisabled"
            :class="{'disabled-btn': isDisabled}"
          />
          <custom-button 
            class="popup__button" 
            @click.native="closePopUp" 
            title="Cancel"
          />
        </div>
      </template>
<!-- set to popup  -->
      <template v-if="isVisibleAddCategory">
        <h2>Create category</h2> 
      </template>
      <template 
        #setStatus
        v-if="isVisibleAddCategory"
      >
        <custom-input 
          class="popup__input"
          :class="{'validate': isValidate}"
          v-model="category.inputValue"
          @input="validateInput(category.inputValue)"
          fill
        />
        <p v-show="isValidate">Имя не может быть пустым</p>
        <custom-button 
          @click.native="addCategory"
          :class="{'disabled-btn': isDisabled}"
          title="Save"
          :imageSrc="imageTaskBtn"
          :disabled="isDisabled"
        />
        <custom-button 
          class="popup__button" 
          @click.native="closePopUp" 
          title="Cancel"
        />
      </template>
    </pop-up>
    </transition>
  </div>
</template>

<script>
import CustomButton from './form/CustomButton'
import CustomInput from './form/CustomInput'
import PopUp from './popUp'
import ActionsWithTasks from './widgets/ActionsWithTasks'
import TasksCategory from './widgets/TasksCategory'
import CategoryItem from './widgets/CategoryItem'

export default {
  name: 'SideBar',

  data() {
    return {
      titleBtn: 'Add task',
      imageSrc: require("@/assets/image/plus.svg"),
      dialog: false,
      isVisibleAddTask: false,
      isVisibleAddCategory: false,
      isValidate: false,
      isDisabled: true,
      category: {
        inputValue: '',
        color: '',
        isActive: false
      },
      imageTaskBtn: require("@/assets/image/create-svgrepo-com.svg"),
      task: {
        name: '',
        categories: [],
        dateOfCreation: '',
        isStarred: false,
        isImpotant: false,
        isComplete: false,
      },
    }
  },

  components: { 
    ActionsWithTasks,
    TasksCategory,
    CategoryItem,
    CustomButton,
    PopUp,
    CustomInput,
  },

   
  computed: {
    completedTasks() {
      return this.$store.getters['getCompletedTasks']
    },

    dataMenuItem() {
      return [   
        {name: "All Tasks", link: '/', imageSrc: '' , quantityTask: this.$store.getters['getTasks']},
        {name: "Starred", link: 'starred', imageSrc: require('@/assets/image/star.svg'), quantityTask: this.$store.getters['getStarredTasks']},
        {name: "Impotant", link: 'impotant', imageSrc: require('@/assets/image/alert-circle.svg'), quantityTask: this.$store.getters['getImpotantTasks']},
        {name: "Completed", link: 'completed', imageSrc: require('@/assets/image/check-circle.svg'), quantityTask: this.$store.getters['getCompletedTasks']},
        {name: "Deleted", link: 'deleted', imageSrc: require('@/assets/image/trash-2.svg'), quantityTask: this.$store.getters['getDeletedTasks']},]
    },

    categories() {
      return this.$store.getters['getCategories']
    }
  },

  methods: {
    openAddTaskPopUp() {
      this.dialog = true
      this.isVisibleAddTask = true
      this.isVisibleAddCategory = false
    },

    openAddCateguryPopUp() {
      this.dialog = true
      this.isVisibleAddCategory = true
      this.isVisibleAddTask = false
    },

    closePopUp() {
      this.dialog = false
      this.disabled = true
      this.isValidate = false
      this.isDisabled = true
      this.task.name = ''
      this.task.categories = []
    },

    addTask() {
      this.task.categories.forEach(item => item.isActive = false)
      this.$store.dispatch('addTask', this.task)
      this.task.name = ''
      this.task.categories = []
      this.isValidate = false
      this.isDisabled = true
    },

    addCategory() {
      this.category.color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
      this.$store.dispatch('addCategory', this.category)
      this.category.inputValue = ''
      // this.closePopUp()
      this.$store.dispatch('saveCategoriesToStorage')
    },

    selectedCategories(category) {
      let index = this.task.categories.findIndex((item => item.inputValue === category.inputValue))
      if(index > -1) {
        this.task.categories.splice(index, 1)
      } else {
        this.task.categories.push(category)
      }
      category.isActive = !category.isActive
      this.$store.dispatch('saveToStorage')
    },

    validateInput(item) {
      if(item === '') {
        this.isValidate = true
        this.isDisabled = true
      } else {
        this.isValidate = false
        this.isDisabled = false
      }
      // this.disabledButton()
    },
    // disabledButton() {
    //   if(this.task.name === '') {
    //     this.isDisabled = true
    //   } else {
    //     this.isDisabled = false
    //   }
    // }
  },

  created() {
    // this.disabledButton()
  }
}
</script>

<style lang="scss" scoped>
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.6s ease;
}
.popup-enter,
.popup-leave-to {
  opacity: 0;
}
.active {
  // background: rgb(134, 134, 134);
  border: 2px solid green;
}
.validate {
  box-shadow: 0px 0px 6px red;
}
.disabled-btn {
  opacity: 0.7;
  background: gray;
}
  
.sidebar {
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(205, 209, 212, 0.64);
  border-radius: 8px;

  &__header {
    display: flex;
    align-items: center;
    padding: 24px;
    gap: 12px;
  }
  .popup {
  height: 100%;
  width: 100%;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  z-index: 10;
  
    &__categories {
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__category {
      box-sizing: border-box;
      padding: 6px 10px;
      border-radius: 20px;
      min-width: 80px;
    }

    &__buttons {
      display: flex;
    }
    .modal {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>