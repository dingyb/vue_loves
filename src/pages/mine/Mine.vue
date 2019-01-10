<template>
  <div>
    <v-touch @swiperight="handleToRight" class="wrapper">
      <MineHeader></MineHeader>
      <MineList></MineList>
    </v-touch>
    <common-footer></common-footer>
  </div>
</template>

<script>
import MineHeader from './components/Header.vue'
import CommonFooter from '@/pages/common/Footer'
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
    MineList,
    CommonFooter
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    height: 92vh
    overflow: hidden
</style>