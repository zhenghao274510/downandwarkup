<template name="page-head">
	<view class="uni-page-head">
		<view class="uni-page-head-con ">
			<image src="/static/img/fanhui.png" mode="" class="top-back"></image>
			<view class="uni-page-head-right" @click.stop="onClick(1)">
				<view class="uni-page-head-title">{{title}}</view>
				<view class="uni-page-head-right-con">

				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: "page-head",
		props: {
			title: {
				type: String,
				default: ""
			},
		},
		methods: {
			onClick(n) {
				this.$emit("click", n)
			},

		}
	}
</script>
<style lang="scss" scoped>
	.top-back {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 25upx;
		height: 42upx;
	}
	/* pagehead 公共头部样式 */
	.uni-page-head {
		background: #f9f9f9;
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		padding:0 30upx;
		z-index: 999999 !important;
	}
	
	.uni-page-head-con {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 88upx;
		box-sizing: border-box;
	    position: relative;
	}
	.uni-page-head-title {
		font-size: 30upx;
		line-height: 88upx;
		font-size: 38upx;
		font-weight: bold;
		text-align: center;
	}
	
	.uni-page-head-right {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 40%;
		width: 70%;
		font-size: 30upx;
		line-height: 88upx;
	}
	.uni-page-head-right-con{
		padding-left: 30upx;
	}
</style>
