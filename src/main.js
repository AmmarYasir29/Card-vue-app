import Vue from "vue";
import App from "./App.vue";
import Product from "./components/Product";
Vue.component("Product", Product);
new Vue({
  el: "#app",
  render: h => h(App)
});
