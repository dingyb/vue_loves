<template>
  <div class="container">
    <p class="item-text">我的有话说</p>
    <i class="iconfont item-icon">&#xe605;</i>
  </div>
</template>

<script>
export default {
  name: 'StaffInputs',
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  .container
    width: 94%
    height: .8rem
    margin: 3%
    border-radius: .15rem
    line-height: .8rem
    box-shadow: 2px 2px 10px gray
    .item-text
      float: left
      padding-left: .3rem
    .item-icon
      float: right
      padding-right: .3rem
</style>