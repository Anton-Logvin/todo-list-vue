<template>
  <ul>
    <li class="menu__item">categories<img class="menu__icon" src="@/assets/image/plus-gray.svg" alt=""></li>
    <li class="menu__item"><img class="menu__icon" src="@/assets/image/blue.svg" alt=""><span>Work</span></li>
    <li class="menu__item"><img class="menu__icon" src="@/assets/image/yellow.svg" alt=""><span>Personal</span></li>
    <li class="menu__item"><img class="menu__icon" src="@/assets/image/orange.svg" alt=""><span>Shopping</span></li>
    <li class="menu__item"><img class="menu__icon" src="@/assets/image/green.svg" alt=""><span>Education</span></li>
  </ul>
</template>

<script>
  export default {
    name: 'TasksCategory',
    components: {

    }
  }
</script>

<style lang="scss" scoped>
  .menu {
    // display: flex;
    // flex-direction: column;
    // list-style-type: none;
    

    &__item {
      display: flex;
      align-items: center;
      padding: 8px 24px;
      gap: 12px;
    }

    &__item:hover {
      background: #F9F9FB;
    }

    &__icon {
   
    }
  }
</style>