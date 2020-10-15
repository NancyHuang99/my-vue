import Vue from 'vue';
import vuex from "vuex";
import channels from "./channels";
import loginUser from "./loginUser";
// console.log(channels)
Vue.use(vuex);
var store=new vuex.Store({
  //配置
  modules:{
      channels,
      loginUser,
  }
});
// console.log(store)
export default store;