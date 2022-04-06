import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import VueI18n from 'vue-i18n'
import lang from './lang/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import demoBlock from './examples/components/demo-block'
import hljs from 'highlight.js'
import 'highlight.js/styles/color-brewer.css'
import './examples/styles/common.scss'

Vue.config.productionTip = false

Vue.use(
  VueRouter
).use(
  VueI18n
).use(
  ElementUI
)

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  })
})

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: "zh", // 默认中文
  messages: lang
})

Vue.component('demo-block', demoBlock)

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
