import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import("../layouts/Main.vue"),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import("../views/pages/Home.vue")
        },
        {
          path: '/docs',
          name: 'docs',
          component: () => import("../views/pages/Docs.vue"),
          meta: {
            full_width: true
          }
        },
        {
          path: '/manage/:token',
          name: 'manage-link',
          component: () => import("../views/pages/Manage.vue"),
          meta: {
            full_width: true
          }
        },
      ]
    }
  ]
})

export default router
