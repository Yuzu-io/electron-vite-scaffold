<template>
  <div>main</div>
  <button @click="switchWindow">切换窗口</button>
  <div>
    {{ tokenData }}
  </div>
</template>

<script setup lang="ts">
import { IpcRendererEvent } from 'electron'
import { reactive } from 'vue'
const { ipcRenderer } = window.electron

const tokenData = reactive({
  token: ''
})

// 切换窗口
const switchWindow = () => {
  ipcRenderer.send('switch:window', 'auth')
}

ipcRenderer.on('pull:transfer:data', (_event: IpcRendererEvent, data: any) => {
  console.log(data)

  tokenData.token = data.token
})
</script>

<style scoped></style>
