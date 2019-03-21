import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/components/Demo'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'demo',
    component: Demo
  }]
})

