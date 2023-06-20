<template>
  <router-link 
    class="item" 
    :class="{ 'active': item.isActive}"
    :to='item.link' 
  >
    <div class="item__content">
      <img class="item__icon" :src="item.imageSrc" alt="">
      <span>{{ item.name }}</span> 
    </div>
    <span>{{ tasksLength[index].tasks.length }}</span>
   
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
      },
      index: {
        type: Number,
        default: 0,
      },
      tasksLength: {
        type: Array,
        default: null
      }
    },
  }
</script>
  
<style lang="scss" scoped>
  .active {
    background: linear-gradient(90.1deg, rgba(147, 120, 255, 0.15) 1.31%, rgba(249, 249, 251, 0) 99.94%);
    box-shadow: inset 4px 0px 0px #9378FF;
  }
  .item:hover {
    background: linear-gradient(90.1deg, rgba(147, 120, 255, 0.15) 1.31%, rgba(249, 249, 251, 0) 99.94%);
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
    transition: all 0.5s ease;

    &__content {
      display: flex;
      align-items: center;
    }

    &__icon {
      padding-right: 14px;
    }
  }

</style>