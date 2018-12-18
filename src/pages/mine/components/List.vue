<template>
  <div class="container">
    <p class="item back-color">
      <i class="iconfont item-icon-l">&#xe605;</i>
      <span class="item-text">我的资料</span>
      <i class="iconfont item-icon-r">&#xe605;</i>
    </p>
    <p class="item">
      <i class="iconfont item-icon-l">&#xe605;</i>
      <span class="item-text">常见问题</span>
      <i class="iconfont item-icon-r">&#xe605;</i>
    </p>
    <p class="item back-color">
      <i class="iconfont item-icon-l">&#xe605;</i>
      <span class="item-text">意见反馈</span>
      <i class="iconfont item-icon-r">&#xe605;</i>
    </p>
    <p class="item">
      <i class="iconfont item-icon-l">&#xe605;</i>
      <span class="item-text">关于我们</span>
      <i class="iconfont item-icon-r">&#xe605;</i>
    </p>
    <p class="item back-color">
      <i class="iconfont item-icon-l">&#xe605;</i>
      <span class="item-text">修改密码</span>
      <i class="iconfont item-icon-r">&#xe605;</i>
    </p>
    <p class="item">
      <i class="iconfont item-icon-l">&#xe605;</i>
      <span class="item-text">退出登录</span>
      <i class="iconfont item-icon-r">&#xe605;</i>
    </p>
  </div>
</template>

<script>
export default {
  name: 'MineList',
  methods: {
   
  }
}
</script>

<style lang="stylus" scoped>
  .container
    height: 48vh
    display: flex
    flex-direction: column
    justify-content: space-between
    .item
      height: 8vh
      line-height: 8vh
      overflow: hidden
      padding-left: .4rem
      font-size: .3rem
      background: white
      .item-icon-l
        float: left
      .item-text
        float: left
        padding-left: .3rem
      .item-icon-r 
        float: right
        padding-right: .4rem
    .back-color
      background: #75d3e24a
     
</style>