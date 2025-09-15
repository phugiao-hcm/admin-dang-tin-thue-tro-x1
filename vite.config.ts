// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/admin-dang-tin-thue-tro-x1/', // 👈 tên repo
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
