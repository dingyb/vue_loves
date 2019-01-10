<template>
  <div>
    <div class="home" ref="home">
      <div class="container">
        <home-header :homeHeader="homeHeader"></home-header>
        <v-touch 
          @swipeleft="handleToLeft" 
        >
          <home-icons></home-icons>
          <home-list :homeList="homeList"></home-list>
        </v-touch>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeIcons from './components/Icons'
import HomeList from './components/List'
import CommonFooter from '@/pages/common/Footer'
import BScroll from 'better-scroll'
export default {
  name: 'Home',
  data() {
    return {
      homeHeader: [],
			homeList: []
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
				this.homeList = datas.list
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
    HomeList,
    CommonFooter
  }
} 
</script>
<style lang="stylus" scoped>
.home
  height: 92vh
  .container
    background: #D3D3D3 
</style>