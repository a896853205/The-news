import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/main'
import newsInfo from '@/pages/newsInfo'
import personInfo from '@/pages/personInfo'
import userInfo from '@/components/user-info'
import userNews from '@/components/user-news'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/newsInfo',
      name: 'newsInfo',
      component: newsInfo
    },
    {
      path: '/personInfo',
      name: 'personInfo',
      component: personInfo,
      children: [
        {
          path: '/personInfo/userInfo',
          component: userInfo
        },
        {
          path: '/personInfo/userNews',
          component: userNews
        }
      ]
    }
  ]
})
