import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld =()=> import('@/components/HelloWorld')
const Home=()=>import('@/components/Home')
const News=()=> import('@/components/News')
const ShoppingCart=()=> import('@/components/ShoppingCart')
const InfiniteScrollTest=()=> import('@/components/InfiniteScrollTest')
const My=()=> import('@/components/My')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/home',
      meta: { title: '基础框架'},
      children:[
        {path:'/home',component: Home,meta: { title: '首页' }},
        {path:'/news',component: News,meta: { title: '消息' }},
        {path:'/shoppingCart',component: ShoppingCart,meta: { title: '购物车' }},
        {path:'/my',component: My,meta: { title: '我的' }}
      ]
    },
    {
      path: '/InfiniteScrollTest',
      name: 'InfiniteScrollTest',
      component: InfiniteScrollTest,
      meta: { title: '无限加载'},
      children:[]
    }
  ]
})
