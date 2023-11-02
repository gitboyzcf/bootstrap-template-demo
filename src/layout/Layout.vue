<template>
  <div class="layout-box" h-full flex flex-col>
    <Header></Header>
    <div class="layout-box-container container-fluid" flex-1>
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import Header from './Header/Header.vue'
</script>
<style scoped lang="scss">
.layout-box{
  background-color: var(--bs-gray-300);
}
</style>
