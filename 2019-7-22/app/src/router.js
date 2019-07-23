import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)



const router = new Router({
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
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/search.vue')
    },
  ]
})

/*
  切换路由的时候，如果发现是去search页，那么就把nav隐藏。

  注意一点就是刷新（不切换路由的时候，是拿不到$store）
*/
router.beforeEach((to,from,next)=>{
  if(router.app.$store){
    if(to.path === '/search'){
      router.app.$store.commit('navViewonOff',false);
    }else{
      if(!router.app.$store.state.navView){
        router.app.$store.commit('navViewonOff',true);
      }
    }
  }
  next();
})

export default router;


