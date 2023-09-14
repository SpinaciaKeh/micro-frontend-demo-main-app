<template>
  <div class="login-container">
    <el-input v-model="username" class="login-item" placeholder="Please input username">
      <template #append>
        <el-icon>
          <Iphone/>
        </el-icon>
      </template>
    </el-input>
    <el-input v-model="password" class="login-item" placeholder="Please input password">
      <template #append>
        <el-icon>
          <Key/>
        </el-icon>
      </template>
    </el-input>
  </div>
</template>

<script lang="ts" setup>
import { Iphone, Key } from '@element-plus/icons-vue'
import { ref } from 'vue'

const username = ref<string>('')
const password = ref<string>('')
</script>

<style lang="scss" scoped>
.login-container {
  position: relative;
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100% - 8rem);
  margin: 2rem;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  gap: 2rem;
  backdrop-filter: blur(5px);
  
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
        box-shadow: 0 0 0 2px #f3e588 inset;
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
      padding-left: 1rem;
      color: #ffffff;
    }
  }
}
</style>
