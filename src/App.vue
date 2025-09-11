<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import "@/assets/base.css";
import BasicLayout from "@/BasicLayout/BasicLayout.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter(); // 根据路由判断页面权限情况
const store = useStore(); // 拿到全局用户数据测试其权限
router.beforeEach((to, from, next) => {
  // console.log(to);
  if (to.meta?.access === "canAdmin") {
    // 首先你想访问隐私页面
    if (store.state.user?.loginUser?.role !== "canAdmin") {
      // 其次你有权限访问
      location.href = "/noAuth"; // 相当于重新计时
      // next("/noAuth"); // 相当于累加计时，切直接点不动
      return;
    }
  }
  next();
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
