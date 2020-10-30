import axios from "axios";
import {APPCODE} from "./config";

//获取新闻类别
export async function getNewsChannels(){

     var resp = await axios.get("http://ali-news.showapi.com/channelList",{
        headers:{
            Authorization:`APPCODE ${APPCODE}`,
         },
     });
    
    // console.log(resp.data.showapi_res_body.channelList);
    return resp.data.showapi_res_body.channelList;
    
}
// getNewsChannels();
export async function getNews(channelId,page=1,limit=10){
   
    var resp = await axios.get("http://ali-news.showapi.com/newsList",{
        headers:{
            Authorization:`APPCODE ${APPCODE}`,
        },
        params:{
             channelId,
             page,
             maxResult:limit,
             contentlist:false,
             needContent:true,
        }
     });

    //  console.log(resp.data.showapi_res_body.pagebean)
     return resp.data.showapi_res_body.pagebean;

}
// getNews("5572a108b3cdc86cf39001cd");

