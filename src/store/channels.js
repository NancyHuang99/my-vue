// channels 仓库数据

import {getNewsChannels } from "../services/newsService";

export default {
    namespaced:true,//开启命名空间
    state:{
        channels:{
            data:[],
            isLoading:false,
        },

    },
    mutations:{
        //
        setIsLoading(state,payload){
            state.isLoading = payload;
        },
        setData(state,payload){
            state.data = payload;
        }
    },
    actions:{
        async fetchDatas(context){
            //
            context.commit("setIsLoading",true);
            //
            var channels = await getNewsChannels();
            //设置data为channels
            context.commit("setData",channels);
            //
            context.commit("setIsLoading",false);
            // console.log(this.state.channels.data.length)
        }
    },
}