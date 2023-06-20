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
      @mouseover.native="mouseOver(category)"
      @mouseout.native="mouseOut(category)"
      :class="{ hover: isShipHovered === index }"
    />
  </div>
</template>

<script>
import CategoryItem from './CategoryItem'
  export default {
    name: 'TasksCategory',

    data() {
      return {
        isShipHovered: 'asdasdasd'
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
        // this.$store.dispatch('popUp/isVisibleModalCategories')
        this.$emit('openAddCateguryPopUp')
      },
      mouseOver(category) {
        category.isHover = true
      },
      mouseOut(category) {
        category.isHover = false
      }
    }
  }
</script>

<style lang="scss" scoped>
.hover {
    background: green;
  }
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