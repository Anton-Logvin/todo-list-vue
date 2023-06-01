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

    <div class="popup__statuses" v-if="!getDataPopUp.isVisibleComponent">
      <p class="popup__status">{{ getDataPopUp.starred }}</p>
      <p class="popup__status">{{ getDataPopUp.impotant }}</p>
      <p class="popup__status">{{ getDataPopUp.completed }}</p>
      <p class="popup__status">{{ getDataPopUp.delete }}</p>
    </div>
   
    <!-- getTaskForCgange:{{ getTaskForCgange }} <br/>
    getDataPopUp:{{ getDataPopUp }} <br/> -->
    <!-- category:{{ itemPopUp.category }} <br/> -->
   
    
    <custom-button 
      @click.native="ButtonClick"
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
   
  },

  computed: {
    getDataPopUp() {
      return this.$store.getters['getDataPopUp']
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
      this.$store.dispatch('isVisiblePopUp')
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
      this.$store.dispatch('isVisiblePopUp')
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

    &__statuses {
      display: flex;
      justify-content: space-around;
    }

    &__status {
      background: rgb(233, 233, 233);
      padding: 10px;
      border-radius: 20px;
      min-width: 100px;
      text-align: center;
      cursor: pointer;
      transition: all ease .5s;
    }

    &__status:hover {
      background: rgb(189, 189, 189);
    }
  }


</style>