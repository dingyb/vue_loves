import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Life from '@/pages/life/Life.vue'
import Staff from '@/pages/staff/Staff.vue'
import Mine from '@/pages/mine/Mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
