import Vue from 'vue'
import VueRouter from 'vue-router'

import Welcome from './../components/Welcome'
import Dashboard from './../components/Dashboard'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { 
      path: '/',
      name:'index',
      pageTitle: 'Welcome to the CLC App',
      component: Welcome,
    },
    {
      path: '/dashboard',
      name:'dashboard',
      pageTitle: 'DASHBOARD',
      component: Dashboard
    },
  ]
})