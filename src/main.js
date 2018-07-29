import Vue from 'vue'
import App from './App'
import router from './router'
import uuid from 'uuid';
import store from './store/index'
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
  store,
  components: { App },
  template: '<App/>'
})
