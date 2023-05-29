<template>
  <div>{{ category }}</div>
</template>

<script>
  export default {
    name: 'CategoryItem',

    props: {
      category: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style>

</style>