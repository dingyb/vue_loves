<template>
  <div class="container">
    <div class="item">
      <i class="iconfont item-icon">&#xe605;</i>
      <p class="item-text">投诉</p>
    </div>
    <div class="item">
      <i class="iconfont item-icon">&#xe605;</i>
      <p class="item-text">咨询</p>
    </div>
    <div class="item">
      <i class="iconfont item-icon">&#xe605;</i>
      <p class="item-text">建议</p>
    </div>
    <div class="item">
      <i class="iconfont item-icon">&#xe605;</i>
      <p class="item-text">报修</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StaffList',
  data() {
    return {
      
    }
  },
  methods: {
   
  }
} 
</script>
<style lang="stylus" scoped>
  .container
    box-sizing: border-box
    width: 94%
    height: 70vw
    margin: 3%
    margin-top: 1.2rem
    border:1px solid gray
    border-radius: .1rem
    display: flex
    flex-wrap: wrap
    box-shadow: 2px 2px 10px gray
    .item
      box-sizing: border-box
      width:50%;
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      &:nth-child(odd)
        border-right: 1px solid gray
      &:nth-child(1)
        border-bottom: 1px solid gray 
      &:nth-child(2)
        border-bottom: 1px solid gray  
      .item-icon
        font-size: 1rem
      .item-text
        padding-top: .3rem
</style>