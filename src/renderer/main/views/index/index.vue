<template>
  <div>main</div>
  <button @click="switchWindow">切换窗口</button>
</template>

<script setup lang="ts">
const { ipcRenderer } = window.electron

// 切换窗口
const switchWindow = () => {
  ipcRenderer.send('switch-window', 'auth')
}
</script>

<style scoped></style>
