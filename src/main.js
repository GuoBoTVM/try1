// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入amfe-flexible
import 'amfe-flexible/index'
//rem
// console.log(window.innerWidth)
// let width= window.innerWidth / 10 ;
// document.documentElement.style.fontSize= width +'px';


Vue.config.productionTip = false

// 循环注册组件
import cpts from '@/components/installComponent/index'
Vue.use(cpts)




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
