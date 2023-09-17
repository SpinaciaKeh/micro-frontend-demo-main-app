<template>
  <div class="page-container login">
    <el-input v-model="username" class="login-item" placeholder="Please input username">
      <template #append>
        <el-icon>
          <Iphone/>
        </el-icon>
      </template>
    </el-input>
    <el-input v-model="password" type="password" class="login-item" placeholder="Please input password">
      <template #append>
        <el-icon>
          <Key/>
        </el-icon>
      </template>
    </el-input>
    <el-button class="login-item login-btn" @click="login">
      Login
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { Iphone, Key } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useAuthStore } from '@/store'

const username = ref<string>('')
const password = ref<string>('')

const authStore = useAuthStore()

const login = () => {
  authStore.login({username: username.value, password: password.value})
}
</script>

<style lang="scss" scoped>
.login {
  
  .login-item {
    font-size: 1rem;
    width: min(30rem, 60vw);
    height: 3rem;
    
    :deep .el-input__wrapper {
      color: #fff;
      border-top-left-radius: 1.5rem;
      border-bottom-left-radius: 1.5rem;
      background-color: transparent;
      box-shadow: 0 0 0 1px #dcdfe6 inset;
      
      &.is-focus {
        box-shadow: 0 0 0 2px var(--highlight-yellow) inset;
      }
    }
    
    :deep .el-input-group__append {
      font-size: 1.2rem;
      padding-right: 1.5rem;
      color: #fff;
      border-top-right-radius: 1.5rem;
      border-bottom-right-radius: 1.5rem;
      background-color: rgba(255, 255, 255, 0.2);
      box-shadow: 0 0 0 1px #dcdfe6 inset;
    }
    
    :deep .el-input__inner {
      font-family: Consolas, serif;
      background: transparent;
      color: #ffffff;
      padding-left: 1rem;
    }
  }
  
  .login-btn {
    font-family: Consolas, serif;
    font-size: 1.2rem;
    transition: all 0.2s ease-out;
    color: #ffffff;
    border-radius: 1.5rem;
    background-color: rgba(249, 249, 249, 0.3);
    
    &:hover {
      color: var(--highlight-yellow);
      border: 1px solid rgba(48, 49, 49, 0.7);
      background-color: rgba(48, 49, 49, 0.7);
    }
  }
}
</style>
