<template>
  <div class="container">
    <fieldset class="fieldset">
      <legend>
        <svg class="icon myIconStyle">
        	<use xlink:href="#icon-peixunpingtai"></use>
        </svg>
        <span class="fieldset_title">工作生活</span>
      </legend>
      <div class="main">
        <div class="item" v-for="item in list" :key="item.id">
					<svg class="icon myIconStyle">
						<use :xlink:href="'#'+item.icon"></use>
					</svg>
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
        icon: 'icon-_shuaqia',
        text: '刷卡信息'
      },{
        id: '002',
        icon: 'icon-basic-information',
        text: '基本信息'
      },{
        id: '003',
        icon: 'icon-shebaochaxun',
        text: '社保信息'
      },{
        id: '004',
        icon: 'icon-jiabanshenpi',
        text: '加班信息'
      },{
        id: '005',
        icon: 'icon-zhufangbutie',
        text: '住房公积金'
      },{
        id: '006',
        icon: 'icon-qingjia',
        text: '请假信息'
      },{
        id: '007',
        icon: 'icon-paibanguanli',
        text: '排班信息'
      },{
        id: '008',
        icon: 'icon-paibanguanli',
        text: '调班信息'
      },{
        id: '009',
        icon: 'icon-_shuaqia',
        text: '分区刷卡'
      },{
        id: '010',
        icon: 'icon-kaoqinyichang',
        text: '异常信息'
      },{
        id: '011',
        icon: 'icon-leasingcloud_nianjiapeizhiguan',
        text: '年休假信息'
      },{
        id: '012',
        icon: 'icon-leasingcloud_nianjiapeizhiguan',
        text: '调休信息'
      },{
        id: '013',
        icon: 'icon-tuandui',
        text: '内部推荐'
      },{
        id: '014',
        icon: 'icon-faqijiangcheng',
        text: '奖惩信息'
      },{
        id: '015',
        icon: 'icon-yinhangqia',
        text: '银行卡信息'
      },{
        id: '016',
        icon: 'icon-yuangonggaiyaox',
        text: '员工有话说'
      },{
        id: '017',
        icon: 'icon-serum',
        text: '即时互动'
      },{
        id: '018',
        icon: 'icon-jisuanxinzi',
        text: '薪资试算'
      },{
        id: '019',
        icon: 'icon-jisuanxinzi',
        text: '薪资单'
      },{
        id: '020',
        icon: 'icon-shoujiweixiu',
        text: '手机电脑维修'
      },{
        id: '021',
        icon: 'icon-icon-test',
        text: '战讯平台'
      },{
        id: '022',
        icon: 'icon-icon-test',
        text: '夏普自频道'
      },{
        id: '023',
        icon: 'icon-serum',
        text: '总务服务'
      },{
        id: '024',
        icon: 'icon-basic-information',
        text: '居住证信息'
      },{
        id: '025',
        icon: 'icon-basic-information',
        text: 'NDA签核'
      },{
        id: '026',
        icon: 'icon-07',
        text: '包工分红'
      },{
        id: '027',
        icon: 'icon-tubiaozhizuomoban-',
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
    padding-top: .1rem
    fieldset
      padding: .1rem .1rem .1rem
      margin: 0 2%;
      border: 1px solid silver
      border-radius: .13rem
      legend
        margin: 0 .2rem
        border: 0
        width: auto
      .main
        margin: .1rem
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
					.myIconStyle
						width: .4rem
						height: .4rem
						margin-top: .2rem
					.fieldset_title
						display: inline-block
						position: relative
						top: -0.11rem
</style>