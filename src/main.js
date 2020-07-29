import Vue from "vue";
import App from "./App.vue";

//plugins
import "./plugins/Vuelidate";


//directives
import phoneDirective from "./directives/phone";
import type from "./directives/isType";

Vue.directive("mask", phoneDirective);
Vue.directive("type", type);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
