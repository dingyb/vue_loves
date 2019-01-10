import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import ListDetail from '@/pages/home/components/ListDetail.vue'
import Life from '@/pages/life/Life.vue'
import Staff from '@/pages/staff/Staff.vue'
import Mine from '@/pages/mine/Mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/listdetail/:id',
      name: 'ListDetail',
      component:ListDetail
    },
    {
      path: '/life',
      name: 'Life',
      component: Life
    },
    {
      path: '/staff',
      name: 'Staff',
      component: Staff
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
