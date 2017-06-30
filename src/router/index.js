import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/main'
import newsInfo from '@/pages/newsInfo'

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
    }
  ]
})
