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
      <el-icon
        v-if="!authStore.hasToken"
        class="normal-btn"
        @click="router.push('/login')"
      >
        <User />
      </el-icon>
      <el-icon v-else class="normal-btn" @click="authStore.logout()">
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
  color: #ffffff;
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
  //border-bottom: 1px dotted rgba(100, 108, 255, 0.3);

  .navbar-btn {
    font-family: Consolas, serif;
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 1.4rem;
    margin: 0 1rem;
    padding: 0.2rem 1rem;
    cursor: pointer;
    border-radius: 0.9rem;
    box-shadow:
      2px 2px 5px rgba(0, 0, 0, 0.25),
      -2px -2px 5px rgba(255, 255, 255, 0.2);
    gap: 10px;

    a {
      color: #ffffff;
    }

    &.home {
      box-shadow:
        2px 2px 5px rgba(0, 0, 0, 0.5),
        -2px -2px 5px rgba(255, 255, 255, 0.15);
    }

    &.push {
      margin-left: auto;
    }
  }

  .navbar-btn:not(.home):hover {
    color: var(--highlight-yellow);
    box-shadow:
      2px 2px 5px rgba(0, 0, 0, 0.4),
      -2px -2px 5px rgba(255, 255, 255, 0.3);

    a {
      color: var(--highlight-yellow);
    }
  }

  .home:hover {
    color: var(--highlight-yellow);
    box-shadow:
      2px 2px 5px rgba(0, 0, 0, 0.7),
      -2px -2px 5px rgba(255, 255, 255, 0.25);
  }

  .normal-btn {
    margin: 0 1rem;
    cursor: pointer;

    &:hover {
      color: var(--highlight-yellow);
    }
  }
}
</style>
