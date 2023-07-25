<template>
  <div>
    <button @click="switchWindow">切换窗口</button>
  </div>
</template>

<script setup lang="ts">
const { ipcRenderer } = window.electron

// 切换窗口
const switchWindow = () => {
  ipcRenderer.send('switch:window', 'main', { token: '1111' })
}
</script>

<style scoped></style>
