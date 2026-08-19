import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/about-golf',
      name: 'about-golf',
      component: () => import('../pages/AboutGolf.vue')
    },
    {
      // Динамический маршрут для статей
      path: '/about-golf/:slug',
      name: 'article',
      component: () => import('../components/ArticlePage.vue')
    },
    {
      path: '/academy',
      name: 'academy',
      component: () => import('../pages/Academy.vue')
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('../pages/Schedule.vue')
    },
    {
      path: '/coaches',
      name: 'coaches',
      component: () => import('../pages/Coaches.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../pages/Contacts.vue')
    },
    {
      // 404
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../pages/NotFound.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router