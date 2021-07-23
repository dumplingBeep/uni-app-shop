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
		
		<!-- 导航滑动区域 -->
		<scroll-view scroll-x class="navScroll" v-if="indexData.kingKongModule">
			<view class="navItem"
			:class="currentNavIndex === -1 ? 'active' : ''"
			@click="switchNav(-1)"
			>推荐</view>
			<view class="navItem"
			:class="currentNavIndex === index ? 'active' : ''"
			v-for="(kingKong, index) in indexData.kingKongModule.kingKongList"
			:key="kingKong.L1Id"
			@click="switchNav(index)"
			>{{kingKong.text}}</view>
		</scroll-view>
	</view>
</template>

<script>
	import req from '../../utils/req.js';
	export default {
		data() {
			return {
				indexData: {},
				currentNavIndex: -1
			}
		},
		onLoad() {

		},
		async mounted() {
			// 获取首页所有数据(发送请求)
			const data = await req('/getIndexData');
			this.indexData = data;
		},
		methods :{
			// 切换导航项
			switchNav(index){
				this.currentNavIndex = index;
			}
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
		.navScroll
			// display flex
			white-space nowrap
			.navItem
				position relative
				display inline-block
				width 140upx
				height 80upx
				font-size 28upx
				text-align center
				line-height 80upx
				&.active::after
					content ""
					height 4upx
					width 100%
					position absolute
					bottom 4upx
					left 0
					background red
</style>
