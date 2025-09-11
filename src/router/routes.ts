import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";

export const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "浏览题目",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/noAuth",
    name: "隐式页面",
    component: () => import("@/views/NoAuth.vue"),
  },
  {
    path: "/about",
    name: "关于我的",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/admin",
    name: "管理员隐私页",
    meta: {
      access: "canAdmin",
    },
    component: () => import("../views/AdminView.vue"),
  },
];
