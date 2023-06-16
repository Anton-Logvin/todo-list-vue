<template>
  <div class="task">
    <div class="task__item">
      <input 
        class="task__checkbox" 
        type="checkbox"  
        :id=index 
        v-model="checked"
        @change="changeCheckbox"
      >
      <label :for=index></label>
      <div class="task__item-task">
        <p class="task__item-name">{{ task.name }}</p>
        <!-- <p @click="dateOfCreation" class="task__item-data">{{ task.dateOfCreation }}</p> -->
        
      </div>
    </div>
    <p class="task__categories">
      <category-item 
        class="task__item-category"
        v-for="(category, index) in task.categories"
        :key="category.name"
        :category="category"
        :index="index"
      />
    </p>
    
    <div class="task__item-icons">
      <img class="task__item-icon" @click="openChangeTask(task)" src="@/assets/image/editTask.svg" alt="">
      <img class="task__item-icon" @click="openSetStatusTask({task, index})" src="@/assets/image/dott.svg" alt="">
    </div>
  </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue'
  export default {
  components: { CategoryItem },
    name: 'TasksItem',
    
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

    data() {
      return {
        dateOfCreation: '',
        checked: false
      }
    },

    computed: {
      checkedTask() {
        return this.$store.getters['getCheckedTask']
      }
    },

    methods: {
      changeCheckbox() {
        // if(this.checked) {
        //   this.checked = !this.checked
        // }
        // this.$emit('changeCheckbox')
        console.log(this.checkedTask)
        this.$store.dispatch('isComplete', this.task)
      },

      openChangeTask(task) {
        const categories = JSON.parse(JSON.stringify(this.$store.getters['getCategories']))
        this.$store.dispatch('popUp/openChangeTask', {task, categories})
      },

      openSetStatusTask({task, index}) {
        this.$store.dispatch('popUp/openSetStatusTask', {task, index})
      }
    },

    created() {
      if(this.task.isComplete) {
        this.checked = true
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

  &__checkbox+label:hover {
    cursor: pointer;
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
    gap: 10px;
    align-self: center;
  }

  &__item-icon {
    cursor: pointer;
  }
}
</style>