const path = require('path')
const { name } = require('./package');
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  publicPath: '/subapp/sub-vue2',
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
    config.resolve.symlinks(true)
  },
  devServer: {
    port: process.env.VUE_APP_PORT,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};