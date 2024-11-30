import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/starpawanacamp/', // Replace 'starpawanacamp' with your repository name
});
