import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'


const routes = [
 {
  name:'film',
  path:'/film',
  component:()=>import('@/views/film'),
  children:[
  {
  path:'/film/nowplaying',
  component:()=>import('@/views/film/nowplaying')
  },
  {
   path:'/film/custmoon',
   component:()=>import('@/views/film/custmoon')
  },{
   path:'/film',
   redirect:'/film/nowplaying'
  }
  ]
},
{
  //动态路由id
  path:'/detail/:id',
  component:()=>import('@/views/detail')
},
{
 path:'/cinemas',
 component:()=>import('@/views/cinemas')
},
{
  path:'/center',
  component:()=>import('@/views/center')
},
{
  path:'',
  redirect:'/film'
},
{
 path:'/:zhangtao',
 redirect:{
 name:'film'
}
}
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history:createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
