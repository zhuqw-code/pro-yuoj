import { createStore } from "vuex";
import user from "@/store/user";

export default createStore({
  // 需要保存的全局状态放到state中
  mutations: {},
  actions: {},
  modules: {
    user,
  },
});
