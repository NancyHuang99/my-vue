import VueRouter from "vue-router";
import Vue from 'vue';
import config from "./config";
import store from "../store"


//1.安装
Vue.use(VueRouter);

//2.创建路由对象
var router = new VueRouter(config);

router.beforeEach(function(to,from,next){
 
    if(to.meta.auth){
        //登录才能访问
        if(store.state.loginUser.isLoading){
            next({name:"Auth",query:{returnurl:to.fullpath}})
        }else if(store.state.loginUser.data){
            next()
        }else{
            next({ name:"Login"})
            
        }
        
    }else{
        next();
    }
    next();
})


export default router;