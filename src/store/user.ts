import { StoreOptions } from "vuex";
import { UserControllerService } from "../../generated";
import ACCESS_ENUM from "@/access/accessEnum";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
    },
  }),
  actions: {
    // 只有从后端拿到用户已登录信息才会将用户信息更新，从而渲染管理员页面
    // 即使在GlobalHeader中已经发送请求了，也不会
    async getLoginUser({ commit, state }, payload) {
      const res = await UserControllerService.getLoginUserUsingGet();
      if (res.code === 0) {
        commit("updateUser", res.data);
      } else {
        commit("updateUser", {
          ...state.loginUser, // 浅拷贝对象。Vuex中状态不可变，禁止直接修改原状态
          userRole: ACCESS_ENUM.NOT_LOGIN,
        });
      }
      // todo 改成从远程获取登录信息
      // commit("updateUser", payload);
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
