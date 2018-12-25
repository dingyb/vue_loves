<template>
  <div class="wrap">
    <div @click="switchTo('/')" class='item' :class="{active: '/' === $route.path}"> 
      <i class="iconfont item-icon">&#xe61a;</i>
      <p>首页</p>
    </div> 
    <div @click="switchTo('/life')" class='item' :class="{active: '/life' === $route.path}">   
       <i class="iconfont item-icon">&#xe61f;</i>
       <p>生活助手</p>
    </div>
    <div @click="switchTo('/staff')" class='item' :class="{active: '/staff' === $route.path}">
      <i class="iconfont item-icon">&#xe63c;</i>
      <p>员工有话说</p>
    </div>
     <div @click="switchTo('/mine')" class='item' :class="{active: '/mine' === $route.path}"> 
      <i class="iconfont item-icon">&#xe605;</i>
      <p>我的</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'CommonFooter',
    data() {
      return {
      }
    },
    methods: {
      switchTo(path) {
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" scoped>
 .wrap 
  position: fixed
  display: flex
  justify-content: space-around
  z-index: 99
  bottom: 0
  width: 100%
  height: 8vh
  background: #EBEBEB
  .item 
    padding-top:0.2rem
    p
      font-size: 0.24rem
    .item-icon
      display: block
      font-size: 0.4rem
      padding-bottom: 0.1rem
      text-align: center
  .active 
    color: #027FFF
    font-weight: bold
</style>
