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
      children:[
        {path:'/home',component: Home},
        {path:'/news',component: News},
        {path:'/shoppingCart',component: ShoppingCart},
        {path:'/my',component: My}
      ]
    }
  ]
})
