import store from './store'

const microApps = [
  {
    name: 'sub-vue2',
    entry: process.env.VUE_APP_SUB_VUE2,
    activeRule: 'micro/sub-vue2'
  },
  // {
  //   name: 'sub-react',
  //   entry: process.env.VUE_APP_SUB_REACT,
  //   activeRule: 'micro/sub-react'
  // },
  {
    name: 'sub-html',
    entry: process.env.VUE_APP_SUB_HTML,
    activeRule: 'micro/sub-html'
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subapp-container', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  }
})

export default apps
