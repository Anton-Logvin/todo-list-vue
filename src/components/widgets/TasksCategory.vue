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
      v-for="category in categories"
      :key="category.name"
      :category="category"
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
        // category: 'lol',
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
        console.log('task category click')
        this.$store.dispatch('isVisiblePopUp', this.dataPopUp)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .categories{
    &__header {
      display: flex;
      justify-content: space-between;
      padding: 20px 10px;
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