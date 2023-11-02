import { piniaStore } from '@/stores'

const useSystemStore = defineStore('system', {
  state: () => ({
    scheme: localStorage.getItem('vueuse-color-scheme') != 'dark' ? 'auto' : 'dark'
  }),

  actions: {}
})

export function useOutSideSystemStore() {
  return useSystemStore(piniaStore)
}
