import Vue from 'vue'
import Router from 'vue-router'
import Demo2 from '@/components/Demo2'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Demo2',
      component: Demo2
    }
  ]
})
