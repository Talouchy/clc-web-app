import Vue from 'vue'
import VueRouter from 'vue-router'

import Welcome from './../components/Welcome'
import Dashboard from './../components/Dashboard'
import Settings from './../components/Settings'
import Feedback from './../components/Feedback'
import Events from './../components/Events'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { 
      path: '*',
      name:'not-found',
      meta: {
        title: 'Welcome'
      },
      component: Welcome,
    },
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
        title: 'DASHBOARD'
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
    {
      path: '/feedback',
      name:'feedback',
      meta: {
        title: 'FEEDBACK'
      },
      component: Feedback
    },
    {
      path: '/events',
      name:'events',
      meta: {
        title: 'EVENTS'
      },
      component: Events
    },
  ]
})