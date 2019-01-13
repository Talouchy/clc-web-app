import Vue from 'vue'
import VueRouter from 'vue-router'

import Welcome from './../components/Welcome'
import Dashboard from './../components/Dashboard'
import Settings from './../components/Settings'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { 
      path: '/',
      name:'index',
      meta: {
        title: 'Welcome'
      },
      component: Welcome,
    },
    {
      path: '/dashboard',
      name:'dashboard',
      meta: {
        title: 'dashboard'
      },
      component: Dashboard
    },
    {
      path: '/settings',
      name:'settings',
      meta: {
        title: 'SETTINGS'
      },
      component: Settings
    },
  ]
})