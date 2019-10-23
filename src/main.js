import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import './router/guard'; // 全局路由守卫
import store from "./store";
import './plugins/vant';
import '@vant/touch-emulator';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
