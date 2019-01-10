<template>
  <div class="container">
    <p class="item" v-for="item in list">
			<svg class="icon myIconStyle">
				<use :xlink:href="'#'+item.icon"></use>
			</svg>
      <span class="item-text">{{item.text}}</span>
      <i class="iconfont item-icon-r">&#xe617;</i>
    </p>
  </div>
</template>

<script>
export default {
  name: 'MineList',
	data() {
		return {
			list: [{
				id: '1',
				icon: 'icon-ziyuan',
				text: '我的资料'
			},{
				id: '2',
				icon: 'icon-changjianwenti',
				text: '常见问题'
			},{
				id: '3',
				icon: 'icon-yijianfankui',
				text: '意见反馈'
			},{
				id: '4',
				icon: 'icon-guanyu',
				text: '关于我们'
			},{
				id: '5',
				icon: 'icon-xiugaimima',
				text: '修改密码'
			},{
				id: '6',
				icon: 'icon-tuichu',
				text: '退出登录'
			}]
		}
	},
  methods: {
   
  }
}
</script>

<style lang="stylus" scoped>
  .container
    height: 48vh
		.item
			display: flex
			justify-content: space-between
			align-items: center
			height: 8vh
			&:nth-child(odd)
				background:  #b7d1f8
			.myIconStyle
				width: .4rem
				height: .4rem
				padding-left: .3rem
			.item-text
				padding-right: 3.5rem
				font-size: .25rem
			.item-icon-r
				padding-right: .3rem
</style>