<template>
  <div class="task">
    <div class="task__item">
      <input class="task__checkbox" type="checkbox"  id="task" name="task" value="yes">
      <label for="task"></label>
      <div class="task__item-task">
        <p class="task__item-name">{{ task.inputValue }}</p>
        <p class="task__item-data">24  April 2020</p>
      </div>
    </div>
    <p class="task__categories">
        <category-item 
          class="task__item-category"
          v-for="(category, index) in task.category"
          :key="category.name"
          :category="category"
          :index="index"
        />
      
    </p>
    <div class="task__item-icons">
      <img class="task__item-icon" @click="ChangeTask" src="@/assets/image/editTask.svg" alt="">
      <img class="task__item-icon" @click="setStatusTasks" src="@/assets/image/dott.svg" alt="">
    </div>
  </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue'
  export default {
  components: { CategoryItem },
    name: 'TasksItem',

    data() {
      return {
        dataPopUp: {
          title: 'Save changes',
          titleBtn: 'Save',
          actionVuex: 'changeTask',
          isVisibleComponent: true
        },

        statusTask: {
          title: 'Set status for task',
          titleBtn: 'Set status',
          actionVuex: 'changeTask',
          isVisibleComponent: false,
          starred: 'Starred',
          impotant: 'Impotant',
          completed: 'Completed',
          delete: 'Delete',
        }
      }
    },

    props: {
      task: {
        type: Object,
        default: null
      },

      index: {
        type: Number,
        default: null
      }
    },

    methods: {
      ChangeTask() {
        const changeTask = {
          task: this.task,
          index: this.index
        }
        // this.$emit('getTask', this.task)
        this.$store.dispatch('isVisiblePopUp', this.dataPopUp)
        // this.$store.dispatch('taskIndexSearch', this.index)
        this.$store.dispatch('selectedChangeTask', changeTask)
      },

      setStatusTasks() {
        this.$store.dispatch('isVisiblePopUp', this.statusTask)
      }
    }
  }
</script>

<style lang="scss" scoped>
  
  .task {
    display: grid;
    grid-template-columns: 33% auto 20%;
    padding: 16px 0px;
    box-shadow: inset 0px -1px 0px #E9E9E9, inset 0px 1px 0px #E9E9E9;
  
  &__item {
    display: flex;
    align-items: center;
  }

  &__checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__checkbox+label::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #B3B3B3;
    border-radius: 50%;
    background-position: center center;
  }

  &__checkbox:checked+label::before {
    border-color: #9378FF;
    background-image: url(@/assets/image/Active.svg)
}

  &__item-task {
    padding: 0px 0px 0px 16px;
  }
  &__checkbox {
    
  }

  &__item-name {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #120E21;
  }

  &__categories {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__item-category {
    display: flex;
    align-items: center;
    border-radius: 16px;
    padding: 0px 12px;
    gap: 5px;
    background: #F3F3F6;
    height: 24px;
  }

  &__item-icons {
    display: flex;
    justify-content: flex-end;
    align-self: center;
  }

  &__item-icon {
    cursor: pointer;
  }
}
</style>