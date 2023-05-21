<template>
  <div>{{ category.name }}</div>
</template>

<script>
  export default {
    name: 'CategoryItem',

    props: {
      category: {
        type: Object,
        default: null
      }
    }
  }
</script>

<style>

</style>