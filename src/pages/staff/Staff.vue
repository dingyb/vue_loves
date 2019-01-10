<template>
  <div class="container">
    <v-touch 
      @swipeleft="handleToLeft" 
      @swiperight="handleToRight" 
      class="wrapper"
    >
      <div>
        <common-header>
          <template slot="title">
            员工有话说 
          </template>
        </common-header>
        <staff-list></staff-list>
        <staff-inputs></staff-inputs>
      </div>
    </v-touch>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from 'common/Header.vue'
import StaffList from './components/List.vue'
import CommonFooter from '@/pages/common/Footer'
import StaffInputs from './components/Inputs.vue'
export default {
  name: 'Staff',
  methods: {
    // 左移跳转
    handleToLeft() {
      this.$router.push({path: '/mine'})
    },
    // 右移跳转
    handleToRight() {
      this.$router.push({path: '/life'})
    }
  },
  components: {
    CommonHeader,
    StaffList,
    StaffInputs,
    CommonFooter
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    height: 86vh
    margin-top: 6vh
</style>