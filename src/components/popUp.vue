<template>
  <div class="wrapper">
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
        v-if="getDataPopUp.isVisibleComponent"
        class="popup__input"
        v-model="itemPopUp.inputValue"
        :placeholder="getDataPopUp.placeholder"
        fill
      />

      {{ getDataPopUp.plaseholder }}
      <div class="popup__categories" v-if="getDataPopUp.isVisibleComponent">
        <category-item 
          class="popup__categories-item"
          v-for="category in categories"
          :key="category.name"
          :category="category"
          @click.native="selectedCategories(category)"
        />
      </div>

      <status-task 
        v-if="!getDataPopUp.isVisibleComponent"
        :getDataPopUp="getDataPopUp"
        @Completed="Completed"
        @Delete="DeleteTask"
        @isStarred="isStarred"
        @isImpotant="isImpotant"
      />
    
      <custom-button 
        @click.native="ButtonClick"
        :title="getDataPopUp.titleBtn"
        :imageSrc="imageTaskBtn"
      />

      {{ itemPopUp }}
      
    </div>
  </div>
</template>

<script>
import CustomButton from './form/CustomButton'
import CustomInput from './form/CustomInput'
import CategoryItem from './widgets/CategoryItem'
import StatusTask from './widgets/StatusTask.vue'

export default {
  name: 'popUp',

  props: {
    changeTask: {
      type: Object,
      default: ()=>{},
    }
  },
  data() {
    return {
      imageTaskBtn: require("@/assets/image/create-svgrepo-com.svg"),
      itemPopUp: {
        inputValue: '',
        category: [],
        dateOfCreation: {},
        isStarred: false,
        isImpotant: false,
        isComplete: false,
      },

      isActive: true,
    }
  },
  components: { 
    CustomInput,
    CustomButton,
    CategoryItem,
    StatusTask,
   
  },

  computed: {
    getDataPopUp() {
      return this.$store.getters['popUp/getDataPopUp']
    },

    getTaskForCgange() {
      return this.$store.getters['getTaskForChange']
    },

    categories() {
      return this.$store.getters['getCategories']
    },
    
  },

  methods: {
    ButtonClick() {
      this.$store.dispatch( this.getDataPopUp.actionVuex, this.itemPopUp)
      this.$store.dispatch('popUp/isVisiblePopUp')
    },

    selectedCategories(category) {
      let index = this.itemPopUp.category.findIndex((item => item === category))
      if(index > -1) {
        this.itemPopUp.category.splice(index, 1)
      } else {
        this.itemPopUp.category.push(category)
      }
    },

    closePopUp() {
      this.$store.dispatch('popUp/isVisiblePopUp')
    },

    Completed() {
      this.itemPopUp.isComplete = ! this.itemPopUp.isComplete
      this.$store.dispatch('saveToStorage')
    },

    DeleteTask() {
      this.$store.dispatch('deleteTask', this.itemPopUp)
    },

    isStarred() {
      this.itemPopUp.isStarred = !this.itemPopUp.isStarred
      this.$store.dispatch('saveToStorage')
    },

    isImpotant() {
      this.itemPopUp.isImpotant = !this.itemPopUp.isImpotant
      this.$store.dispatch('saveToStorage')
    }
  },

  created() {
    if(this.getTaskForCgange) {
        this.itemPopUp = this.getTaskForCgange.task
        this.itemPopUp.index = this.getTaskForCgange.index
      }
  }

}
</script>

<style lang="scss" scoped>
  .wrapper {
    position: absolute;
    background: rgba(66, 66, 66, 0.336);
    height: 100%;
    width: 100%;
    // z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .popup {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 30px;
    border-radius: 8px;
    width: 500px;
    min-height: 400px;
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