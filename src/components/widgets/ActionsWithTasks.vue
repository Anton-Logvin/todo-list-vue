<template>
  <div>
    <menu-item 
      v-for="(item, index) in itemsMenu" 
      :key="item.name" 
      :item = item
      :index="index"
      @click.native="clickMenuItem(index)"
      :tasksLength="tasksLength"
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
      // isActive: false
      index: 0,
      itemsMenu: [   
        {id: 1, name: "All Tasks", link: '/', imageSrc: '' , isActive: false,},
        {id: 2, name: "Starred", link: 'starred', isActive: false, imageSrc: require('@/assets/image/star.svg'), },
        {id: 3, name: "Impotant", link: 'impotant', isActive: false, imageSrc: require('@/assets/image/alert-circle.svg'),},
        {id: 4, name: "Completed", link: 'completed', isActive: false, imageSrc: require('@/assets/image/check-circle.svg'),},
        {id: 5, name: "Deleted", link: 'deleted', isActive: false, imageSrc: require('@/assets/image/trash-2.svg'), },
      ]
    }
  },

  computed: {
    tasksLength() {
      return [
        {id: 1, tasks: this.$store.getters['getTasks']},
        {id: 2, tasks: this.$store.getters['getStarredTasks']},
        {id: 3, tasks: this.$store.getters['getImpotantTasks']},
        {id: 4, tasks: this.$store.getters['getCompletedTasks']},
        {id: 5, tasks: this.$store.getters['getDeletedTasks']},
      ]
    }
  },

  methods: {
    clickMenuItem(index) {
      this.itemsMenu.forEach(item=> item.isActive = false)
      this.itemsMenu[index].isActive = true
    }
  }
}
</script>
  
<style lang="scss" scoped>
  // .active {
  //   background: rgb(149, 132, 196);
  // }
</style>