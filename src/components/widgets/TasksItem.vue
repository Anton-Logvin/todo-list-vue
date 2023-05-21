<template>
  <div class="task">
    <div class="task__item">
      <input class="task__checkbox" type="checkbox"  id="task" name="task" value="yes">
      <label for="task"></label>
      <div class="task__item-task">
        <p class="task__item-name">{{ task.name }}</p>
        <p class="task__item-data">24  April 2020</p>
      </div>
    </div>
    <p class="task__item-category">
      <img src="@/assets/image/orange.svg" alt="">
      Shopping
    </p>
    <div class="task__item-icons">
      <img src="@/assets/image/editTask.svg" alt="">
      <img src="@/assets/image/dott.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TasksItem',
    props: {
      task: {
        type: Object,
        default: null
      }
    }
  }
</script>

<style lang="scss" scoped>
  
  .task {
    display: grid;
    grid-template-columns: 33% auto 20%;
    padding: 16px 0px;
    box-shadow: inset 0px -1px 0px #E9E9E9, inset 0px 1px 0px #E9E9E9;
  
  &__item {
    display: flex;
    align-items: center;
  }

  &__checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__checkbox+label::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #B3B3B3;
    border-radius: 50%;
    background-position: center center;
  }

  &__checkbox:checked+label::before {
    border-color: #9378FF;
    background-image: url(@/assets/image/Active.svg)
}

  &__item-task {
    padding: 0px 0px 0px 16px;
  }
  &__checkbox {
    
  }

  &__item-name {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #120E21;
  }

  &__item-category {
    display: flex;
    align-items: center;
  }

  &__item-icons {
    display: flex;
    justify-content: flex-end;
    align-self: center;
  }
}
</style>