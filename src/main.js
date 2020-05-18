import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

/**
 * 引入样式
 */
import 'normalize.css' // 样式重置
import './assets/style/global.scss' // 全局样式

/**
 * 引入脚本
 */
// import './assets/js/api-dev' // 模拟接口，生产环境需要注释掉
import API from './assets/js/api'
// import VueJsonp from 'vue-jsonp'

// 然后在main.js文件里进行引用
import '@/assets/js/core/index'
import common from '@/assets/js/core/config'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
import { DatePicker } from 'element-ui'
import { Calendar } from 'vant'
Vue.use(DatePicker)
Vue.use(Calendar)
Vue.use(dataV)
// If you want to setup the global timeout, just:
// Vue.use(VueJsonp, 5000)
/**
 * 扩展Vue
 */
Vue.prototype.$eventBus = new Vue({}) // 全局事件总线

Vue.config.productionTip = false
Vue.config.performance = true
// 自动把components/common文件夹的公共组件注册到全局，可以在各个页面使用，不用再单独引入
Vue.use(common)

let app = null
const timeNum = 9 * 60 * 1000
let timer = 0
function initPage () {
  /* eslint-disable no-new */
  app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
async function getIdentifyingCode () {
  const { __statusCode, data } = await API.getDataFromInterface(API.getIdentifyingCode)
  if (Object.is(__statusCode, '1')) {
    if (!app) {
      initPage()
    }
    // 就把数据放到localStorage中，方便使用
    window.localStorage.setItem('IdentifyingCode', data.IdentifyingCode)
    window.localStorage.setItem('ExpiryTime', data.ExpiryTime)
  }
}
// 这个方法时之前的大屏部署打通cas认证的方法，后面有了client.jar，这个方法就不用了
// Vue.jsonp(API.casUrl).then(res => {
//   console.log('连接接口平台res =', res)
//   const data = res.data
//   if (data) {
//     window.userCode = data
//   }
//   getIdentifyingCode()
// }).catch(error => {
//   console.log('连接接口平台失败')
//   console.log('error=', error)
//   // getIdentifyingCode()
// })
if (timer) {
  window.clearInterval(this.timer)
}
timer = window.setInterval(getIdentifyingCode, timeNum)
getIdentifyingCode()
console.log(window.screen.availWidth)
