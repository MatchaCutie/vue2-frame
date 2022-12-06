<template>
  <div id="app">
    <div id="nav">
      <div class="project-title" @click="toHome">wwy学习qiankun项目</div>
      <div class="userinfo">主应用的state：{{ JSON.stringify(state) }}</div>
      <el-button @click="changeState">主应用修改state</el-button>
      <el-dropdown @command="handleCommand" trigger="click">
        <span>
          {{$i18n.locale}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="zh">中文</el-dropdown-item>
          <el-dropdown-item command="en">英文</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <router-view />
  </div>
</template>

<script>
import store from '@/store'
export default {
  computed: {
    state () {
      // 如果只需要取某个命名空间下的state，比如 user ，可以加上参数
      // return store.getGlobalState('user')

      // 返回所有的state则不需添加参数
      return store.getGlobalState()
    }
  },
  methods: {
    handleCommand (val) {
      this.$i18n.locale = val
    },
    toHome () {
      this.$router.push({ name: 'home' })
    },
    changeState () {
      store.setGlobalState({
        user: { name: '主修' + Math.round(Math.random() * 100) }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #c4f9e1;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.project-title {
  cursor: pointer;
}
</style>