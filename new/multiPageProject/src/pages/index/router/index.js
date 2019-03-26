import Vue from 'vue'
import Router from 'vue-router'
import Demo1 from '@/components/Demo1'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'demo1',
      component: Demo1
    }
  ]
})
