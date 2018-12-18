<template>
	<div class="wrap">
		<swiper :options="swiperOption">
			<swiper-slide>
				<img class="wrap-img" src="http://img1.qunarzz.com/piao/fusion/1812/e0/7aed5dde53dabe02.jpg_750x200_9b7a65fd.jpg" alt="">
			</swiper-slide>
			<swiper-slide>
				<img class="wrap-img" src="http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg" alt="">
			</swiper-slide>
			<swiper-slide>
				<img class="wrap-img" src="http://img1.qunarzz.com/piao/fusion/1811/b7/1e9c4ca462741f02.jpg_750x200_842d5261.jpg" alt="">
			</swiper-slide>
			<swiper-slide>
				<img class="wrap-img" src="http://img1.qunarzz.com/piao/fusion/1812/d5/4d86b63fd4c8202.jpg_750x200_146446f4.jpg" alt="">
			</swiper-slide>
			<swiper-slide>
				<img class="wrap-img" src="http://img1.qunarzz.com/piao/fusion/1809/61/44400d6591891202.jpg_750x200_7565a05c.jpg" alt="">
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
	export default {
		name: 'HomeHeader',
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
