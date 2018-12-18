<template>
  <div class="container">
    <div class="item" v-for="item in list" :key="item.id">
      <p><i class="iconfont item-icon" v-html="item.icon"></i></p>
      <p class="item-text">{{item.text}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeIcon',
  data() {
    return {
      list: [{
        id: '001',
        icon: '&#xe61a;',
        text: '内部推荐'
      },{
        id: '002',
        icon: '&#xe61a;',
        text: '薪资单'
      },{
        id: '003',
        icon: '&#xe61a;',
        text: '薪资试算'
      },{
        id: '004',
        icon: '&#xe61a;',
        text: '加班信息'
      },{
        id: '005',
        icon: '&#xe61a;',
        text: '调休信息'
      },{
        id: '006',
        icon: '&#xe61a;',
        text: '刷卡信息'
      },{
        id: '007',
        icon: '&#xe61a;',
        text: '请假信息'
      },{
        id: '008',
        icon: '&#xe61a;',
        text: '更多'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container
    background: white
    width: 100%
    height: 40vw
    overflow: hidden
    display: flex
    justify-content: space-between
    flex-direction: row
    flex-wrap: wrap
    .item
      width: 25%
      font-size: .2rem
      display: flex
      flex-direction: column  
      align-items: center
      .item-icon
        display: block
        margin-top: .3rem
      .item-text
        padding: .3rem 0
    
</style>