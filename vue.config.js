const path = require("path")
const CompressionWebpackPlugin = require('compression-webpack-plugin');

// https://cli.vuejs.org/zh/config/
module.exports = {
  // 以下所有的值都是默认值
  // 部署应用包时的基本URL（也是服务器资源路径）
  publicPath: '/',
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: '',
  // 指定生成的 index.html 的输出路径
  indexPath: 'index.html',
  // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
  filenameHashing: true,
  // 生产环境的 source map,false的话build出来的包中不含.js.map文件
  productionSourceMap: true,
  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数
  // 模拟配置
  configureWebpack: config => {
    const plugins = [];
    if (process.env.NODE_ENV === 'production') {
      plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: /\.js$|\.html$|\.css$/,
          threshold: 1024 * 10 // 文件大小超过3k会压缩
        })
      )
    }
    config.plugins = [...config.plugins, ...plugins]
  },
  // 一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例
  // 模拟配置
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
    config.module
      .rule('md')
      .test(/.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .options({
        compilerOptions: {
          preserveWhitespace: false
        }
      })
      .end()
      .use('md-loader')
      .loader(path.resolve(__dirname, './src/config/md-loader/index.js'))
      .end()
  },
  // css配置
  css: {
    // 是否只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块
    requireModuleExtension: true,
    // extract: 
    // 是否为 CSS 开启 source map
    sourceMap: false,
    // css loader 向 CSS 相关的 loader 传递选项
    // 模拟配置
    loaderOptions: {
    }
  },
  // 所有 webpack-dev-server 的选项都支持
  devServer: {
    host: "localhost",
    port: "8080", // 代理端口
    compress: true, // 网络传输的时候是否压缩
    open: true,
    proxy: {
      // 模拟配置
      "/api": {
        target: "https://localhost:8080", // 目标代理接口地址
      }
    }
  }
}

const resolve = dir => path.join(__dirname, dir);

