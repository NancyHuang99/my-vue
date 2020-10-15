import VueRouter from "vue-router";
import Vue from 'vue';
import config from "./config";


//1.安装
Vue.use(VueRouter);

//2.创建路由对象
var router = new VueRouter(config);

router.beforeEach(function(to,from,next){
    // console.log("to",to);
    // console.log("from",from);
    // next({to:"Login"})
    if(to.meta.auth){
        //登录才能访问
        next({ name:"Login"})
    }else{
        next();
    }
})


export default router;