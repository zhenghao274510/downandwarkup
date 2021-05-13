import Vue from 'vue'
import App from './App'
import api from "@/common/js/api.js"
import http from "@/common/js/request.js"
import pageHead from "@/components/page-head.vue"
Vue.component('page-head',pageHead)
Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype._reqw=http;



// 判断市场常见的几种刘海屏机型
uni.getSystemInfo({
	success: function (res) {
		if(res.screenHeight){
			let height = res.screenHeight;
			console.log("手机型号-------",res.screenHeight);
			if(height<=480){
				Vue.prototype.$is_bang = true
			}else{
				Vue.prototype.$is_bang = false
			}
		}
		
	}
});
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
