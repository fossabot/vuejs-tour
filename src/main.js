import Vue from "vue";
import VueKatex from "vue-katex";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(VueKatex);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
