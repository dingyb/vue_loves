<template>
  <div class="container">
    <fieldset class="fieldset">
      <legend>
        <i class="iconfont item-icon">&#xe61a;</i>
        娱乐生活
      </legend>
      <div class="main">
        <div class="item" v-for="item in list" :key="item.id">
          <p><i class="iconfont item-icon" v-html="item.icon"></i></p>
          <p class="item-text">{{item.text}}</p>
        </div>
      </div>
    </fieldset>
  </div>
</template>
<script>
export default {
  name: 'LifeRecreationList',
  data() {
    return {
      list: [{
        id: '001',
        icon: '&#xe61a;',
        text: '轻松一刻'
      }]
    }
  },
  methods: {
    
  }
} 
</script>
<style lang="stylus" scoped>
  .container
    padding-top: .3rem
    fieldset
      padding: .1rem .1rem .1rem;
      margin: 0 2%;
      border: 1px solid silver;
      border-radius: .13rem
      legend
        margin: 0 .2rem;
        border: 0;
        width: auto;
      .main
        margin: .1rem
        // border: 1px solid red
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
          border-bottom: 1px solid gray
          &:nth-last-child(-n+4)
            border: 0
          .item-icon
            display: block
            margin-top: .3rem
          .item-text
            padding: .3rem 0
</style>