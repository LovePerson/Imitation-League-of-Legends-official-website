import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入全局重置样式
import "@/assets/css/reset.css"

// 导入路由
import router from "./router"


new Vue({
  // 挂载路由实例对象
  router,
  render: h => h(App),
}).$mount('#app')
