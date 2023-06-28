<template>
  <div class="category">
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
        isActive: false
      }
    },

    props: {
      category: {
        type: Object,
        default: null
      },
    },
  }
</script>

<style lang="scss" scoped>
.active {
  background: green;
}
.category {

  &__color {
    // background: red;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
}

</style>