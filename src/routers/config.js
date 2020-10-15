export default{
    routes:[
        {
            path:"/",
            name:'Home',
            component:() => import("@/views/Home"),
        },
        {
            path:"/login",
            name:"Login",
            component:() => import("@/views/Login"),
        },
        {
            path:"/reg",
            name:"Reg",
            component:() => import("@/views/Reg"),
        },
        {
            path:"/channel/:id",
            name:"ChannelNews",
            component:() => import("@/views/ChannelNews"),
        },
        {
            path:"/personal",
            name:"personal",
            component:() => import("@/views/Personal.vue"),
            meta:{
                auth:true,
            }
        },
        {
            path:"*",
            name:"404",
            component:() => import("@/views/NoFound"),
        },
       
    ],
    mode:"history",
}