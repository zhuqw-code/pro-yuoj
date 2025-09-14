<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer"
        >跟学oj项目版权@zhuquanwei
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<style scoped></style>

<style>
#basicLayout {
}

#basicLayout .header {
  padding: 10px;
  box-shadow: #eee 1px 1px 5px;
  margin-bottom: 16px;
}

#basicLayout .content {
  background: linear-gradient(to right, #fff, #ccc);
  margin-bottom: 16px;
  padding: 20px;
}

#basicLayout .footer {
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: blanchedalmond;
  padding: 20px;
  text-align: center;
}
</style>
