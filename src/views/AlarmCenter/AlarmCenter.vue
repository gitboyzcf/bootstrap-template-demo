<script setup></script>

<template>
  <div class="alarm-center" h-full flex flex-col>
    <div class="row" flex-1 py-15px>
      <div class="col-12">
        <div class="alarm-center-wrapper p-3" bg="#fff" rd-15px h-full w-full>监控点位</div>
      </div>
    </div>
    <div class="row row-cols-sm-1 row-cols-md-3" flex-1>
      <div class="col-4" pb-15px>
        <div class="alarm-center-wrapper p-3" bg="#fff" rd-15px h-full w-full>实时警告</div>
      </div>
      <div class="col-4" pb-15px>
        <div class="alarm-center-wrapper p-3" bg="#fff" rd-15px h-full w-full>报警统计</div>
      </div>
      <div class="col-4" pb-15px>
        <div class="alarm-center-wrapper p-3" bg="#fff" rd-15px h-full w-full>推理服务状态</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@media (max-width: 575.98px) {
  .alarm-center .row > * {
    flex: 0 0 auto;
    width: 100%;
  }
}
.alarm-center {
  &-wrapper {
    box-shadow: 0px 0px 6px 4px var(--bs-gray-400);
  }
}
</style>
