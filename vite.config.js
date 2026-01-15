// js 에서 설정파일을은 대부분 xxx.config.js로 끝남
// 설정 파일이 없으면 vite를 사용하는 개발자가 vite 내부 코드를 직접 건드려서 변경해야함
// 설정 파일을 통해 정해진 옵션값을 사용하면 내부적으로 해당 옵션으로 동작하도록 적용해주는 파일

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/postcss"
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { resolve } from "path";


// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./index.js"),
      name: "@woori-fisa/acccount-form",
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss"
        }
      }
    },
    // sourcemap: true,
    emptyOutDir: true
  },
  plugins: [
    react(),
    cssInjectedByJsPlugin()
  ],
  resolve: {
    alias: [
      {find: '@', replacement: '/src'}
    ]
  },
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  }
})
