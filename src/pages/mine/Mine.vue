<template>
  <div>
    <v-touch @swiperight="handleToRight" class="wrapper">
      <MineHeader></MineHeader>
      <MineList></MineList>
    </v-touch>
  </div>
</template>

<script>
import MineHeader from './components/Header.vue'
import MineList from './components/List.vue'
export default {
  name: 'Mine',
  methods: {
    handleToRight() {
      this.$router.push({path: '/staff'})
    }
  },
  components: {
    MineHeader,
    MineList
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    height: 92vh
    overflow: hidden
</style>