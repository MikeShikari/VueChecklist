import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '@/views/mainPage.vue'
import ChecklistPage from '@/views/checklistPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/checklists',
    name: 'ChecklistPage',
    component: ChecklistPage
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
