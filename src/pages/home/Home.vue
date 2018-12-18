<template>
  <div>
    <div class="container">
      <home-header></home-header>
      <v-touch 
        @swipeleft="handleToLeft" 
        class="wrapper"
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
  },
  components: {
    HomeHeader,
    HomeIcons,
    HomeList
  }
} 
</script>
<style lang="stylus" scoped>
  .container
    height: 92vh
    background: #D3D3D3 
</style>