<template>
  <div class="micro-warpper">
    <el-menu :default-active="microType" router class="left-menu">
      <el-submenu index="webpack">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>webpack构建的服务</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="vue2" :route="{'name': 'sub-vue2'}">Vue2项目</el-menu-item>
          <el-menu-item index="react" :route="{'name': 'sub-react'}">React项目</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="html" :route="{'name': 'sub-html'}">
        <i class="el-icon-menu"></i>
        <span slot="title">html页面的服务</span>
      </el-menu-item>
    </el-menu>
    <div id="subapp-container"></div>
  </div>
</template>

<script>
export default {
  name: 'Vue2FrameMicroComponent',

  data () {
    return {
      microType: 'html'
    }
  },

  mounted () {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>
.micro-warpper {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .left-menu {
    width: 220px;
    overflow: hidden;
    /deep/ .el-submenu__title {
      max-width: 220px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  #subapp-container {
    width: calc(100% - 240px);
  }
}
</style>