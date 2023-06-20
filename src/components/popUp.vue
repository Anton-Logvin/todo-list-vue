<template>
  <div class="wrapper">
    <div class="pop-up" >
      
      <div class="pop-up__header">
        <slot />
        <img 
          class="pop-up__icon-close" 
          src="@/assets/image/close-red-icon.svg" 
          alt=""
          @click="dialog = false"
        >
      </div>  
      <div class="pop-up__content">
        <slot name="action" />  
        <slot name="setStatus" /> 
      </div>
      
    </div>
  </div>
</template>

<script>


export default {
  name: 'popUp',

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      imageTaskBtn: require("@/assets/image/create-svgrepo-com.svg"),
    }
  },
 
  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  .wrapper {
    position: absolute;
    background: rgba(43, 0, 100, 0.603);
    background: linear-gradient(90deg, rgba(69, 19, 126, 0.555) 0%, rgba(65, 9, 121, 0.555) 50%, rgba(40, 0, 150, 0.555) 100%);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pop-up {
    padding: 30px;
    border-radius: 8px;
    width: 500px;
    min-height: 360px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 0px 8px rgba(205, 209, 212, 0.64);
    
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20px;
    }

    &__content {
      min-height: 260px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // flex-direction: column;
    }

    &__icon-close {
      width: 36px;
      height: 36px;
      cursor: pointer;
      border-radius: 50%;
      transition: all ease 0.3s;
    }

    &__icon-close:hover {
      box-shadow: 0px 0px 6px rgba(80, 80, 80, 0.64);
    }
  }


</style>