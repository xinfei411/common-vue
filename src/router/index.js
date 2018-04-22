import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import News from '@/components/News'
import ShoppingCart from '@/components/ShoppingCart'
import My from '@/components/My'

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
    }
  ]
})
