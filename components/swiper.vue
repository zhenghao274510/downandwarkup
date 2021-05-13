<template>
	<view class="swiper-content">
		<view class="search-wrapper">
			<view class="swiper-wrapper">
				<swiper class="swiper">
					<swiper-item class="swiper-item" v-for="(item,index) of dataList" :key="index">
						<img :src="item">
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			dataList: {
				type: Array,
				default: []
			}
		},
		data() {
			return {}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.swiper-content {
		position: relative;
	}

	.uni-icon-location-filled {
		color: #FFFFFF;
		font-size: 28upx;
	}

	.img {
		width: 50upx;
		height: 50upx;
	}

	.swiper {
		width: 750upx !important;
		height: 750upx;
	}

	.swiper-item {
		width: 750upx;
		display: block;
	}

	.swiper-item img {
		width: 750upx;
		display: block;
		height: 750upx;
	}
</style>
