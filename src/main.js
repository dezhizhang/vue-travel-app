import Vue from 'vue'
import App from './App'
import router from './router'
import uuid from 'uuid';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import FastClick from 'fastclick'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
FastClick.attach(document.body);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
