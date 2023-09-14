<template>
  <div id="sub-container"/>
</template>

<script lang="ts" setup>
import { start } from 'qiankun'
import { registerApps } from '@/utils/qiankun.js'
import { onMounted } from 'vue'

onMounted(() => {
  console.log('trigger sub container')
  if (!window.qiankunStarted) {
    window.qiankunStarted = true
    registerApps()
    start({
      sandbox: {
        experimentalStyleIsolation: true
      }
    })
  }
})
</script>

<style scoped>
#sub-container {
  font-family: Consolas, serif;
  font-size: 2rem;
  height: calc(100% - 10rem);
  margin: 2rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
}
</style>
