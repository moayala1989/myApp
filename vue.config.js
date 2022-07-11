const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/gateway': { // 以/api开头的请求
        target:'https://m.maizuo.com', // 代理到此处
        changeOrigin: true
      }
    }
  }
})
