<template>
	<div class="wrap">
		<swiper :options="swiperOption">
			<swiper-slide v-for="item in homeHeader" :key="item.id">
				<img class="wrap-img" :src="item.imgUrl" alt="">
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
	export default {
		name: 'HomeHeader',
		props: ['homeHeader'],
		data() {
			return {
				swiperOption: { 
					autoplay: {
						delay: 2000,
					},
					loop: true,	// 循环播放
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
				}
			}
		}
	}
</script>
<style lang="stylus" scoped>
.wrap
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 50%
  background: '#ccc'
  .wrap-img
  	width: 100%
  	height: 50vw
.wrap>>>.swiper-pagination-bullet
	background: white !important
</style>
