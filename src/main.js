import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'
import PortalVue from 'portal-vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "@/assets/scss/vendors/bootstrap-vue/bootstrap.scss"
import router from './router'

Vue.config.productionTip = false


// Portal is required for toast like notifications via BS.
Vue.use(PortalVue)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
