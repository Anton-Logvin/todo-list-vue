<template>
  <div class="pop-up" >
    <h2>Create task</h2>
    <custom-input 
      v-model="task"
      fill
    />
{{ task }}
    <tasks-category 
      class="categories"
    />
    <custom-button 
      @click.native="addTask"
      :title="titleBtn"
      :imageSrc="imageSrc"
    />
  </div>
</template>

<script>
import CustomButton from './form/CustomButton'
import CustomInput from './form/CustomInput'
import TasksCategory from './widgets/TasksCategory.vue'
export default {
  name: 'popUp',

  // props: {
  //   task: {
  //     type: String
  //   }
  // },

  data() {
    return {
      titleBtn: 'Create task',
      imageSrc: require("@/assets/image/create-svgrepo-com.svg"),
      task: '',
    }
  },
  components: { 
    CustomInput,
    CustomButton,
    TasksCategory,
  },

  methods: {
    addTask() {
      console.log('dobavleno')
      this.$store.dispatch('addTask', this.task)
    }
  }

}
</script>

<style lang="scss" scoped>
  .pop-up {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 30px;
    border-radius: 8px;
    width: 500px;
    height: 400px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 1px 4px rgba(205, 209, 212, 0.64);
  }

  .categories {
    display: flex;
    flex-wrap: wrap;
    
  }
</style>