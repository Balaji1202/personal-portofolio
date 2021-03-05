module.exports = {
  configureWebpack: {
    entry: './src/zoho-main.js',
    output: {
      filename: 'js/zoho.vue.js',
      chunkFilename: 'js/[name].js'
    }
  },
  productionSourceMap: false
};