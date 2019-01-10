<template>
  <div>
    <common-header>
      <template slot="title">
        生活助手
      </template>
    </common-header>
    <v-touch 
      @swipeleft="handleToLeft" 
      @swiperight="handleToRight" 
    >
      <div class="wrapper" ref="wrapper">
        <div class="content">
          <work-list></work-list>
          <education-list></education-list>
          <recreation-list></recreation-list>
          <health-list></health-list>
          <safe-list></safe-list>
          <div class="whiteBlock"></div>
        </div>
      </div>
    </v-touch>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from 'common/Header.vue'
import WorkList from './components/WorkList.vue'
import EducationList from './components/EducationList.vue'
import RecreationList from './components/RecreationList.vue'
import HealthList from './components/HealthList.vue'
import SafeList from './components/SafeList.vue'
import CommonFooter from '@/pages/common/Footer'
import BScroll from 'better-scroll'
export default {
  name: 'Life',
  methods: {
    // 左移跳转
    handleToLeft() {
      this.$router.push({path: '/staff'})
    },
    // 右移跳转
    handleToRight() {
      this.$router.push({path: '/'})
    },
    handleScroll() {
      this.$nextTick(()=> {
        if(!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper)
        }else {
          this.scroll.refresh();
        }
      })
    }
  },
  mounted() {
    this.handleScroll()
  },
  components: {
    CommonHeader,
    WorkList,
    EducationList,
    RecreationList,
    HealthList,
    SafeList,
    CommonFooter
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    position: absolute
    top: 6vh
    height: 86vh
    .content
      // height: auto
      .whiteBlock
        height: 3rem
        width: 100%
</style>