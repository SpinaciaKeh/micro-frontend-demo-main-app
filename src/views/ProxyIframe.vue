<template>
  <div class="page-container">
    <iframe
      id="proxyIfr"
      height="100%"
      src="http://localhost:5000/page"
      width="100%"
    />
    <el-button
      v-if="!isLoading"
      class="enter-btn handle-btn fancy-gradient"
      @click="enterSourcePage"
      >Enter source page ->
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'

const isLoading = ref<boolean>(true)

nextTick(() => {
  const ifrDom = document.getElementById('proxyIfr')
  ifrDom!.onload = () => {
    isLoading.value = false
  }
})

const enterSourcePage = () => {
  const a = document.createElement('a')
  a.href = 'https://www.underconsideration.com/artofthemenu/'
  a.click()
}
</script>

<style lang="scss" scoped>
.enter-btn {
  position: absolute;
  top: 1rem;
  left: 1rem;
}
</style>
