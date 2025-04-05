import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/whale-funder', // Ensures correct asset paths
  // build: {
  //   outDir: 'build', // Changes output directory from 'dist' to 'build'
  // },
})
