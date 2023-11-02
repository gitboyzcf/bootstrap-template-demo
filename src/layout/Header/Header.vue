<template>
  <div class="header-box">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/" font-700
          ><img
            src="@/assets/images/logo.png"
            alt="Logo"
            width="58"
            class="d-inline-block align-text-top"
            mr-15px
          />xxx</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02" text-center>
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="(nav, i) in navBar" :key="i">
              <router-link class="nav-link" aria-current="page" :to="nav.path">{{
                nav.label
              }}</router-link>
            </li>
          </ul>
          <div class="nav-operate" flex flex-items-center>
            <Icon
              :icon="item.icon"
              :alt="item.label"
              width="20"
              v-for="(item, i) in operateBtn"
              :key="i"
              mx-15px
              cursor-pointer
            ></Icon>
            <!-- <img
              :src="item.icon"
              :alt="item.label"
              width="13"
              v-for="(item, i) in operateBtn"
              :key="i"
              mx-15px
              cursor-pointer
            /> -->
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                class="sr-only peer"
                v-model="toggleDarkModel"
                type="checkbox"
                @click="() => toggleDark()"
              />
              <div
                class="w-6 h-6 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-4 before:w-4 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#777777] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-4 after:h-4 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
              ></div>
            </label>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
// import { getStaticResource } from '@/utils'
import { useDark, useToggle } from '@vueuse/core'
import { useOutSideSystemStore } from '@/stores/modules/system.js'
const useSystemStore = useOutSideSystemStore()
const navBar = reactive([
  {
    label: '报警中心',
    path: '/omnimatrix_ai/alarm_center'
  },
  {
    label: '算法配置',
    path: '/omnimatrix_ai/algorithm_onfig'
  },
  {
    label: '系统配置',
    path: '/'
  }
])

const operateBtn = [
  // {
  //   icon: getStaticResource('assets/images/search-icon.png'),
  //   type: 'search',
  //   label: '搜索'
  // },
  // {
  //   icon: getStaticResource('assets/images/setup-icon.png'),
  //   type: 'setup',
  //   label: '设置'
  // },
  // {
  //   icon: getStaticResource('assets/images/me-icon.png'),
  //   type: 'me',
  //   label: '我的'
  // }
  {
    icon: 'material-symbols:search',
    type: 'search',
    label: '搜索'
  },
  {
    icon: 'ph:gear-six',
    type: 'setup',
    label: '设置'
  },
  {
    icon: 'mdi:user-outline',
    type: 'me',
    label: '我的'
  }
]

const toggleDarkModel = ref(useSystemStore.scheme=='dark')
const isDark = useDark({
  selector: 'html',
  attribute: 'data-bs-theme',
  valueDark: 'dark',
  valueLight: 'light'
})
const toggleDark = useToggle(isDark)
// setInterval(() => {
// }, 1000);
</script>
<style scoped lang="scss">
.router-link-active {
  border-radius: 6px;
  background-color: #fff;
}
</style>
