<template>
    
    <div>
        <div class="type-title">
            {{channelName}}
        </div>
        <Loading v-if="isLoading"/>
        <NewsList v-else :news="news" />
        <Pager
        :page="page"
        :limit="limit"
        :total="total"
        :panelNumber="panelNumber"
        @pageChange="handleChange"
        />

    </div>  
        
</template>


<script>
import NewsList from "../components/news/NewsList";
import Pager from "../components/Pager";
import * as newsServ from "../services/newsService";
import Loading from "../components/Loading";

export default {
    components:{
        Pager,
        NewsList,
        Loading,
    },
    data(){
        return{
            channelName:'',
            limit:15,
            total:0,
            panelNumber:10,
            news:[],
            isLoading:false,

        }
    },
    computed:{
        page(){
            return +this.$route.query.page||1;
        },
       
    },
 

    methods:{
        //设置频道名称
        async setChannelName(){
            var channels = await newsServ.getNewsChannels();
            var channel = channels.find(
                (item) => item.channelId === this.$route.params.id
            );
   
            this.channelName = channel.name;
        },

        //设置所有新闻相关数据
        async setDatas(){
            this.isLoading = true;
            var resp = await newsServ.getNews(
                this.$route.params.id,
                this.page,
                this.limit,

            )
            this.total = resp.allNum;
            this.news = resp.contentlist;
            this.isLoading = false;


        },


        handleChange(newPage){
            //如何在代码中导航
            //命令式导航
            // this.$router.push("?page="+newPage)
            this.$router.push({
                name:"ChannelNews",
                params:{
                    id:this.$route.params.id,
                },
                query:{
                    page:newPage,
                }
            })
            this.setDatas();
        },
        
    },
    watch:{
        "$route.params.id":{
            immediate:true,
            handler(){
                // this.page = 1;
                this.setChannelName();
                this.setDatas();
            }
        }
    }
 

 

}
</script>


<style scoped>
.type-title{
    font-size: 2em;
    color:#888;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
}
</style>