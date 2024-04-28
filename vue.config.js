const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://gelbooru.com',
        changeOrigin: true,
        pathRewrite: { '^/api': 'index.php' }
      }
    }
  }
}
