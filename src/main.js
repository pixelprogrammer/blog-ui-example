import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CxltToastr from 'cxlt-vue2-toastr'

Vue.use(CxltToastr,{
  position: "bottom right",
  successColor: "rgb(18, 236, 135)",
  timeOut: 5000
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
