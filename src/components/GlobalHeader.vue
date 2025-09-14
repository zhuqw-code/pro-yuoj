<template>
  <a-row id="globalHeader" align="center" justify="space-between" :wrap="false">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectKeys"
        @menu-item-click="doMenuClick"
        style="justify-content: flex-start"
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
        <a-menu-item v-for="item in visibleRouter" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="150px">
      <div>
        <router-link
          to="/user/login"
          style="margin: 10px"
          v-if="store.state?.user?.loginUser?.userName === '未登录'"
        >
          <icon-user-add />
        </router-link>
        <!-- todo 离开后需要将store中user数据置空 -->
        <router-link
          to="/logout"
          style="margin: 10px"
          v-if="store.state?.user?.loginUser.userName !== '未登录'"
        >
          <icon-export />
        </router-link>
        {{ store.state?.user?.loginUser?.userName ?? "未登录" }}
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import ACCESS_ENUM from "@/access/accessEnum";

// data
const router = useRouter(); // 控制路由跳转
// const route = useRoute(); // 获取用户信息
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
// 模拟后端响应数据【此功能已转换为】
// setTimeout(() => {
//   store.dispatch("user/getLoginUser", {
//     userName: "吴用",
//     userRole: ACCESS_ENUM.ADMIN,
//   });
// }, 3000);

// 过滤掉需要隐藏的页面【给方法为stream流操作，会将集合中符合的以数组形式返回】
// const loginUser = store.state.user.loginUser;  // 不能这样写，因为这样只赋值一次，后续修改了这个也不会更新
const visibleRouter = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      // 不能显示的页面
      return false;
    }
    // 根据权限过滤菜单
    if (!checkAccess(store.state.user.loginUser, item.meta?.access as string)) {
      return false;
    }
    return true;
  });
});
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
  height: 60px;
}

.title {
  margin-left: 15px;
  color: #866dff;
}
</style>
