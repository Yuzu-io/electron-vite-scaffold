<template>
  <div>main</div>
  <button @click="switchWindow">切换窗口</button>
  <div>
    {{ tokenData }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
const { ipcRenderer } = window.electron

const tokenData = reactive({
  token: ''
})

onMounted(() => {
  getData()
})

// 切换窗口
const switchWindow = () => {
  ipcRenderer.send('switch:window', 'auth')
}

const getData = async () => {
  tokenData.token = await ipcRenderer.invoke('pull:transfer:data')
}
</script>

<style scoped></style>
