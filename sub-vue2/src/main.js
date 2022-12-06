import './public-path';
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui'
import routes from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css'
import { store as commonStore } from 'common'

Vue.config.productionTip = false

Vue.use(
  VueRouter
).use(
  ElementUI
)

let router = null;
let instance = null;
function render (props = {}) {
  const { container, routerBase } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');

  router.beforeEach(async (to, from, next) => {
    console.log('subvue2router', to)
    next()
  })
}

console.log('store', store);

// 独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  // 这里是子应用独立运行的环境，实现子应用的登录逻辑

  // 独立运行时，也注册一个名为global的store module
  commonStore.globalRegister(store)
  // 模拟登录后，存储用户信息到global module
  const userInfo = { name: '我是独立运行时名字叫subvue2默认值' } // 假设登录后取到的用户信息
  store.commit('global/setGlobalState', { user: userInfo })
  render()
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped');
}
export async function mount (props) {
  console.log('[vue] props from main framework', props);
  commonStore.globalRegister(store, props)
  render(props);
}
export async function unmount () {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
