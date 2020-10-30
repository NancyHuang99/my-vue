import Vue from 'vue';
import App from './App.vue';
import "./assets/style/reset.css";
import "./assets/style/global.css";
import router from "./routers";
import store from "./store";

store.dispatch("channels/fetchDatas");
store.dispatch("loginUser/whoAmI");


new Vue({
  render: h => h(App),
  router,//配置路由到vue实例中
  store,

}).$mount('#app')

export default store;