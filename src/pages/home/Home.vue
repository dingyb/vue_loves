<template>
  <div class="home" ref="home">
    <div class="container">
      <home-header></home-header>
      <v-touch 
        @swipeleft="handleToLeft" 
      >
        <home-icons></home-icons>
        <home-list></home-list>
      </v-touch>
    </div>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeIcons from './components/Icons'
import HomeList from './components/List'
import BScroll from 'better-scroll'
export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  methods: {
    // 左移跳转
    handleToLeft() {
      this.$router.push({path: '/life'})
    },
    handleScroll() {
      this.$nextTick(()=> {
        if(!this.scroll) {
          this.scroll = new BScroll(this.$refs.home)
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
    HomeHeader,
    HomeIcons,
    HomeList
  }
} 
</script>
<style lang="stylus" scoped>
.home
  height: 92vh
  .container
    // height: 92vh
    background: #D3D3D3 
</style>