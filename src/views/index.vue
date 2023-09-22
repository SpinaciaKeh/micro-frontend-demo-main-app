<template>
  <div class="page-container home">
    <div class="title first">Micro Frontend Demo</div>
    <div class="title second">with Qiankun framework</div>
    <template v-if="authStore.hasToken">
      <div class="title third">Welcome, {{ authStore.username }}.</div>
    </template>
    <template v-else>
      <el-button class="handle-btn login" @click="router.push('/login')"
        >Login</el-button
      >
    </template>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import { useAuthStore } from '@/store'

const authStore = useAuthStore()
</script>

<style lang="scss" scoped>
.home {
  .title {
    font-family: Consolas, serif;
    transform: translateY(-3rem);

    &.first {
      font-family: AlumFreePromotional, serif;
      font-size: 5rem;
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
    font-family: Consolas, serif;
    font-size: 1rem;
    width: 10rem;
    height: 3rem;
    margin-top: 4rem;
    color: #ffffff;
    border: 2px solid #fff;
    border-radius: 1.5rem;
    background-color: transparent;

    &:hover {
      color: var(--highlight-yellow);
      border: 2px solid var(--highlight-yellow);
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
