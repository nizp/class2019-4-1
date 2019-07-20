import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/rank',
      name: 'rank',
      component: () => import('./views/rank.vue')
    },
    {
      path: '/plist',
      name: 'plist',
      component: () => import('./views/plist.vue')
    },
    {
      path: '/singer',
      name: 'singer',
      component: () => import('./views/singer.vue')
    },
    {
      path: '/rank_list',
      name: 'rank_list',
      component: () => import('./views/rank_list.vue')
    },
  ]
})
