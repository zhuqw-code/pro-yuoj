<template>
  <a-row id="globalHeader" style="margin-bottom: 16px" align="center">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="@/assets/logo.jpg" />
            <div class="title">鱼OJ</div>
          </div>
        </a-menu-item>
        <!--   通过读取路由文件+v-for形式实现菜单元属渲染   -->
        <a-menu-item v-for="item in routes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>{{ store.state.user?.loginUser?.userName ?? "不知道" }}</div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

// data
const router = useRouter(); // 控制路由跳转
const route = useRoute(); // 获取用户信息
// const select_keys = ref(route.path); // 保留上一次的路由状态，防止刷新浏览器后对应栏目状态未保留
// console.log(route);
// const selectKeys = ref([route.path]);
const selectKeys = ref(); // :selected-keys类型时string[]数组

// method
// 当我们点击时调用该方法并自动给这个方法传递点击的路由path
const doMenuClick = (key: string) => {
  // console.log(key);
  router.push({
    path: key,
  });
};

// 使用监听路由的方式，每次点击时就会改变路由地址，我们在改变时设置高亮
// 路由跳转时更新菜单项的高亮
router.afterEach((to) => {
  selectKeys.value = [to.path];
});

// 获取用户信息
const store = useStore();
// console.log(store.state.user.loginUser.userName);
// 模拟后端响应数据
setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "吴用",
    role: "canAdmin",
  });
}, 3000);
</script>

<style scoped>
#globalHeader {
}

#globalHeader .title-bar {
  //height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 68px;
}

.title {
  margin-left: 15px;
  color: #866dff;
}
</style>
