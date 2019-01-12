import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import router from './router/router.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  data() {
    return {
    }
  },
}).$mount('#app')
