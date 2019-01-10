<template>
  <div class="container">
    <div class="item" @click="handleClick(item.id)" v-for="item in list" :key="item.id">
			<svg class="icon myIconStyle">
				<use :xlink:href="'#'+item.icon"></use>
			</svg>
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
        icon: 'icon-tuandui',
        text: '内部推荐'
      },{
        id: '002',
        icon: 'icon-jisuanxinzi',
        text: '薪资单'
      },{
        id: '003',
        icon: 'icon-jisuanxinzi',
        text: '薪资试算'
      },{
        id: '004',
        icon: 'icon-jiabanshenpi',
        text: '加班信息'
      },{
        id: '005',
        icon: 'icon-paibanguanli',
        text: '调休信息'
      },{
        id: '006',
        icon: 'icon-_shuaqia',
        text: '刷卡信息'
      },{
        id: '007',
        icon: 'icon-qingjia',
        text: '请假信息'
      },{
        id: '008',
        icon: 'icon-icon-more',
        text: '更多'
      }]
    }
  },
  methods: {
    handleClick(id) {
      if(id == '008') {
        this.$router.push('/life')
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container
    background: white
    width: 100%
    overflow: hidden
    display: flex
    justify-content: space-between
    flex-direction: row
    flex-wrap: wrap
    .item
      width: 25%
      background: white
      font-size: .24rem
      display: flex
      flex-direction: column  
      align-items: center
			.myIconStyle
				width: 0.4rem
				height: 0.4rem
				margin-top: .22rem
			.item-text
				margin: .2rem
</style>