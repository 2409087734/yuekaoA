import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Shou from '@/views/Shou'
import Classify from '@/views/Classify'
import Bos from '@/views/Bos'
import Car from '@/views/Car'
import My from '@/views/My'
import Duodian from '@/views/shou/Duodian'
import Quanqiu from '@/views/shou/Quanqiu'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: 'shou',
          name: 'shou',
          component: Shou,
          children:[
            {
              path:'duodian',
              name:'duodian',
              component:Duodian
            },
            {
              path:'quanqiu',
              name:'quanqiu',
              component:Quanqiu
            }
          ]
        },
        {
          path: 'classify',
          name: 'classify',
          component: Classify,
        },
        {
          path: 'bos',
          name: 'bos',
          component: Bos,
        }, {
          path: 'car',
          name: 'car',
          component: Car,
        }, {
          path: 'my',
          name: 'my',
          component: My
        }
      ]
    }
  ]
})
