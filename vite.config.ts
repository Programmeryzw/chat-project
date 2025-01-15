import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import AutoImport from "unplugin-auto-import/vite";
// import Components from "unplugin-vue-components/vite";

const pathSrc = path.resolve(__dirname, "src");

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": pathSrc,
    }
  },
  plugins: [
    vue(),
    // AutoImport({
    //   // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
    //   imports: ["vue"],
    //   // 指定自动导入函数TS类型声明文件路径
    //   dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"),
    // }),
    // Components({
    //   // 指定自动导入组件TS类型声明文件路径
    //   dts: path.resolve(pathSrc, "types", "components.d.ts"),
    // }),
  ],
  server: {
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/style/mixin.scss" as *;'
      }
    }
  }
})
