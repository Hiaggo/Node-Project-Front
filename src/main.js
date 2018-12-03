import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'

import header from '@/components/header'
import sidebar from '@/components/sidebar'

import base from '@/components/base'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

Vue.component('my-header', header);
Vue.component('my-sidebar', sidebar);


new Vue({
  router,
  watch: {
    '$route'(to, from) {
      this.$root.$emit('updateWrapper');
    }
  },
  render: h => h(App),
}).$mount('#app')