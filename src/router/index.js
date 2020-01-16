import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'tab-bar',
    component: () => import('@/views/login')

  },
  {
    path: '/',
    name: 'tab-bar',
    component: () => import('@/views/tabbar'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: 'qa',
        name: 'qa',
        component: () => import('@/views/qa')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  },
  {
    path: '/user/:userId',
    name: 'user',
    component: () => import('@/views/user')

  },
  {
    path: '/search',
    name: 'serach',
    component: () => import('@/views/search')

  },
  {
    path: '/article/:articleId',
    name: 'article',
    component: () => import('@/views/article'),
    props: true// 讲路由参数动态映射到组建的props中
  }

]

const router = new VueRouter({
  routes
})

export default router
