import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'


const routes = [
  {
    name: 'film',
    path: '/film',
    component: () => import('@/views/film'),
    children: [
      {
        path: '/film/nowplaying',
        component: () => import('@/views/film/nowplaying')
      },
      {
        path: '/film/custmoon',
        component: () => import('@/views/film/custmoon')
      }, {
        path: '/film',
        redirect: '/film/nowplaying'
      }
    ]
  },
  {
    //动态路由id
    path: '/detail/:id',
    component: () => import('@/views/detail')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/cinemas',
    component: () => import('@/views/cinemas')
  },
  {
    path: '/city',
    component: () => import('@/views/city')
  },
  {
    path: '/cinemas/search',
    component: () => import('@/views/search')
  },
  {
    path: '/center',
    component: () => import('@/views/center'),
    meta: {
      isyanzheng: true
    }
  },
  {
    path: '',
    redirect: '/film'
  },
  {
    path: '/:zhangtao',
    redirect: {
      name: 'film'
    }
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log("这是to", to)
  if (to.meta.isyanzheng) {
    //判断本地有没有token字段
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: 'login',
        query: { aaa: to.fullPath }
      })  //自己跳到login页
    }
  } else {
    next()
  }
})
export default router
