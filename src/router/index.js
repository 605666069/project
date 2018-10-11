import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import passenger_flow from '@/components/passenger_flow.vue'
import scenic_area from '@/components/scenic_area.vue'
import car from '@/components/car.vue'
import hotel from '@/components/hotel.vue'
import hot_search from '@/components/hot_search.vue'
import wx_operation from '@/components/wx_operation.vue'
import passenger_map from '@/base/jchart.vue'
import test from '@/components/test.vue'
import store from '@/store/index.js'

Vue.use(Router)
const vueRouter = new Router({
  routes: [
  	{path:'/',redirect:'/home'},
    {path: '/home', component: home,name:'首页'},
    {path: '/passenger_flow', component: passenger_flow,name:'客流数据'},
    {path: '/scenic_area', component: scenic_area,name:'景区数据'},
    {path: '/hotel', component: hotel,name:'酒店住宿'},
    {path: '/car', component: car,name:'交通数据'},
    {path: '/wx_operation', component: wx_operation,name:'微信运营'},
    {path: '/hot_search', component: hot_search,name:'网络热搜'},
    {path: '/test', component: test},
    {path: '/passenger_map', component: passenger_map,name:'哈哈哈'},
  ]
})

export default vueRouter;
