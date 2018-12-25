<template>
  <div id="listChild">
    <div class="main_l">
      <img class="img" src="@/assets/img/list/1.png" alt="">
    </div>
    <div class="main_r">
      <p class="main_r_title">开心一笑</p>
      <p class="main_r_ltitle">笑哭,夫妻间也慢慢的都是套路、想买个撒大大撒旦山东省...</p>
      <p class="main_r_des">
        <span class="des_title">公告速递</span>
        <span class="des_date">2018/12/24 上午 10:08:18</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListChild',
  data() {
    return {

    }
  }
}
</script>

<style lang="stylus">
  @import '~style/mixins.styl'
  #listChild
    width: 100%
    height: 1.6rem
    background: white
    margin-bottom: .1rem
    .main_l
      float: left
      width: 25vw
      overflow: hidden
      .img
        width: 1.8rem
        height: 1.4rem
        padding: .1rem .1rem
    .main_r
      float: left
      width: 74vw
      .main_r_title
        color: black
        width: 100%
        padding: .2rem 0 0.1rem .2rem
      .main_r_ltitle
        color: black
        width: 100%
        padding: 0 1rem 0 .2rem
        margin-right: .4rem
        font-size: .23rem
        ellipsis()
      .main_r_des
        color: gray
        width: 100%
        font-size: .22rem
        padding: .4rem 0 0 .2rem
        overflow: hidden
        .des_title
          float: left
        .des_date
          float: right
          padding-right: .4rem
</style>