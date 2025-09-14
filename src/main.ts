import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@arco-design/web-vue/dist/arco.css";
import ArcoVue from "@arco-design/web-vue";
import "@/plugins/axios";
import "@/access";
// 额外引入图标库
import ArcoVueIcon from "@arco-design/web-vue/es/icon";

createApp(App)
  .use(ArcoVue)
  .use(ArcoVueIcon)
  .use(store)
  .use(router)
  .mount("#app");
