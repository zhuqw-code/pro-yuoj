<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header"> 用户登录页</a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <span>yuoj版权@3184223157</span>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<style scoped></style>

<style scoped>
#userLayout {
  background-image: url("@/assets/loginBack.png");
  background-size: 100%;
}

#userLayout .header {
  padding: 10px;
  margin-bottom: 16px;
  color: white;
  font-size: 50px;
  margin-top: 100px;
  text-align: center;
}

#userLayout .content {
  //background: linear-gradient(to right, #fff, #ccc);
  margin-bottom: 16px;
  padding: 20px;
  position: absolute;
  top: 200px;
  left: 600px;
}

#userLayout .footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  //background-color: blanchedalmond;
  padding: 20px;
  text-align: center;
}
</style>
