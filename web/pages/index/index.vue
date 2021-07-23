<template>
	<view class="indexContainer">
		<view class="header">
			<image class="logo" src="../../static/images/logo.png" mode=""></image>
			<view class="search">
				<view class="iconfont icon-sousuo"></view>
				<input class="seachInput" type="text" value="" placeholder-class="placeholder"  placeholder="搜索商品"/>
			</view>
			<button class="username">哎呀！！！</button>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				title :'Hello'
			}
		},
		onLoad() {

		},
		methods :{

		}
	}
</script>

<style lang="stylus">
	.indexContainer
		.header
			display flex
			align-items  center
			padding-top 20upx
			.logo
				width 118upx
				height 40upx
				margin  0 20upx
				flex-shrink  0
			.search
				background #ccc
				height 60upx
				flex-grow 1
				flex-shrink  1
				position relative
				padding-left 60upx
				border-radius 15upx
				.iconfont
					position absolute
					left 20upx
					top 50%
					transform translateY(-50%)
				.seachInput
					font-size 24upx
					.placeholder
						text-align center
						text-indent -60upx
			.username
				width 130upx
				height 60upx
				font-size 26upx
				line-height 60upx
				color red
				flex-shrink  0
				margin  0 20upx
</style>
