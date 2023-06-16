<template>
  <div>
    <menu-item 
      v-for="item in dataMenuItem" 
      :key="item.name" 
      :item = item
    />
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'
  export default {
  components: { MenuItem },
    name: "ActionsWithTasks",

    data() {
      return {
        
      }
    },

    props: {
      dataMenuItem: {
        type: Array,
        default: ()=>[]
      }
    },
  }
</script>
  
<style lang="scss" scoped>
    .active {background: red;}
</style>