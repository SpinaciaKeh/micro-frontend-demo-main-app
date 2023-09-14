<template>
  <div class="homepage-box">
    <div class="title first">Micro Frontend Demo</div>
    <div class="title second">with Qiankun framework</div>
    <template v-if="token">
      <div class="title third">Welcome, {{ userName }}.</div>
    </template>
    <template v-else>
      <el-button class="handle-btn login" @click="router.push('/login')">Login</el-button>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import router from '@/router'

const token = ref<string>('')
const userName = ref<string>('Admin')
</script>

<style lang="scss" scoped>
.homepage-box {
  font-family: Consolas, serif;
  font-size: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100% - 10rem);
  margin: 2rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  gap: 2rem;
  
  .title {
    font-family: Consolas;
    
    &.first {
      font-size: 3rem;
      //filter: drop-shadow(5px 5px 0 rgba(255, 246, 0, 0.2));
    }
    
    &.second {
      font-size: 1.5rem;
      opacity: 0.85;
    }
    
    &.third {
      font-size: 2rem;
      margin-top: 4rem;
    }
  }
  
  .handle-btn {
    font-size: 1rem;
    width: 10rem;
    height: 3rem;
    margin-top: 4rem;
    color: #ffffff;
    border: 2px solid #fff;
    border-radius: 1.5rem;
    background-color: transparent;
    
    &:hover {
      color: #f3e588;
      border: 2px solid #f3e588;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
