import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer'),
        '@preload': resolve('src/preload'),
        '@main': resolve('src/main'),
      }
    },
    plugins: [vue()],
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/renderer/main.html'),
          auth: resolve(__dirname, 'src/renderer/auth.html'),
        }
      }
    }
  }
})
