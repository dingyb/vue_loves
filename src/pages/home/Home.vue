<template>
  <div class="home" ref="home">
    <div class="container">
      <home-header :homeHeader="homeHeader"></home-header>
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
      homeHeader: []
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
          this.scroll = new BScroll(this.$refs.home, {
            click: true,
            scrollY: true,
            probeType: 3
          })
        }else {
          this.scroll.refresh();
        }
        // touchEnd(手指离开以后触发) 
        this.scroll.on('touchEnd', (pos) => {
          if(this.scroll.maxScrollY>pos.y + 10) {
            console.log('加载更多')
          }
        })
      })
    },
    getReqData() {
      this.$axios.get('/api/home.json').then(res => {
        const datas = res.data
        this.homeHeader = datas.swiper
      })
    }
  },
  mounted() {
    this.handleScroll()
    this.getReqData()
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