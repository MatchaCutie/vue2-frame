<template>
  <div id="app">
    <div id="nav">
      <div class="project-title" @click="toHome">wwy学习qiankun项目</div>
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
export default {
  methods: {
    handleCommand (val) {
      this.$i18n.locale = val
    },
    toHome () {
      this.$router.push({ name: 'home' })
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