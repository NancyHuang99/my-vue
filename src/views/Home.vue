<template>
    <div>
        <Banner  :banners="banners" :duration="3000" />
        <Channels @change="handleChange"/>
        <Loading v-show="isLoading" />
        <!-- <NewsList v-show="!isLoading" :news="news" /> -->
        
    </div>
  
</template>

<script>
import Banner from "../components/Banner";
import Channels from "../components/news/Channels";
// import NewsList from "../components/news/NewsList";
import Loading from "../components/Loading";
import { getNews } from "../services/newsService";

export default {
    components:{
        Banner,
        Channels,
        // NewsList,
        Loading,
    },

    data(){
        return{
            banners:[
                {link:"http://www.baidu.com",url:require("../assets/banner/1.jpg")},
                {link:"http://www.baidu.com",url:require("../assets/banner/2.jpg")},
                {link:"http://www.baidu.com",url:require("../assets/banner/3.jpg")},
            ],
            news:[],
            isLoading:true,

        }
        
        
    },

    methods:{
        async handleChange(channelId){         
            this.isLoading=true;
            var resp= await getNews(channelId,1,10);            
            this.news = resp.contentlist;
            this.isLoading=false;
        }
    }

}
</script >


<style scoped>

.containe{
    margin: 0 auto;
}
</style>