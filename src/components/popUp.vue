<template>
  <div class="pop-up" >
    <custom-input 
      v-model="task"
      fill
    />
    <custom-button 
      @click.native="addTask"
      :title="titleBtn"
    />
  </div>
</template>

<script>
import CustomButton from './form/CustomButton'
import CustomInput from './form/CustomInput'
export default {
  name: 'popUp',

  data() {
    return {
      task: '',
      titleBtn: 'Create task',

    }
  },
  components: { 
    CustomInput,
    CustomButton,
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
    padding: 40px 30px;
    border-radius: 8px;
    width: 500px;
    height: 400px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 1px 4px rgba(205, 209, 212, 0.64);
  }
</style>