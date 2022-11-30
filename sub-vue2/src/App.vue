<template>
  <div id="app" class="vue2-app">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <div>
      <p>当前处于<code>{{ isInQiankun ? 'qiankun' : '独立运行'}}</code>环境</p>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  computed: {
    isInQiankun () {
      return window.__POWERED_BY_QIANKUN__
    }
  }
}
</script>

<style lang="scss">
.vue2-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>