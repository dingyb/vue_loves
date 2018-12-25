// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入初始化css
import '@/assets/style/border.css' 
import '@/assets/style/reset.css'
// 引入fastclick 解决300毫秒延迟
import fastClick from 'fastclick'
// 全局引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 全局引入图标库
import './assets/style/iconfont/iconfont.css'
import axios from 'axios'
import VueTouch from 'vue-touch'

fastClick.attach(document.body) // 实例化fastclick
Vue.use(VueAwesomeSwiper) 
Vue.use(VueTouch, {name: 'v-touch'})
// 全局注册axios
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
