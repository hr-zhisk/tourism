import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入HeaderTop做全局组件
import HeaderTop from './components/HeaderTop.vue'
import FooterBottom from './components/FooterBottom.vue'

Vue.config.productionTip = false

//HeaderTop设置为全局组件
Vue.component('header-top',HeaderTop)
Vue.component('footer-bottom',FooterBottom)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
