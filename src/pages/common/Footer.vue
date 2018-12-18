<template>
  <div class="wrap">
    <router-link to="/" tag="div" class='item active'>
      <i class="iconfont item-icon">&#xe61a;</i>
      <p>首页</p>
    </router-link>
    <router-link to="/life" tag="div" class='item'>
       <i class="iconfont item-icon">&#xe61f;</i>
       <p>生活助手</p>
    </router-link>
    <router-link to="/staff" tag="div" class='item'>
      <i class="iconfont item-icon">&#xe63c;</i>
      <p>员工有话说</p>
    </router-link>
    <router-link to="/mine" tag="div" class='item'>
      <i class="iconfont item-icon">&#xe605;</i>
      <p>我的</p>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: 'CommonFooter',
    data() {
      return {
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
    padding-top:0.14rem
    p
      font-size: 0.22rem
    .item-icon
      display: block
      font-size: 0.4rem
      padding-bottom: 0.1rem
      text-align: center
  .active 
    color: red
</style>
