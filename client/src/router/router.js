import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Index = resolve => require(['../views/index/Index'], resolve)

const Transform = resolve => require(['../views/transform/Index'], resolve)

const routes = [
  {
    path: '/index',
    component: Index
  },
  {
    path: '/transform',
    component: Transform
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ x: 0, y: 0 })
        }, 500)
      })
    }
  }
})

export default router
