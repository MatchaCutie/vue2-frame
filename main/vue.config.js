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
  // 在 multi-page 模式下构建应用
  pages: undefined,
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  lintOnSave: 'default',
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  // 是否忽略所有 node_modules 中的文件，官文写的默认false
  // transpileDependencies: false, // 但是打包报错提示必须是数组
  // 生产环境的 source map,false的话build出来的包中不含.js.map文件
  productionSourceMap: true,
  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性
  crossorigin: undefined,
  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
  integrity: false,
  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数
  // 模拟配置
  configureWebpack: config => {
    const plugins = [];
    if (process.env.NODE_ENV === 'production') {
      plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: /\.js$|\.html$|\.css$/,
          threshold: 1024 * 3 // 文件大小超过3k会压缩
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
  },
  // css配置
  css: {
    // 是否只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块
    requireModuleExtension: true,
    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)
    // Default: 生产环境下是 true，开发环境下是 false
    // extract: 
    // 是否为 CSS 开启 source map
    sourceMap: false,
    // css loader 向 CSS 相关的 loader 传递选项
    // 模拟配置
    loaderOptions: {
      scss: {}
    }
  },
  // 所有 webpack-dev-server 的选项都支持
  devServer: {
    // 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器
    // 下面有些值的配置可能会被覆盖
    // overlay: { // 让浏览器 overlay 同时显示警告和错误
    //   warnings: true,
    //   errors: true
    // },
    // open: false, // 是否打开浏览器
    // host: "localhost",
    // port: "8080", // 代理端口
    // https: false, // 是否使用https
    // hotOnly: false, // 热更新
    compress: true, // 网络传输的时候是否压缩
    // hot: true, //热模块替换，配合htmlWebpackPlugin使用...webpack会默认配置,不写也行
    // liveLoad: true,
    proxy: {
      // 模拟配置
      "/api": {
        target: "https://localhost:8080", // 目标代理接口地址
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        // ws: true, // 是否启用websockets
        pathRewrite: {
          "/api": "/"
        }
      }
    }
  },
  // 是否为 Babel 或 TypeScript 使用 thread-loader
  parallel: require('os').cpus().length > 1,
  // 向 PWA 插件传递选项
  // pwa:
  // 一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项
  pluginOptions: {},
  // Babel 可以通过 babel.config.js 进行配置
  // ESLint 可以通过 .eslintrc 或 package.json 中的 eslintConfig 字段来配置
  // TypeScript 可以通过 tsconfig.json 来配置
}

const resolve = dir => path.join(__dirname, dir);

