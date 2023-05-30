<template>
  <div class="item">
    <div class="item__content">
      <img class="item__icon" :src="item.imageSrc" alt="">
      <span>{{ item.name }}</span> 
    </div>
    <span>{{ item.quantityTask }}</span>
  </div>
</template>

<script>
  export default {
    name: "ActionsWithTasks",

    props: {
      item: {
        type: Object,
        default: ()=>{}
      }
    },

    computed: {
    
    }
  }
</script>
  
<style lang="scss" scoped>
 

    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 24px;
      gap: 12px;

      &__content {
        display: flex;
        align-items: center;
      }

      &__item:hover {
        background: #F9F9FB;
      }

      &__icon {
        padding-right: 14px;
      }
    }




  // }
</style>