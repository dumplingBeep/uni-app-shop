<template>
	<view class="recomment-wrapper">
		<swiper class="swiper-container" circular :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-img" src="../../static/images/index/1.webp"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-img" src="../../static/images/index/2.webp"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-img" src="../../static/images/index/3.webp"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"Recomment",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="stylus">
	.recomment-wrapper
		.swiper-container
			height 300upx
			.swiper-item
				width 100%
				height 100%
				.swiper-img
					width 100%
					height 100%
</style>
