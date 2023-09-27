<template>
  <div class="info">404 Not Found</div>
  <el-button class="handle-btn fancy-gradient" @click="router.push('/home')"
    >{{ '<-' }} Back Home
  </el-button>
</template>

<script lang="ts" setup>
import router from '@/router'
</script>

<style lang="scss" scoped>
.info {
  margin: 2rem;
}
</style>
