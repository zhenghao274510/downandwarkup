<template>
	<view class="share_con">
		<view class="d-flex d-items-center img_con" :class="[is_lhp?'is_iphone4':'is_lhp']">
			<view class="d-flex d-items-center d-content-center img-list">
				<image src="/static/img/4.png" mode="widthFix"></image>
			</view>
			<view class="d-flex d-items-center d-content-center img-list">
				<image src="/static/img/5.png" mode="widthFix"></image>
			</view>
			<view class="d-flex d-items-center d-content-center img-list">
				<image src="/static/img/6.png" mode="widthFix"></image>
			</view>
			<view class="d-flex d-items-center d-content-center img-list">
				<image src="/static/img/7.png" mode="widthFix"></image>
			</view>
		</view>


		<view class="bottom_con d-flex d-items-center d-between">
			<view class="bottom_text uni-flex">
				<image src="/static/img/logo.png" class="icon"></image>
				<view class="">
					<view class="" style="color: #292929;font-weight:bold;font-size:30upx;">
						神树排名
					</view>
					<view class="" style="color: #999999;font-size: 22upx;">
						你会越来越理性
					</view>
				</view>

			</view>
			<view class="bottom_btn" hover-class="btn-hover" @click="open">
				下载
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				is_lhp: false,
				iphoneSchema: 'shenShuPaiMingiOS886://',
				iphoneDownUrl: 'http://www.godtree.world/share',
				androidSchema: 'scheme://sspm/start',
				androidDownUrl: 'http://www.godtree.world/share'
			}
		},
		onLoad() {
			console.log(this.$is_bang)
			this.is_lhp = this.$is_bang;
			this.open()
		},
		methods: {
			open() {
				var this_ = this;
				//微信
				if (this_.isWeixin()) {
					uni.showModal({
						title: '提示',
						content: '请点击右上角选择在浏览器中打开',
						showCancel:false,
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				} else { //非微信浏览器
					if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
						var loadDateTime = new Date();
						window.setTimeout(()=> {
							var timeOutDateTime = new Date();
							if (timeOutDateTime - loadDateTime < 5000) {
								window.location = this_.iphoneDownUrl; //ios下载地址
							} else {
								window.close();
							}
						}, 25);
						window.location = this.iphoneSchema;
					} else if (navigator.userAgent.match(/android/i)) {
						try {
							window.location = this_.androidSchema;
							setTimeout(function() {
								window.location = this_.androidDownUrl; //android下载地址

							}, 500);
						} catch (e) {}
					}
				}

			},
			isWeixin() { //判断是否是微信
				var ua = navigator.userAgent.toLowerCase();
				if (ua.match(/MicroMessenger/i) == "micromessenger") {
					return true;
				} else {
					return false;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.icon {
		width: 80upx;
		height: 80upx;
		margin-right: 20upx;
	}

	.share_con {
		width: 100%;
		height: 100%;
		background: url('@~static/img/bg.png');
		background-size: 100% 100%;
	}

	.bottom_con {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 120upx;
		padding: 0 20upx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		z-index: 999;
	}

	.bottom_btn {
		width: 200upx;
		height: 72upx;
		line-height: 72upx;
		border-radius: 6upx;
		background-color: #7225d9;
		color: #FFFFFF;
		text-align: center;
	}

	.is_lhp {
		padding: 260upx 100upx 100upx;
	}

	.is_iphone4 {
		padding: 80upx 100upx 0;

	}

	.img_con {
		flex-wrap: wrap;
		box-sizing: border-box;

	}

	.img-list {
		width: 50%;
		padding: 20upx;
		box-sizing: border-box;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.bottom_text {
		display: flex;
	}
</style>
