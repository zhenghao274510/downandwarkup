<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	*{
		margin: 0;
		padding: 0;
	}
	view{
		color: #333333;
		font-size: 28upx;
	}
	page{
		width: 100%;
		min-width:640upx;
		max-width:1120upx ;
		height: 100%;
		overflow-x: hidden;
	}
	.btn-hover{
		opacity: .6;
	}
	.d-flex{
		display: flex;
	}
	.d-items-center{
		align-items: center;
	}
	.d-between{
		justify-content: space-between;
	}
	.d-content-center{
		justify-content:center;
	}
	.btnHover{
		opacity: .7;
	}
</style>
