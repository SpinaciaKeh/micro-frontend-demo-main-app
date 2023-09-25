<template>
  <div class="switch-container">
    <label for="theme-btn">
      <input id="theme-btn" type="checkbox" />
      <div class="slider-wrapper">
        <div class="theme-btn-slider"></div>
        <span class="star star-1"></span>
        <span class="star star-2"></span>
        <span class="star star-3"></span>
        <span class="star star-4"></span>
        <span class="star star-5"></span>
        <span class="star star-6"></span>
      </div>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { nextTick } from 'vue'

nextTick(() => {
  const toggleSwitch = document.querySelector(
    '.switch-container input[type="checkbox"]'
  )

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }

  toggleSwitch!.addEventListener('change', switchTheme, false)
})
</script>

<style lang="scss" scoped>
.switch-container {
  position: relative;
  zoom: 0.5;
  width: 100px;
  height: 50px;
  margin: 0 10px 0 20px;
  user-select: none;
  border-radius: 50px;
  background: var(--secondary-color);
  box-shadow:
    2px 2px 10px rgba(0, 0, 0, 0.5),
    -2px -2px 10px rgba(255, 255, 255, 0.5);

  input {
    display: none;
  }

  .slider-wrapper {
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .star {
    position: absolute;
    transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    border-radius: 50%;
    background-color: var(--tertiary-color);
  }

  .star-1 {
    z-index: 0;
    top: 10px;
    left: 35px;
    width: 30px;
    height: 3px;
  }

  .star-2 {
    z-index: 1;
    top: 18px;
    left: 28px;
    width: 30px;
    height: 3px;
  }

  .star-3 {
    z-index: 0;
    top: 27px;
    left: 40px;
    width: 30px;
    height: 3px;
  }

  .star-4,
  .star-5,
  .star-6 {
    transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    opacity: 0;
  }

  .star-4 {
    z-index: 0;
    top: 16px;
    left: 11px;
    width: 2px;
    height: 2px;
    transform: translate3d(3px, 0, 0);
  }

  .star-5 {
    z-index: 0;
    top: 32px;
    left: 17px;
    width: 3px;
    height: 3px;
    transform: translate3d(3px, 0, 0);
  }

  .star-6 {
    z-index: 0;
    top: 36px;
    left: 28px;
    width: 2px;
    height: 2px;
    transform: translate3d(20px, 0, 0);
  }
}

.theme-btn-slider {
  position: absolute;
  width: 40px;
  height: 40px;
  margin: 5px;
  transition: transform 0.6s;
  transform: translateX(0px);
  border-radius: 50%;
  background: var(--primary-color);
}

input:checked + .slider-wrapper .theme-btn-slider {
  transform: translateX(34px);
  background: transparent;
  box-shadow: 15px 0 0 0 var(--primary-color);
}
input:checked + .slider-wrapper {
  .star-1 {
    width: 2px;
    height: 2px;
  }

  .star-2 {
    width: 4px;
    height: 4px;
    transform: translate3d(20px, 0, 0);
  }

  .star-3 {
    width: 2px;
    height: 2px;
    transform: translate3d(-7px, 0, 0);
  }

  .star-4,
  .star-5,
  .star-6 {
    opacity: 1;
  }
  .star-4 {
    transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transform: translate3d(10px, 0, 0);
  }
  .star-5 {
    transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transform: translate3d(0, 0, 0);
  }
  .star-6 {
    transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transform: translate3d(25px, 0, 0);
  }
}
</style>
