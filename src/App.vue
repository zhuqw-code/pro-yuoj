<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <!-- 直接引用不用在套一层BasicLayout -->
      <router-view />
    </template>
    <template v-else>
      <!-- 老样子 -->
      <BasicLayout />
    </template>
  </div>
</template>

<script setup lang="ts">
import "@/assets/base.css";
import BasicLayout from "@/BasicLayout/BasicLayout.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import UserLayout from "@/BasicLayout/UserLayout.vue";

const route = useRoute();

/**
 * 全局初始化函数，有全局单词调用的代码，都可以写到这里
 */
const doInit = () => {
  console.log("hello 欢迎来到我的项目");
};

// 全局初始化时，组件挂载时
onMounted(() => {
  doInit();

});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
