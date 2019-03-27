import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ApiService from '@/services/api.service'
import config from '@/config'

ApiService.init('http://localhost:3001/editor')
// ApiService.init('http://api.theecho.in/api/editor')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
