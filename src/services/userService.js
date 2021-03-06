import axios from "axios";

function delay(duration){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    })
}

export async function login(loginInfo){
    await delay(2000);
    // post http://study.yuanjin.teach/api/user/login
    var resp = await axios.post("/api/user/login",loginInfo);
    var token = resp.headers.authorization;//拿到服务器令牌
    //console.log(token)
    if(token){
        localStorage.setItem("token",token);
    }
    return resp.data;
    
}
 
//使用保持的令牌从服务器换取登录信息
 export async function whoAmI(){
     //get http://study.yuanjin.tech/api/user/whoami;
     //authorization:bearer tokenXXXXXx
     await delay(2000);
     var token = localStorage.getItem("token");
     if(!token){
         return null;
     }
     var resp = await axios.get("/api/user/whoami",{
        headers:{
            authorization:`bearer ${token}`,
        },

     });

    return resp.data;

 }

 //注销
 export function loginOut(){
     localStorage.removeItem("token");
 }

 //注册
 export async function reg(userInfo){
     // post http://study.yuanjin.tech/api/user/reg
     var resp = await axios.post("/api/user/reg",userInfo);
     return resp.data;

 }