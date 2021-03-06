import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import VueI18n from 'vue-i18n'
import lang from './lang/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

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

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: "zh", // 默认中文
  messages: lang
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
