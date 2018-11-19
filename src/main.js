import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont : 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
  ,theme : {
    primary : "#770404"
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
