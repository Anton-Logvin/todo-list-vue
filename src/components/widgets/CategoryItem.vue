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

      index: {
        type: Number,
        default: null
      }
    },

    created() {
      // this.RandomColor()
    },

    methods: {
      // RandomColor() {
      //   this.color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
      // }
    }
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