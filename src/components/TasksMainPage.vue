<template>
  <div class="tasks">
    <div class="tasks__header">
      <h1 class="tasks__title">{{ getAllTasks.name }}</h1>
      <div class="tasks__search" :class="{'active-search':searchText}">
        <input 
          class="tasks__search-input" 
          type="text" 
          placeholder="Search"
          v-model="searchText"
          @input="searchByNameTask"
        >
      </div>
    </div>
    <div class="tasks__subtitle">
      <span class="tasks__subtitle-part">Task</span>
      <span class="tasks__subtitle-part">Categories</span>
      <span class="tasks__subtitle-part">Actions</span>
    </div>
    
    <transition name="router-view">
      <router-view></router-view>
    </transition>
    
    <transition name="popup">
      <pop-up 
        class="popup" 
        v-if="dialog"
      >
  <!-- set to popup  -->
        <template
          v-if="isVisibleChangeTask"
        >
          <h3>Change Task</h3>
        </template>
        <template 
          #action 
          v-if="isVisibleChangeTask"
        >
        <div>
          <custom-input 
            class="popup__input"
            :class="{'validate': isValidate}"
            v-model="task.name"
            fill
            @input="validateInput"
          />
          <p v-show="isValidate">Имя не может быть пустым</p>
        </div>
        
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
          <custom-button 
            class="popup__button" 
            @click.native="closeChangeTask" 
            title="Cancel"
            :disabled="isValidate"
            :class="{'disabled-btn': isValidate}"
          />      
          
        </template>
  <!-- set to popup  -->
        <template
          v-if="isVisibleStatusTask"
        >
          <h3>Set status task</h3>
        </template>
        <template 
          #setStatus
          v-if="isVisibleStatusTask"
        >
          <status-task 
            :task="task"
            @isStarred="isStarred"
            @isImpotant="isImpotant"

          />
          <div class="popup__buttons">
            <custom-button 
            class="popup__button delete-btn" 
            @click.native="deleteTask()" 
            title="Delete task"
            />
            <custom-button 
              class="popup__button cancel-btn" 
              @click.native="closeSetStatusTask" 
              title="Cancel"
            />
          </div>
        </template>
      </pop-up>
    </transition>
  </div>
</template>

<script>
import PopUp from './popUp'
import CustomInput from './form/CustomInput.vue'
import CategoryItem from './widgets/CategoryItem.vue'
import StatusTask from './widgets/StatusTask.vue'
import CustomButton from './form/CustomButton.vue'
export default {
  name: 'TasksMainPage',

  data() {
    return {
      isValidate: false,
      searchText: ''
    }
  },

  components: { 
    PopUp,
    CustomInput,
    CategoryItem,
    StatusTask,
    CustomButton
  },

  computed: {
    getAllTasks() {
      return this.$store.getters['getTasks']
    },
    categories() {
      return this.$store.getters['popUp/changedCategoriesInTask']
    },
    dialog() {
      return this.$store.getters['popUp/dialog']
    },
    isVisibleChangeTask() {
      return this.$store.getters['popUp/isVisibleChangeTask']
    },
    isVisibleStatusTask() {
      return this.$store.getters['popUp/isVisibleStatusTask']
    },
    task() {
      return this.$store.getters['popUp/getTask']
    },
    indexTask() {
      return this.$store.getters['popUp/getIndexTask']
    }
  },
    

  methods: {
    searchByNameTask() {
      this.$store.dispatch('searchByNameTask', this.searchText)
    },

    closeChangeTask() {
      this.$store.dispatch('popUp/closeChangeTask')
    },
    closeSetStatusTask() {
      this.$store.dispatch('popUp/closeSetStatusTask')
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
    SaveChangedTask(task) {
      this.$store.dispatch('ChangeTask', task)
    },
    deleteTask() {
      // const deletedTask = {
      //   task: this.task,
      //   index: this.indexTask
      // }
      this.$store.dispatch('deleteTask', this.task)
      this.$store.dispatch('popUp/closeSetStatusTask')
    },
    isStarred() {
      this.task.isStarred = !this.task.isStarred
      this.$store.dispatch('saveToStorage')
    },
    isImpotant() {
      this.task.isImpotant = !this.task.isImpotant
      this.$store.dispatch('saveToStorage')
    },

    validateInput() {
      if(this.task.name === '') {
        this.isValidate = true
      } else {
        this.isValidate = false
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.active {
  transition: all 0.2s ease;
  border: 2px solid rgb(0, 158, 0);
  // background: rgb(2, 160, 2);
}
.active-search {
  border: 1px solid red;
}
.validate {
  box-shadow: 0px 0px 6px red;
}

.disabled-btn {
  opacity: 0.7;
  background: gray;
}
.delete-btn {
  background: #9c1515a9;
}
.delete-btn:hover{
  background: #9c1515;
  box-shadow: 0px 0px 6px rgba(80, 80, 80, 0.64);
}
.cancel-btn:hover {
  box-shadow: 0px 0px 6px rgba(80, 80, 80, 0.64);
}
  .tasks {
    position: relative;
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
      position: relative;
      padding: 10px;
      display: flex;
      // border: 1px solid #fff;
    }

    &__search-input {
      font-size: 14px;
      line-height: 24px;
      width: 324px;
      height: 40px;
      background: url(../assets/image/search.svg) no-repeat left 16px bottom 6px;
      border: 1px solid #D6D6D6;
      border-radius: 24px;
      padding-left: 48px;
    }

    &__search-input::placeholder {
      // background: url(../assets/image/search.svg) no-repeat left 2px bottom 6px;
      // background-size: 20px;
      // height: 24px;
      // padding-left: 32px;
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

  .popup {
    position: absolute;
    height: 100%;
    width: 100%;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);

    &__input {
      border-radius: 24px;
      padding-left: 16px;
    }

    &__categories {
      // box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__category {
      // box-sizing: border-box;
      padding: 6px 10px;
      border-radius: 20px;
      min-width: 80px;
      transition: all 0.5s ease;
      // border: 2px solid rgba(0, 128, 0, 0.39);
    }

    &__category:hover {
      background: rgba(221, 221, 221, 0.411);
      box-shadow: 0px 0px 6px gray;
    }

    &__buttons {
      display: flex;
    }

    &__button {
      transition: all 0.4s ease;
    }
  }
  .popup-enter-active,
  .popup-leave-active {
    transition: opacity 0.6s ease;
    
  }
  .popup-enter,
  .popup-leave-to {
    opacity: 0;
  }
  .router-view-enter-active {
    transition: all 0.2s ease-out;
  }
  .router-view-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    
  }
  .router-view-enter-from,
  .router-view-leave-to {
    opacity: 0;
  }

</style>