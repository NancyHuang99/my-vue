<template>
    <!-- <div class="news-"types"" v-if="data.length > 0"> -->
    <div class="news-types" v-if="channels.length>0">
         <div 
        class="item" 
        v-for="item in showChannels" 
        :key="item.channelId"
         :class="{
           active: item.channelId===chooseId,
        }"
        @click="switchTo(item.channelId)"
         >
        
    
            <span class="name">{{ item.name }}</span>
        </div>
        <a href=""  @click.prevent="isCollapse=!isCollapse">{{isCollapse?  "展开" : "收起"}}</a>

   
       
    </div>
  
</template>

<script>
import { getNewsChannels } from "@/services/newsService";
// import { mapState } from "vuex";

export default {
    data(){
        return{
            channels:[],
            isCollapse:true, //当前是否为折叠状态
            chooseId:null,
        }
    },
    computed:{
      
        showChannels: function(){
            // console.log('qwed')
            if(this.isCollapse){
                
                return this.channels.slice(0,8);        
                
            }else{
                 return this.channels;
        
            }
        },
    },
    async created(){
        var  resp = await getNewsChannels();
        this.channels=resp;
        //此时才有id
  
        this.switchTo( this.channels[0].channelId)

    },
    methods:{
        //切换chooseId
        switchTo(id) {            
            this.chooseId = id;
            //console.log(this.chooseId)
            //触发一个事件，让组件的使用者用
            this.$emit("change",this.chooseId);
        }
    }


}
</script>

<style scoped>
.news-types{
    margin: 30px 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    padding-bottom: 15px;
}
.item{
    padding:10px 20px;
}

.active{color: lightcoral;}
.item:hover{
    background: #ccc;
}
.item.active{
    background: #000;
    color: #fff;
}
.news-types a{
    align-self: flex-end;
    margin-bottom: 20px;
    color:lightskyblue;
}
</style>