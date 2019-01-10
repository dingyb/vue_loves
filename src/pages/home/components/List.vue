<template>
  <div class="container">
    <div class="con-title">
      <div class="today">今日关注</div>
			<div class="list">
				<div @click="handleToggle(index, item.view)" v-for="(item,index) in tabList" :key="index" :class="{active: active === index}">{{item.view}}</div>
			</div>
			<div class="more">
				<span class="more_text">更多</span>
				<svg class="icon myIconStyle">
				　　<use xlink:href="#icon-youjiantou"></use>
				</svg>
				<!-- <i class="iconfont more-icon">&#xe61a;</i> -->
			</div>
    </div>
		<list-child :item="item" v-for="(item,index) in filterList" :key="index">
		</list-child>
  </div>
</template>
<script>
import ListChild from './ListChild.vue'
export default {
  name: 'HomeList',
	props: ['homeList'],
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
      active: 0,
			listData: [],
			view: '全部'
    }
  },
	computed: {
		filterList() {
			switch(this.view){
				case '全部':
					return this.homeList
					break;
				case '公告速递':
					return this.homeList.filter(function(item) {
						return item.type == '公告速递'
					})
					break;
				case '培训动态':
					return this.homeList.filter(function(item) {
						return item.type == '培训动态'
					})
					break;
			}
		}
	},
	created() {
		this.listData = this.homeList
	},
  methods: {
    handleToggle(index, val) {
      this.active = index
			this.view = val
    }
  },
  components: {
    ListChild
  }
}
</script>
<style lang="stylus" scoped>
.container
	margin-top: .12rem
	margin-bottom: .12rem
  .con-title
		background: white
		margin-bottom: .1rem
		display: flex
		justify-content: space-between
		align-items: center
		box-sizing: border-box
		.today
			color: orange
			padding-left: .2rem
			font-size: .3rem
		.list
			display: flex
			flex-direction: row
			div
				padding: .2rem 0
				font-size: .24rem
				color: gray
				margin: 0 .18rem
			.active
				color: black
				border-bottom: 2px solid black
		.more
			display: flex
			justify-content: center
			align-items: center
			color: gray
			font-size: .25rem
			.myIconStyle
				width: 0.4rem
				height: 0.4rem
</style>