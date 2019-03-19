/*
入口JS
 */
import Vue from 'vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import App from './App.vue'
import router from './router'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router
})
