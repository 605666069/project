// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from "./router"
import App from './App'
import Iview from "iview"
import 'iview/dist/styles/iview.css';
import store from '@/store'
import echarts from "echarts"
import "echarts/extension/bmap/bmap"
import 'animate.css/animate.min.css'
import VueClipboard from 'vue-clipboard2'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import '@/assets/css/index.css'

import echarts_data from '@/api/data.js'
Vue.prototype.echarts_data = echarts_data;

import global from '@/store/global.js'
Vue.prototype.global = global;
//import geoCoordMap from '@/api/geoCoordMap.js'
//Vue.prototype.geoCoordMap = geoCoordMap;
Vue.use(VueClipboard)
Vue.use(Iview)
Vue.use(VueAwesomeSwiper)
Vue.prototype.echarts = echarts;

Vue.prototype.color = ()  => {
    return 'rgb('+  Math.floor(Math.random()*255) +','+  Math.floor(Math.random()*255) +','+  Math.floor(Math.random()*255) + ')';
 }

import axios from "axios";
Vue.prototype.$ajax = axios;


import Title from "@/base/Title.vue";
Vue.component('Title', Title)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
