import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ACCESS_ENUM from "@/access/accessEnum";

export const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/home" },
  {
    path: "/user",
    name: "用户",
    meta: {
      hideInMenu: true,
    },
    component: () => import("@/BasicLayout/UserLayout.vue"),
    children: [
      {
        path: "/user/login",
        name: "登录页面",
        component: () => import("@/views/user/UserLoginView.vue"),
      },
      {
        path: "/user/register",
        name: "注册页面",
        component: () => import("@/views/user/UserRegisterView.vue"),
      },
    ],
  },
  {
    path: "/logout",
    name: "退出",
    meta: {
      hideInMenu: true,
    },
    component: () => import("@/views/user/UserLogoutView.vue"),
  },
  {
    path: "/home",
    name: "浏览题目",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/noAuth",
    name: "权限",
    component: () => import("@/views/NoAuth.vue"),
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/hide",
    name: "隐藏页面",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/about",
    name: "关于我的",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/admin",
    name: "管理员页面",
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
    component: () => import("../views/AdminView.vue"),
  },
];
