/**
 * @Description: 路由工具
 * @Author zcf
 * @Date 2023-10-31 15:08
 * @E-mail boyzcf@qq.com
 */
import { useUrlSearchParams, useTitle } from '@vueuse/core'

export const usePageTitle = (to) => {
  const projectTitle = import.meta.env.VITE_APP_TITLE
  const rawTitle = normalizeTitle(to.meta.title)
  const title = useTitle()
  title.value = rawTitle ? `${projectTitle} | ${rawTitle}` : projectTitle
  function normalizeTitle(raw) {
    return typeof raw === 'function' ? raw() : raw
  }
}
