<script lang="ts" setup>
import { HomeFilled, Lightning, MapLocation, MoonNight, PictureRounded, User } from '@element-plus/icons-vue'
import router from '@/router'
</script>

<template>
  <div class="home-container fancy-gradient">
    <div class="navbar">
      <el-icon class="navbar-btn home" @click="router.push('/')">
        <HomeFilled/>
      </el-icon>
      <el-icon class="navbar-btn home" @click="router.push('/map')">
        <MapLocation/>
      </el-icon>
      <el-icon class="navbar-btn home" @click="router.push('/other')">
        <PictureRounded/>
      </el-icon>
      <div class="navbar-btn push">
        <el-icon>
          <MoonNight/>
        </el-icon>
        <router-link to="/app/app-vue3-vite/#/">App1</router-link>
      </div>
      <div class="navbar-btn">
        <el-icon>
          <Lightning/>
        </el-icon>
        <router-link to="/app/app-vue2-webpack">App2</router-link>
      </div>
      <el-icon class="normal-btn" @click="router.push('/login')">
        <User/>
      </el-icon>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
.fancy-gradient {
  background-color: var(--gradient_bg_color);
  background-image: radial-gradient(
      var(--gradient_spot1_w) var(--gradient_spot1_h) at left var(--gradient_spot1_x) top var(--gradient_spot1_y),
      var(--gradient_spot1_color),
      transparent
  ),
  radial-gradient(
      var(--gradient_spot2_w) var(--gradient_spot2_h) at left var(--gradient_spot2_x) top var(--gradient_spot2_y),
      var(--gradient_spot2_color),
      transparent
  ),
  radial-gradient(
      var(--gradient_spot3_w) var(--gradient_spot3_h) at left var(--gradient_spot3_x) top var(--gradient_spot3_y),
      var(--gradient_spot3_color),
      transparent
  ),
  radial-gradient(
      var(--gradient_spot4_w) var(--gradient_spot4_h) at left var(--gradient_spot4_x) top var(--gradient_spot4_y),
      var(--gradient_spot4_color),
      transparent
  );
}

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
  border-bottom: 1px dotted rgba(100, 108, 255, 0.3);
  
  .navbar-btn {
    font-family: Consolas, serif;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 0 1rem;
    padding: 5px 20px;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25), -2px -2px 5px rgba(255, 255, 255, 0.2);
    gap: 10px;
    
    a {
      color: #ffffff;
    }
    
    &.home {
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5), -2px -2px 5px rgba(255, 255, 255, 0.15);
    }
    
    &.push {
      margin-left: auto;
    }
  }
  
  .navbar-btn:not(.home):hover {
    color: #f3e588;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4), -2px -2px 5px rgba(255, 255, 255, 0.3);
    
    a {
      color: #f3e588;
    }
  }
  
  .home:hover {
    color: #f3e588;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7), -2px -2px 5px rgba(255, 255, 255, 0.25);
  }
  
  .normal-btn {
    margin: 0 1rem;
    cursor: pointer;
    
    &:hover {
      color: #f3e588;
    }
  }
}
</style>
