<script lang="ts" setup>
import {
  HomeFilled,
  Lightning,
  MapLocation,
  MoonNight,
  PictureRounded,
  SwitchButton,
  User
} from '@element-plus/icons-vue'
import router from '@/router'
import { useAuthStore } from '@/store'
import SwitchTheme from '@/components/SwitchTheme.vue'

const authStore = useAuthStore()
</script>

<template>
  <div class="home-container fancy-gradient">
    <div class="navbar">
      <el-icon class="navbar-btn home" @click="router.push('/')">
        <HomeFilled />
      </el-icon>
      <el-icon
        v-if="authStore.hasToken"
        class="navbar-btn home"
        @click="router.push('/map')"
      >
        <MapLocation />
      </el-icon>
      <el-icon
        v-if="authStore.hasToken"
        class="navbar-btn home"
        @click="router.push('/other')"
      >
        <PictureRounded />
      </el-icon>
      <div class="navbar-btn push">
        <el-icon>
          <MoonNight />
        </el-icon>
        <router-link to="/app/app-vue3-vite/#/">App1</router-link>
      </div>
      <div class="navbar-btn">
        <el-icon>
          <Lightning />
        </el-icon>
        <router-link to="/app/app-vue2-webpack">App2</router-link>
      </div>
      <switch-theme />
      <el-icon
        v-if="!authStore.hasToken"
        class="navbar-btn"
        @click="router.push('/login')"
      >
        <User />
      </el-icon>
      <el-icon v-else class="navbar-btn" @click="authStore.logout()">
        <SwitchButton />
      </el-icon>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.home-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  text-align: center;
  color: var(--text-color);
}

.navbar {
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;

  .navbar-btn {
    font-family: Consolas, serif;
    display: flex;
    align-items: center;
    flex-direction: row;
    box-sizing: content-box;
    height: 1.4rem;
    margin: 0 0.2rem;
    padding: 0.2rem 0.7rem;
    cursor: pointer;
    color: var(--text-color);
    border-radius: 0.9rem;
    gap: 10px;

    a {
      color: var(--text-color);
    }

    &.push {
      margin-left: auto;
    }
  }

  .navbar-btn:not(.home):hover {
    color: var(--highlight-color);
    box-shadow: var(--neumorphism-shadow-1);

    a {
      color: var(--highlight-color);
    }
  }

  .home:hover {
    color: var(--highlight-color);
    box-shadow: var(--neumorphism-shadow-2);
  }
}
</style>
