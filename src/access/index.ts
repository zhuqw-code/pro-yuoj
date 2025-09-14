/**
 * 切记别忘了在main.ts中引入
 */
import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  console.log("用户: " + store.state.user.loginUser.userName);
  // 自动登录逻辑
  const loginUser = store.state.user.loginUser;
  // 没有登录就自动登录 【这里的自动登录是后台自己执行userRole=ACCESS_ENUM.NOT_LOGIN，多次不登录只赋值一次】
  if (!loginUser || !loginUser.userRole) {
    await store.dispatch("user/getLoginUser");
  }

  // 页面访问逻辑
  const needAccess = to.meta?.access ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    // 没有登录想要访问必须登录后才能访问的页面
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?redirect=${to.path}`);
      return;
    }
    // 登陆后/管理员   vs    登录权限页面/管理员权限页面
    // 只有普通登录者不能访问管理员权限页面   --->  特判这种
    if (!checkAccess(loginUser, needAccess as string)) {
      next("/noAuth");
      return;
    }
  }
  // 没有登录访问没有权限的页面也会在这里放行
  next();
});
