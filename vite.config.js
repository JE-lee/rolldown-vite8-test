import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import vueJsx from '@artoo-detoo/plugin-vue2-jsx'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)

// Use CJS require to get the actual function export
const requireContextPlugin =
  require('@originjs/vite-plugin-require-context').default

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    requireContextPlugin(),
  ],
  // build: {
  //   rollupOptions: {
  //     output: {
  //       // Demonstrate manual chunking: split vendor deps and individual src/modules/* files
  //       manualChunks(id) {
  //         // if (id.includes('node_modules')) return 'vendor'

  //         const match = id.match(/\/src\/modules\/([^/]+)\.js$/)
  //         if (match) return `module-${match[1]}`
  //       },
  //       // Explicit hashed filenames for entries, chunks, and assets
  //       entryFileNames: 'assets/[name].js',
  //       chunkFileNames: 'assets/[name].js',
  //       assetFileNames: 'assets/[name].[ext]'
  //     }
  //   }
  // }
})
