import { createRouter, createWebHistory  } from "vue-router";
import Home from '@/pages/Home.vue'
import Details from '@/pages/Details.vue'

const routes = [
  { path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      console.log(1234)
      next();
    }
  },
  { path: '/details',
    name: 'Details',
    component: Details,
    beforeEnter: (to, from, next) => {
      console.log(9999)
      next();
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;