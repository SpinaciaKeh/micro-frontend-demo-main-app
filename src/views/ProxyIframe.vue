<template>
  <div class="iframe-container">
    <iframe height="100%" src="http://localhost:5000/page" width="100%"/>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.iframe-container {
  position: relative;
  overflow: hidden;
  height: calc(100% - 8rem);
  margin: 2rem;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
}
</style>
