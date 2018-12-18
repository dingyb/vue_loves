<template>
  <div class="container">
    <div class="con-title">
      <div class="today">今日关注</div>
      <ul class="list">
        <li @click="handleToggle(index, item.type)" v-for="(item,index) in tabList" :key="index" :class="{active: active === index}">{{item.view}}</li>
      </ul>
      <div class="more">
        更多
        <i class="iconfont more-icon">&#xe61a;</i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeList',
  data() {
    return {
      tabList: [{
        type: 'all',
        view: '全部'
      },{
        type: 'courier',
        view: '公告速递'
      },{
        type: 'train',
        view: '培训动态'
      }],
      active: 0
    }
  },
  methods: {
    handleToggle(index, val) {
      this.active = index
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container
    margin-top: .2rem
    .con-title
      overflow: hidden
      height: .8rem
      line-height: .8rem
      background: white
      .today
        float: left
        color: orange
        padding-left: .2rem
        font-size: .3rem
      .list
        float: left
        margin-left: .5rem
        margin-bottom: .1rem
        li
          float: left
          margin: 0 .3rem
          font-size: .2rem
          color: gray
        .active
          color: red
          border-bottom: 2px solid red
      .more
        float: right
        color: gray
        font-size: .27rem
        .more-icon
          float: right
          display: block
</style>