/*
入口JS
 */
import Vue from 'vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import App from './App.vue'
import router from './router'
import $ from 'jquery'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router
})
