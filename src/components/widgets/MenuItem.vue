<template>
  <router-link 
    class="item" 
    :class="{ 'active': isActive}"
    :to='item.link' 
    @click="clickMenuItem"
  >
    <div class="item__content">
      <img class="item__icon" :src="item.imageSrc" alt="">
      <span>{{ item.name }}</span> 
    </div>
    <span>{{ item.quantityTask.length }}</span>
  </router-link>
</template>

<script>
  export default {
    name: "MenuItem",
    data() {
      return {
        isActive: false
      }
    },

    props: {
      item: {
        type: Object,
        default: ()=>{}
      }
    },

    methods: {
      clickMenuItem() {
        this.isActive = true
        if(this.item.quantityTask.length) {
          this.$store.dispatch('tasksDisplay', this.item)
        }
        
      }
    }
  }
</script>
  
<style lang="scss" scoped>
  .active {background: red;}
  .item:hover {
    background: rgb(218, 218, 218);
  }
  .item {
    text-decoration: none;
    color: #47415E;
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

    // &__item:hover {
    //   background: #F9F9FB;
    // }

    &__icon {
      padding-right: 14px;
    }
  }

</style>