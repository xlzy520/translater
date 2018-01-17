import Vue from 'vue'
import Router from 'vue-router'
// import myHeader from '@/components/myHeader'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
