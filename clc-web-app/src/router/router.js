import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from './../components/HelloWorld'
import Dashboard from './../components/Dashboard'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: '/', name:'helloworld', component: HelloWorld },
    { path: '/home', name:'dashboard', component: Dashboard },
  ]
})