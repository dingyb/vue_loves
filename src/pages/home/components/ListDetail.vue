<template>
	<div id="listdetail">
		<common-header>
			<template slot="icon">
				<i class="iconfont item-icon" @click="handleIconClick">&#xe645;</i>
			</template>
			<template slot="title">
				{{detailData.type}}
			</template>
		</common-header>
		<div id="main">
			<div class="title">
				{{detailData.title}}
			</div>
			<div class="date">
				{{detailData.date}}
			</div>
			<img :src="detailData.img" class="imgs" alt="">
			<div class="content">
				{{detailData.content}}
			</div>
		</div>
	</div>
</template>

<script>
	import CommonHeader from 'common/Header.vue'
	export default {
		name: 'ListDetail',
		data() {
			return {
				detailData: {}
			}
		},
		methods: {
			handleIconClick() {
				this.$router.go(-1)
			},
			getDetailData() {
				this.$axios.get('/api/detail.json/?id='+this.$route.params.id).then(res => {
				  this.detailData = res.data
					console.log(this.detailData)
				})
			}
		},
		mounted(){
			this.getDetailData();
		},
		components: {
			CommonHeader
		}
	}
</script>

<style lang="stylus">
#main
	margin-top: 7vh
	.title
		font-size: 0.35rem
		text-align: center
		font-weight: bold
		color: black
	.date
		font-size: 0.2rem
		color: gray
		text-align: right
		margin:.1rem .2rem 
	.imgs
		display: block
		margin:0 auto
	.content
		margin-top: 0.2rem
		font-size: .25rem
		text-indent: .2rem
</style>
