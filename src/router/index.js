import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../views/Film.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    name: 'film',
    component: Film,
    children: [
      {
        path: 'comingsoon', // 简写
        name: 'comingsoon',
        component: () => import('../views/film/Comingsoon.vue')
      },
      {
        path: 'nowplaying',  
        name: 'Nowplaying',
        component: () => import('../views/film/Nowplaying.vue')
      },
      {
        path: '',
        redirect: '/film/nowplaying' // 重定向
      }
    ]
  },
  {
    path: '/move',
    name: 'move',
    component: () => import('../views/Move.vue')
  },
  {
    path: '/center',
    name: 'center',
    component: () => import('../views/Center.vue')
  },
  {
    path: '/detail/:id',  // 动态路由 params参数占位 :id 后面加? 防止不传参报错
    name: 'detail',
    component: () => import('../views/Detail.vue'),
    meta:{isShow: true}
  },
  {
    path: '/login',  // 动态路由 params参数占位 :id 后面加? 防止不传参报错
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/city',  // 动态路由 params参数占位 :id 后面加? 防止不传参报错
    name: 'city',
    component: () => import('../views/City.vue'),
    meta:{isShow: true}
  },
  {
    path: '/move/search',  // 动态路由 params参数占位 :id 后面加? 防止不传参报错
    name: 'search',
    component: () => import('../views/Search.vue'),
    meta:{isShow: true}
  },
  {
    // path: '/',
    path: '*',
    redirect: '/film'
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { y: 0 }
  },
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.path === '/center') {
      next('/login')
  } else {
    next()
  }
})

export default router
