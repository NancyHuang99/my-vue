import Vue from 'vue';
import App from './App.vue';
import "./assets/style/reset.css";
import "./assets/style/global.css";
import router from "./routers";
import store from "./store";

//console.log(store)
//频道一开始就获取数据
store.dispatch("channels/fetchDatas");
store.dispatch("loginUser/whoAmI");
// console.log(store)

new Vue({
  render: h => h(App),
  router,//配置路由到vue实例中
  store,
}).$mount('#app')
