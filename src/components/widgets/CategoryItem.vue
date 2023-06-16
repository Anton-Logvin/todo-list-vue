<template>
  <div class="category" >
    <!-- <input 
      class="category__checkbox" 
      type="checkbox" 
      id="jack" 
      value="Джек" 
      v-model="changedCategory"
    > -->
    <!-- <label for="jack"></label> -->
    <div 
      class="category__color" 
      :style="{ background: category.color}"
    ></div>
    {{ category.inputValue }}
    
  </div>
</template>

<script>
  export default {
    name: 'CategoryItem',

    data() {
      return {
        // changedCategory: false
      }
    },

    props: {
      category: {
        type: Object,
        default: null
      },
      // taskCategories: {
      //   type: Array,
      //   default: null
      // }
    },
  }
</script>

<style lang="scss" scoped>
// :class="{'active': category.isActive}"
// .active {
//   background: green;
// }
.category {
  display: flex;
  align-items: center;
  
  &__color {
    // background: red;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
}

</style>