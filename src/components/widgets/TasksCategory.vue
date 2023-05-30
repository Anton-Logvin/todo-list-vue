<template>
  <div class="categories">
    <p class="categories__header">categories
      <img 
        class="categories__create-icon" 
        src="@/assets/image/plus-gray.svg" 
        alt=""
        @click="addCategory"
      >
    </p>
   
    <category-item 
      class="categories__item"
      v-for="(category, index) in categories"
      :key="category.name"
      :category="category"
      :index="index"
    />
  </div>
</template>

<script>
import CategoryItem from './CategoryItem'
  export default {
    name: 'TasksCategory',

    props: {
    
    },

    data() {
      return {
        dataPopUp: {
          title: 'Create category',
          titleBtn: 'Create category',
          actionVuex: 'addCategory'
        }
      }
    },

    components: {
        CategoryItem
    },

    computed: {
      categories() {
        return this.$store.getters['getCategories']
      }
    },

    methods: {
      addCategory() {
        this.$store.dispatch('isVisibleModalCategories')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .categories{
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 24px;
      text-transform: uppercase;
      color: #808080;

    }

    &__item {
      display: flex;
      align-items: center;
      padding: 8px 24px;
      gap: 12px;
    }

    &__create-icon {
      cursor: pointer;
    }
  }
</style>