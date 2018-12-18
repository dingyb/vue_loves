<template>
  <div class="container">
    <div class="wrap-info">
      <div class="authorImg"></div>
      <p class="info">丁渊博 <span>F7688516</span></p>
    </div>
    <div class="wrap-img">
      <img class="bj" src="@/assets/img/1.jpg" alt="bj">
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'MineHeader',
  methods: {
   
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl'
  .container
    position: relative
    width: 100%
    height: 44vh
    verticalcolumns()
    background-color: rgba(96, 143, 233, 1)
    .wrap-info
      verticalcolumns()
      .authorImg
        width: 1rem
        height: 1rem
        border-radius: 50%
        border:1px solid white
      .info
        color: white
        font-size: .4rem
        margin-top: .2rem
    .wrap-img
      position: absolute
      bottom: 0
      .bj 
        width: 100%
   
</style>