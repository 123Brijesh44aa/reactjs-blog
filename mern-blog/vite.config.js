import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), tsconfigPaths()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname,
              './src'),
        },
    },
    // server: {
    //   proxy: {
    //       "/api":{
    //           target: "http://localhost:3009",
    //           secure: false,
    //           changeOrigin: true,
    //           rewrite: (path) => path.replace(/^\/api/,""),
    //       }
    //   }
    // }
})
