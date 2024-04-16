import { defineConfig } from 'vite'
import vuePlugin from './src/plugins/plugin-vue'

const path = require('path')

export default defineConfig({
    resolve: {
        alias: {
          '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
      },
    
    plugins: [
        vuePlugin()
    ],
    server: {
        watch: {
          usePolling: true,
        }
    }
})