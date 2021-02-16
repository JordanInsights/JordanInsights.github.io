import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: function(to) {
      if (to.hash) {
          return {
            selector: to.hash,
            behavior: 'smooth',
          }
      } else {
          return { x: 0, y: 0 }
      }
  },
  routes
})

export default router
