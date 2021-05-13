<template>
	<view class="uni-flex">
		<image :src="merchant_logo" mode="" class="shopimg"></image>
		<view class="uni-flex-item">
			<view class="shopTitle">
				{{merchant_name}}
			</view>
			<view class="shopColl">
				{{collectNumber}}人收藏
			</view>
		</view>
		<image src="../static/img/shangpin_xiayiye.png" mode="" class="rightImg"></image>
	</view>
</template>

<script>
	export default {
		props: {
			collectNumber: {
				type: String
			}, //收藏数量
			merchant_name: {
				type: String
			}, // 商家名称
			merchant_logo: {
				type: String
			}, // 商人图片
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.uni-flex {
		position: relative;
		display: flex;
		padding: 30upx;
		background-color: #FFFFFF;
		border-bottom: 16upx solid #F8F8F8;
	}

	.shopimg {
		width: 154upx;
		height: 120upx;
		border-radius: 6upx;
		margin-right: 30upx;
	}
	.shopTitle {
		font-size: 30upx;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		line-height: 60upx;
	}

	.shopColl {
		font-size: 26upx;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		line-height: 42upx;
	}

	.rightImg {
		width: 18upx;
		height: 31upx;
		position: absolute;
		right: 30upx;
		top: 30%;
	}
</style>
