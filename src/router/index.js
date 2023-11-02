import { createRouter, createWebHistory } from 'vue-router'
import { NProgress } from '@/utils'
import { usePageTitle } from './helper'

const Layout = () => import('@/layout/Layout.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/omnimatrix_ai/alarm_center'
    },
    {
      path: '/omnimatrix_ai',
      name: 'OmnimatrixAi',
      component: Layout,
      children: [
        // 报警中心
        {
          path: 'alarm_center',
          name: 'AlarmCenter',
          meta: {
            title: '报警中心'
          },
          component: () => import('@/views/AlarmCenter/AlarmCenter.vue')
        },
        // 算法配置
        {
          path: 'algorithm_onfig',
          name: 'AlgorithmConfig',
          meta: {
            title: '算法配置'
          },
          component: () => import('@/views/AlgorithmConfig/AlgorithmConfig.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  usePageTitle(to)
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
