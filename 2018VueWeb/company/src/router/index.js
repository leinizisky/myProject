import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import about from '@/components/about/about'
import product from '@/components/product/product'
import member from '@/components/member/member'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path:'/member',
      name:'member',
      component:member
    }
  ]
})
