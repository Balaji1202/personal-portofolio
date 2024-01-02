module.exports = {
  configureWebpack: {
    entry: './src/balaji-main.js',
    output: {
      filename: 'js/balaji.vue.js',
      chunkFilename: 'js/[name].js'
    }
  },
  productionSourceMap: false
};