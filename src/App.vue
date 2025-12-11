<script>
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import JsxExample from './components/JsxExample.jsx'
import RequireContextDemo from './components/RequireContextDemoJsx.jsx'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    JsxExample,
    RequireContextDemo
  }
})
</script>

<template>
  <div>
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
    
    <!-- Element UI 测试 -->
    <el-card class="element-test" shadow="hover">
      <div slot="header">
        <span>Element UI 测试</span>
      </div>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <div style="margin-top: 20px;">
        <el-input placeholder="请输入内容" style="width: 300px;"></el-input>
      </div>
    </el-card>
    
    <!-- JSX 组件示例 -->
    <JsxExample title="Vue 2.7 JSX 功能展示" />
    
    <!-- require.context 示例 -->
    <RequireContextDemo />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.element-test {
  margin: 20px auto;
  max-width: 600px;
}
</style>
