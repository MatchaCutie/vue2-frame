<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-button @click="toAbout">跳转到about页面</el-button>
    <el-button @click="toMicro">跳转到包含qiankun微服务的页面</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    toAbout () {
      this.$router.push({ name: 'about' })
    },
    toMicro () {
      this.$router.push({ name: 'sub-vue2' })
    }
  },
}
</script>
<style lang="scss">
.home {
  padding: 20px;
  text-align: center;
}
</style>