<<<<<<< HEAD
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify'
=======
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import './plugins/vuetify'
>>>>>>> f01425fae5a4dc5d683c1f04788f7833d7448719
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont : 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
  ,theme : {
    primary : "#770404"
  }
});

Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

