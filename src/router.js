import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/carwash',
      name: 'carwash',
      component: () => import('./views/carwash.vue')
    },
    {
      path: '/auto-service',
      name: 'autoservice',
      component: () => import('./views/autoservice.vue')
    },
    {
      path: '/barber',
      name: 'barbershop',
      component: () => import('./views/barbershop.vue')
    },
    {
      path: '/carpetclean',
      name: 'carpet',
      component: () => import('./views/carpetclean.vue')
    },
    {
      path: '/tailor',
      name: 'tailor',
      component: () => import('./views/tailor.vue')
    }
  ]
})
