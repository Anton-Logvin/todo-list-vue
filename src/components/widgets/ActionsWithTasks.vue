<template>
  <ul class="menu">
    <li class="menu__item">
      <!-- <img class="menu__icon" src="..//public/image/grid.png" alt=""> -->
      <span>All Tasks</span>
    </li>
    <li class="menu__item"><img class="menu__icon" src="@/assets/image/star.svg" alt=""><span>Starred</span></li>
    <li class="menu__item"><img class="menu__icon" src="@/assets/image/alert-circle.svg" alt=""><span>Important</span></li>
    <li class="menu__item"><img class="menu__icon" src="@/assets/image/check-circle.svg" alt=""><span>Completed</span></li>
    <li class="menu__item"><img class="menu__icon" src="@/assets/image/trash-2.svg" alt=""><span>Deleted</span></li>
  </ul>
</template>

<script>

</script>
  
<style lang="scss" scoped>
  .menu {
    display: flex;
    flex-direction: column;
    list-style-type: none;

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