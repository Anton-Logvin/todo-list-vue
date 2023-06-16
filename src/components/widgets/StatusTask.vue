<template>
  <div class="statuses">
    <p class="statuses__task-name">{{ task.name }}</p>
    <div class="statuses__wrapper">
      <span class="statuses__header">Set task status</span>
      <div class="statuses__items">
        <p @click="isStarred" class="statuses__item">Starred</p>
        <p @click="isImpotant" class="statuses__item">Impotant</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'StatusTask',

  props: {
    task: {
      type: Object,
      default: null
    }
  },

  methods: {
    isStarred() {
      this.$emit('isStarred')
    },

    isImpotant() {
      this.$emit('isImpotant')
    },
  }
}
</script>

<style lang="scss" scoped>
  .statuses {
    &__task-name {
      display: flex;
      justify-content: center;
    }

    &__wrapper {
      padding: 10px;
      margin: 10px;
      border: 1px solid rgb(228, 228, 228);
      border-radius: 10px;
    }
    
    &__header {
      color: rgb(80, 80, 80);
      font-size: 17px;
    }
    
    &__items {
      padding: 20px 10px 10px 10px;
      display: flex;
      justify-content: flex-end;
      gap: 20px;
    }

    &__item {
      background: rgb(233, 233, 233);
      padding: 10px;
      border-radius: 20px;
      min-width: 120px;
      max-width: 80%;
      text-align: center;
      cursor: pointer;
      transition: all ease .5s;
    }

    &__item:hover {
      background: rgb(189, 189, 189);
    }
  }  
</style>