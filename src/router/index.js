import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import passenger_flow from '@/components/passenger_flow.vue'
import store from '@/store/index.js'

Vue.use(Router)
const vueRouter = new Router({
  routes: [
  	{path:'/',redirect:'/home'},
    {path: '/home', component: home},
    {path: '/passenger_flow', component: passenger_flow},
  ]
})

//vueRouter.beforeEach(function (to, from, next) {  
//  const nextRoute = [ 'upload', 'user_center'];  
//  const auth = store.state.global.login_data.token_access; 
//  if (nextRoute.indexOf(to.name) >= 0) {  
        //未登录  
//      if (!auth) {  
//          vueRouter.push({name:'login'})  
//      }  
//  }  
//  //已登录的情况再去登录页，跳转至首页  
//  if (to.path === '/login') {  
//      if (auth) {  
//          vueRouter.push({path: '/home'});  
//      }  
//  }  
//  next();  
//});  
export default vueRouter;
