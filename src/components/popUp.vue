<template>
  <div class="popup" >
    <div class="popup__header">
      <h2>{{ getDataPopUp.title }}</h2>
      <img 
        class="popup__btn-close" 
        src="@/assets/image/close-red-icon.svg" 
        alt=""
        @click="closePopUp"
      >
    </div>
    
    <custom-input 
      class="popup__input"
      v-model="inputValue"
      fill
    />
    <div class="popup__categories">
      <category-item 
        class="popup__categories-item"
        v-for="category in categories"
        :key="category.name"
        :category="category"
      />
    </div>
  

    <custom-button 
      @click.native="addTask"
      :title="getDataPopUp.titleBtn"
      :imageSrc="imageTaskBtn"
    />
  </div>
</template>

<script>
import CustomButton from './form/CustomButton'
import CustomInput from './form/CustomInput'
import CategoryItem from './widgets/CategoryItem'

export default {
  name: 'popUp',

  data() {
    return {
      // titleBtn: 'Create task',
      imageTaskBtn: require("@/assets/image/create-svgrepo-com.svg"),
      inputValue: '',
    
    }
  },
  components: { 
    CustomInput,
    CustomButton,
    CategoryItem,
  },

  computed: {
    getDataPopUp() {
      return this.$store.getters['getDataPopUp']
    },

    categories() {
        return this.$store.getters['getCategories']
    }
  },

  methods: {
    addTask() {
      console.log('dobavleno', this.getDataPopUp.actionVuex)
      this.$store.dispatch(this.getDataPopUp.actionVuex, this.inputValue)
    },

    closePopUp() {
      this.$store.dispatch('isVisiblePopUp')
    }
  }

}
</script>

<style lang="scss" scoped>
  .popup {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 30px;
    border-radius: 8px;
    width: 500px;
    height: 400px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 0px 8px rgba(205, 209, 212, 0.64);

    &__header {
      display: flex;
      justify-content: space-between;
    }

    &__input {
      border-radius: 24px;
      padding-left: 16px;
    }

    &__categories {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    &__categories-item {
      cursor: pointer;
      min-width: 100px;
      display: flex;
      align-items: center;
      padding: 4px 24px;
      gap: 12px;
      border: 1px solid gray;
      border-radius: 16px;
      background: rgb(226, 226, 226);
    }

    &__categories-item:hover {
      background: rgb(189, 189, 189);
      border: 1px solid rgb(68, 68, 68);
    }

    &__btn-close {
      width: 36px;
      height: 36px;
      cursor: pointer;
      border-radius: 50%;
      transition: all ease 0.3s;
    }

    &__btn-close:hover {
      box-shadow: 0px 0px 6px rgba(80, 80, 80, 0.64);
    }
  }


</style>