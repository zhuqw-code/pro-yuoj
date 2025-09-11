import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "宋江",
    },
  }),
  actions: {
    async getLoginUser({ commit, state }, payload) {
      // todo 改成从远程获取登录信息
      commit("updateUser", payload);
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
