<template>
  <div class="container">
    <fieldset class="fieldset">
      <legend>
        <svg class="icon myIconStyle">
        	<use xlink:href="#icon-huahui-"></use>
        </svg>
        <span class="fieldset_title">健康生活</span>
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
  name: 'LifeHealthList',
  data() {
    return {
      list: [{
        id: '001',
        icon: 'icon-basic-information',
        text: '体检信息'
      },{
        id: '002',
        icon: 'icon-huahui-',
        text: '职业健康检查'
      },{
        id: '003',
        icon: '',
        text: ''
      },{
        id: '004',
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
					.myIconStyle
						width: .4rem
						height: .4rem
						margin-top: .22rem
					.fieldset_title
						display: inline-block
						position: relative
						top: -0.11rem
</style>