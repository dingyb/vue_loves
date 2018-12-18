<template>
  <div class="container">
    <fieldset class="fieldset">
      <legend>
        <i class="iconfont item-icon">&#xe61a;</i>
        工作生活
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
  name: 'LifeWorkList',
  data() {
    return {
      list: [{
        id: '001',
        icon: '&#xe61a;',
        text: '刷卡信息'
      },{
        id: '002',
        icon: '&#xe61a;',
        text: '基本信息'
      },{
        id: '003',
        icon: '&#xe61a;',
        text: '社保信息'
      },{
        id: '004',
        icon: '&#xe61a;',
        text: '加班信息'
      },{
        id: '005',
        icon: '&#xe61a;',
        text: '住房公积金'
      },{
        id: '006',
        icon: '&#xe61a;',
        text: '请假信息'
      },{
        id: '007',
        icon: '&#xe61a;',
        text: '排班信息'
      },{
        id: '008',
        icon: '&#xe61a;',
        text: '调班信息'
      },{
        id: '009',
        icon: '&#xe61a;',
        text: '分区刷卡'
      },{
        id: '010',
        icon: '&#xe61a;',
        text: '异常信息'
      },{
        id: '011',
        icon: '&#xe61a;',
        text: '年休假信息'
      },{
        id: '012',
        icon: '&#xe61a;',
        text: '调休信息'
      },{
        id: '013',
        icon: '&#xe61a;',
        text: '内部推荐'
      },{
        id: '014',
        icon: '&#xe61a;',
        text: '奖惩信息'
      },{
        id: '015',
        icon: '&#xe61a;',
        text: '银行卡信息'
      },{
        id: '016',
        icon: '&#xe61a;',
        text: '员工有话说'
      },{
        id: '017',
        icon: '&#xe61a;',
        text: '即时互动'
      },{
        id: '018',
        icon: '&#xe61a;',
        text: '薪资试算'
      },{
        id: '019',
        icon: '&#xe61a;',
        text: '薪资单'
      },{
        id: '020',
        icon: '&#xe61a;',
        text: '手机电脑维修'
      },{
        id: '021',
        icon: '&#xe61a;',
        text: '战讯平台'
      },{
        id: '022',
        icon: '&#xe61a;',
        text: '夏普自频道'
      },{
        id: '023',
        icon: '&#xe61a;',
        text: '总务服务'
      },{
        id: '024',
        icon: '&#xe61a;',
        text: '居住证信息'
      },{
        id: '025',
        icon: '&#xe61a;',
        text: 'NDA签核'
      },{
        id: '026',
        icon: '&#xe61a;',
        text: '包工分红'
      },{
        id: '027',
        icon: '&#xe61a;',
        text: '加班切结书'
      },{
        id: '028',
        icon: '',
        text: ''
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