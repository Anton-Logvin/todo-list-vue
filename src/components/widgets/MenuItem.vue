<template>
  <div class="item" @click="clickMenuItem">
    <div class="item__content">
      <img class="item__icon" :src="item.imageSrc" alt="">
      <span>{{ item.name }}</span> 
    </div>
    <span>{{ item.quantityTask.length }}</span>
  </div>
</template>

<script>
  export default {
    name: "MenuItem",

    props: {
      item: {
        type: Object,
        default: ()=>{}
      }
    },

    methods: {
      clickMenuItem() {
        if(this.item.quantityTask.length) {
          this.$store.dispatch('tasksDisplay', this.item)
        }
        
      }
    }
  }
</script>
  
<style lang="scss" scoped>
  .item:hover {
    background: rgb(207, 149, 207);
  }
    .item {
      cursor: pointer;
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

</style>