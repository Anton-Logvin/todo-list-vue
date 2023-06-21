<template>
  <div 
    class="category" 
  >
    <div class="category__title">
      <div 
      class="category__color" 
      :style="{ background: category.color}"
      >
      </div>
      <span class="category__name">{{ category.inputValue }}</span>
    </div>
    <img 
      class="category__icon" 
      v-show="category.isHover"
      src="@/assets/image/dott.svg" 
      alt=""
      @click="openChangeCategory"
    >
  </div>
</template>

<script>
  export default {
    name: 'CategoryItem',

    data() {
      return {
        
      }
    },

    props: {
      category: {
        type: Object,
        default: null
      },
      // upHere: {
      //   type: Boolean,
      //   default: false
      // }
    },

    methods: {
      openChangeCategory() {
        this.$emit('openChangeCategory')
      }
    }
  }
</script>

<style lang="scss" scoped>
.category:hover {
  background: #F9F9FB;
}
.category {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  
  &__title {
    display: flex;
    align-items: center;
  }
  
  &__color {
    // background: red;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  &__name {
    padding-left: 16px;
  }

  &__icon {
    transform: rotate(90deg);
  }
}

</style>