// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'

// import '@/plugins/vue-validate'
// import '@/plugins/components'
// import '@/plugins/permission'
Vue.config.productionTip = false
Vue.use(Vuetify)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Vuetify,
  components: { App },
  template: '<App/>'
})
