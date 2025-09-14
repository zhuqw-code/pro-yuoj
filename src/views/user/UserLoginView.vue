<template>
  <div id="userLogin">
    <a-form
      :model="form"
      :style="{ width: '600px' }"
      @submit="handleSubmit"
      size="large"
      label-align="left"
    >
      <a-form-item field="userAccount" label="账号" required minLength="8">
        <a-input v-model="form.userAccount" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item
        field="userPassword"
        label="密码"
        tooltip="密码长度不小于8"
        required
      >
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入密码"
        />
      </a-form-item>
      <a-form-item>
        <a-button style="width: 100vh" type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService } from "../../../generated";
import { Message } from "@arco-design/web-vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const form = reactive({
  userAccount: "",
  userPassword: "",
});

const router = useRouter(); // 路由跳转
const store = useStore(); // 用户状态更新

const handleSubmit = async () => {
  // alert(JSON.stringify(form));
  // 调用后端登录接口
  const res = await UserControllerService.userLoginUsingPost(form);
  if (res.code === 0) {
    Message.success(form.userAccount + "登录成功！！！");
    // 用户状态信息更改
    await store.dispatch("user/getLoginUser");
    // 路由跳转
    await router.push({
      path: "/",
      replace: true, // 不赞用浏览器历史记录的堆栈，并且登录后不能在退回登录页
    });
  } else {
    Message.error(JSON.stringify(res.data));
  }
};
</script>

<style scoped>
.arco-form-item-label-col > .arco-form-item-label {
  color: white;
}
</style>
