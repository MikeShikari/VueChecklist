import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '@/views/mainPage.vue'
import ChecklistPage from '@/views/checklistPage.vue'
import TestRunPage from '@/views/testrunPage.vue'

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
  {
    path: '/testrun',
    name: 'TestRunPage',
    component: TestRunPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
