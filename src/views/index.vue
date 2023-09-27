<template>
  <div class="page-container home">
    <div class="title first">Micro Frontend Demo</div>
    <div class="title second">with Qiankun framework</div>
    <template v-if="authStore.hasToken">
      <div class="title third">Welcome, {{ authStore.username }}.</div>
    </template>
    <template v-else>
      <el-button class="login-btn" @click="router.push('/login')"
        >Login
      </el-button>
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

  .login-btn {
    font-family: Consolas, serif;
    font-size: 1rem;
    width: 10rem;
    height: 3rem;
    margin-top: 4rem;
    color: var(--text-color);
    border: 2px solid var(--text-color);
    border-radius: 1.5rem;
    background-color: transparent;

    &:hover {
      color: var(--highlight-color);
      border: 2px solid var(--highlight-color);
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
